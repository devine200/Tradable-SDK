import { WagmiProvider } from "wagmi";
import App from "../components/App.tsx";
import { config } from "../components/wagmi.ts";
import {
	AppConfig,
	FunctionConfig,
	ModalState,
	TradableConfig,
} from "../types/types.ts";
import {
	AppConfigContext,
	UserInterfaceContext,
} from "../contexts/contexts.ts";
import { useReducer } from "react";
import { BytesLike } from "ethers";

import "../components/index.css";

interface TradableSDKProviderProps extends TradableConfig {
	children: React.ReactNode;
}

const TradableSDKProvider = ({
	moduleId,
	initialModal,
	app_name,
	moduleFuncConfig,
	children,
}: TradableSDKProviderProps) => {
	const reducer = (state: AppConfig, action:any) => {
		return { ...state, ...action };
	};

	const getFuncConfig = (funcId: string): FunctionConfig => {
		const config: string | undefined = Object.getOwnPropertyNames(
			moduleFuncConfig,
		).find((configId) => configId === funcId);
		if (!config) {
			throw new Error("Function not configured");
		}
		return moduleFuncConfig[config];
	};

	const [appState, dispatchAppState] = useReducer(reducer, {
		isModalOpen: false,
		modalInfo: initialModal,
		moduleId,
		website: app_name,
		getFuncConfig,
	});

	const handleConnectWallet = () => {
		dispatchAppState({
			isModalOpen: true,
			modalInfo: {
				modalState: ModalState.CONNECT_WALLET,
				optionalData: {
					nextModal: { modalState: ModalState.USER_INTERFACE },
				},
			},
		});
	};

	const handleProtocolTransaction = (
		funcId: BytesLike,
		tokenAddr: string,
		amount: number,
		funcPayload: BytesLike,
	) => {
		dispatchAppState({
			isModalOpen: true,
			modalInfo: {
				modalState: ModalState.INTERACT,
				optionalData: {
					createdAt: "10/2/2025",
					funcId,
					tokenAddr,
					interactAmount: amount,
					payload: funcPayload,
				},
			},
		});
	};

	const handleWithdrawal = () => {
		dispatchAppState({
			isModalOpen: true,
			modalInfo: {
				modalState: ModalState.WITHDRAWAL,
			},
		});
	};

	const handleDeposit = () => {
		dispatchAppState({
			isModalOpen: true,
			modalInfo: {
				modalState: ModalState.DEPOSIT,
			},
		});
	};

	return config ? (
		<WagmiProvider config={config}>
			<AppConfigContext.Provider value={{ appState, dispatchAppState }}>
				<App />
			</AppConfigContext.Provider>
			<UserInterfaceContext.Provider
				value={{
					handleConnectWallet,
					handleProtocolTransaction,
					handleDeposit,
					handleWithdrawal,
				}}
			>
				{children}
			</UserInterfaceContext.Provider>
		</WagmiProvider>
	) : (
		<></>
	);
};

export default TradableSDKProvider;
