import "./deposit.css";
import { AppFeatures, Deposit } from "../../../types/types.ts";
export interface DepositModalProps extends Deposit, AppFeatures {
}
declare const DepositModal: ({ selectedChainId, closeModal, changeModal, assetImage, tokenName, chainImage, tokenAddr, userAddr, }: DepositModalProps) => import("react/jsx-runtime").JSX.Element;
export default DepositModal;
