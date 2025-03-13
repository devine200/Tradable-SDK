import "./response.css";
import { TransactionLoading, AppFeatures } from "../../../types/types.ts";
interface TransactionLoadingModalProps extends TransactionLoading, AppFeatures {
}
declare const TransactionLoadingModal: ({ transType, closeModal, changeModal, eventOptions, amount, nextModal, eventQuery, }: TransactionLoadingModalProps) => import("react/jsx-runtime").JSX.Element;
export default TransactionLoadingModal;
