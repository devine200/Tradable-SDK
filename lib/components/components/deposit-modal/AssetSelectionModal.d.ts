import "./deposit.css";
import { AppFeatures, Deposit } from "../../../types/types.ts";
interface AssetSelectionModalProps extends Deposit, AppFeatures {
}
declare const AssetSelectionModal: ({ closeModal, changeModal, transactType, }: AssetSelectionModalProps) => import("react/jsx-runtime").JSX.Element;
export default AssetSelectionModal;
