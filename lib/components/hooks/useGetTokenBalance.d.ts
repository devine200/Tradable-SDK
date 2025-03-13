interface GetTokenBalanceProps {
    tokenAddr: string;
    selectedChainId: Number;
}
declare const useGetTokenBalance: ({ tokenAddr, selectedChainId, }: GetTokenBalanceProps) => Number;
export default useGetTokenBalance;
