import { AppFeatures, Interaction } from "../../../types/types.ts";
import "./interact-modal.css";
interface InteractModalProps extends Interaction, AppFeatures {
}
declare const InteractModal: (props: InteractModalProps) => import("react/jsx-runtime").JSX.Element;
export default InteractModal;
