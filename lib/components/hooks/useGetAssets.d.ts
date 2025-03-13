export interface ChainData {
    name: string;
    logo: string;
    chainId: number;
    tokens: TokenData[];
}
export interface TokenData {
    name: string;
    address: string;
    logo: string;
}
export declare const getTokenConfig: (chainData: ChainData[], address: string) => TokenData;
declare const useGetAssets: () => ChainData[];
export default useGetAssets;
