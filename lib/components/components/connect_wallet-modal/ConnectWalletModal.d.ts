import "./connect-wallet.css";
import { AppFeatures, ConnectWallet } from "../../../types/types.ts";
interface ConnectWalletModalProps extends ConnectWallet, AppFeatures {
}
declare const ConnectWalletModal: ({ nextModal, closeModal, changeModal, }: ConnectWalletModalProps) => import("react/jsx-runtime").JSX.Element;
export default ConnectWalletModal;
