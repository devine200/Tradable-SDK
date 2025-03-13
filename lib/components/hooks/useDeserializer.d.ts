import { BytesLike } from "ethers";
interface DeserializerVals {
    getVaultAddressFromModuleId: (moduleId: BytesLike) => string;
    getVaultChainId: (vaultAddr: string) => Number;
    getVaultConfig: (vaultAddr: string) => any;
    deconstructReceiptId: (receiptId: BytesLike) => any;
    constructReceiptId: (funcId: BytesLike, userAddr: string, tokenAddr: string, amount: BigInt, nonce: BigInt) => BytesLike;
}
declare const useDeserializer: () => DeserializerVals;
export default useDeserializer;
