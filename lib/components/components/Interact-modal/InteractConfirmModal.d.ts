import { AppFeatures, Interaction } from "../../../types/types.ts";
import "./interact-modal.css";
import { BytesLike } from "ethers";
interface InteractModalProps extends Interaction, AppFeatures {
    receiptId: BytesLike;
}
declare const InteractConfirmModal: ({ changeModal, closeModal, payload, receiptId, }: InteractModalProps) => import("react/jsx-runtime").JSX.Element;
export default InteractConfirmModal;
