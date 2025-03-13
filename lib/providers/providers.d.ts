import { TradableConfig } from "../types/types.ts";
import "../components/index.css";
interface TradableSDKProviderProps extends TradableConfig {
    children: React.ReactNode;
}
declare const TradableSDKProvider: ({ moduleId, initialModal, app_name, moduleFuncConfig, children, }: TradableSDKProviderProps) => import("react/jsx-runtime").JSX.Element;
export default TradableSDKProvider;
