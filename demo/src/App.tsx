import { TradableSDKProvider, types  } from "tradable-sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Click from "./Click.tsx";

function App() {
  const tradableConfig:types.TradableConfig = {
    app_name: "Tradable Demo",
    moduleId: "0x00000000000000000000000044edbc1b4d7f235fc62e4a73f6324740327fff3b0000000000000000000000006d296458a3df350390a57c4a5b536736415707d8",
    initialModal: {
      modalState: types.ModalState.USER_INTERFACE,
      optionalData: {},
    },
    moduleFuncConfig: {
      "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000f31467c0ca100abef512002183de7dcbeb9d2fc0000000000000000000000000abd9ca667bc2c737996929c2c9c5fc94af947fd200000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000566756e6331000000000000000000000000000000000000000000000000000000":{
        interactType: "Protocol Deposit",
        interactDescription: "Deposit from your tradable balance to your protocol balance", 
      }
    },
  }
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <TradableSDKProvider {...tradableConfig}>
          <Click />
        </TradableSDKProvider>
    </QueryClientProvider>
  )
}

export default App
