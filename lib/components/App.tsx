import { useState, useEffect, useContext } from "react";
import { useAccount } from "wagmi";
import AssetSelectionModal from "./components/deposit-modal/AssetSelectionModal.tsx";
import DepositModal from "./components/deposit-modal/DepositModal.tsx";
import InteractHistoryModal from "./components/Interact-modal/InteractHistoryModal.tsx";
import InteractModal from "./components/Interact-modal/InteractModal.tsx";
import TransactionLoadingModal from "./components/response-modal/TransactionLoadingModal.tsx";
import ResponseModal from "./components/response-modal/ResponseModal.tsx";
import ConnectWallet from "./components/connect_wallet-modal/ConnectWalletModal.tsx";
import ModalLayout from "./ModalLayout.tsx";
import { ModalState, ModalInfo, AppFeatures } from "../types/types.ts";

import UserInterfaceDemo from "./components/user-interface-modal/index.tsx";
import WithdrawalModal from "./components/withdraw-modal/WithdrawalModal.tsx";
import InteractConfirmModal from "./components/Interact-modal/InteractConfirmModal.tsx";
import { AppConfigContext } from "../contexts/contexts.ts";

function App() {
	const { isConnected } = useAccount();
	const { address } = useAccount();

	const { appState, dispatchAppState } =
		useContext(AppConfigContext);
		
	const { isModalOpen, modalInfo } = appState;

	const [currentModal, setCurrentModal] = useState<React.ReactElement>();

	const closeModal = () => {
		dispatchAppState!({ isModalOpen: false });
	};

	const changeModal = (modalInfo: ModalInfo) => {
		dispatchAppState!({ isModalOpen: true, modalInfo });
	};

	const appFeatures: AppFeatures = {
		closeModal,
		changeModal,
		userAddr: address as string,
	};

	useEffect(() => {
		if (isConnected || !isModalOpen) return;

		dispatchAppState!({
			modalInfo: {
				modalState: ModalState.CONNECT_WALLET,
				optionalData: {
					nextModal: {modalState: ModalState.USER_INTERFACE},
				},
			},
		});
	}, [isConnected]);

	useEffect(() => {
		const modalProps = {
			...(modalInfo.optionalData ? modalInfo.optionalData : {}),
			...appFeatures,
		};

		if (!isModalOpen) {
			setCurrentModal(<UserInterfaceDemo {...modalProps} />);
			return;
		}

		if (modalInfo.modalState === ModalState.INTERACT) {
			setCurrentModal(<InteractModal {...modalProps} />);
		} else if (modalInfo.modalState === ModalState.INTERACT_CONFIRM) {
			setCurrentModal(<InteractConfirmModal {...modalProps} />);
		} else if (modalInfo.modalState === ModalState.RESPONSE) {
			setCurrentModal(<ResponseModal {...modalProps} />);
		} else if (modalInfo.modalState === ModalState.HISTORY) {
			setCurrentModal(<InteractHistoryModal {...modalProps} />);
		} else if (modalInfo.modalState === ModalState.TRANS_LOADING) {
			setCurrentModal(<TransactionLoadingModal {...modalProps} />);
		} else if (
			modalInfo.modalState === ModalState.DEPOSIT_ASSET_SELECTION
		) {
			setCurrentModal(<AssetSelectionModal {...modalProps} />);
		} else if (modalInfo.modalState === ModalState.DEPOSIT) {
			setCurrentModal(<DepositModal {...modalProps} />);
		} else if (modalInfo.modalState === ModalState.CONNECT_WALLET) {
			setCurrentModal(<ConnectWallet {...modalProps} />);
		} else if (modalInfo.modalState === ModalState.WITHDRAWAL) {
			setCurrentModal(<WithdrawalModal {...modalProps} />);
		} else if (modalInfo.modalState === ModalState.USER_INTERFACE) {
			setCurrentModal(<UserInterfaceDemo {...modalProps} />);
		} else {
			setCurrentModal(<></>);
		}
	}, [modalInfo, isModalOpen]);

	return isModalOpen ? <ModalLayout>{currentModal}</ModalLayout> : <></>;
}

export default App;
