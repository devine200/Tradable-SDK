import "./response.css";
import { AppFeatures, ResponseVal } from "../../../types/types.ts";
interface ResponseModalProps extends ResponseVal, AppFeatures {
}
declare const ResponseModal: ({ isSuccessful, amount, interactType, responseMsg, changeModal, closeModal, }: ResponseModalProps) => import("react/jsx-runtime").JSX.Element;
export default ResponseModal;
