import { BytesLike } from "ethers";
interface ContractInteractionVals {
    balance: number;
    depositIntoTradable: (vaultAddr: string, token: string, amount: number) => void;
    withdrawFromTradable: (vaultAddr: string, token: string, amount: number) => void;
    initiateProtocolTransaction: (funcId: BytesLike, token: string, amount: number) => void;
    transactionConfirmation: (vaultAddr: string, receiptId: BytesLike, payload: BytesLike) => Promise<void>;
    transactionRejection: (vaultAddr: string, receiptId: BytesLike) => Promise<void>;
    DEFAULT_TOKEN_DECIMALS: number;
}
declare const useContractInteract: () => ContractInteractionVals;
export default useContractInteract;
