import "../deposit-modal/deposit.css";
import { AppFeatures, Deposit } from "../../../types/types.ts";
interface WithdrawalModalProps extends Deposit, AppFeatures {
}
declare const WithdrawalModal: ({ selectedChainId, closeModal, changeModal, assetImage, tokenName, chainImage, userAddr, tokenAddr, }: WithdrawalModalProps) => import("react/jsx-runtime").JSX.Element;
export default WithdrawalModal;
