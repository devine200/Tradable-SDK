import { FallbackProvider, JsonRpcProvider } from 'ethers';
import type { Chain, Client, Transport } from 'viem';
export declare function clientToProvider(client: Client<Transport, Chain>): JsonRpcProvider | FallbackProvider;
/** Action to convert a viem Client to an ethers.js Provider. */
export declare function useEthersProvider({ chainId }?: {
    chainId?: number;
}): JsonRpcProvider | FallbackProvider | undefined;
