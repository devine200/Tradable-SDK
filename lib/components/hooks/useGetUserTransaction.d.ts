import { InteractionHistory } from "../../types/types.ts";
interface ModuleDetailProps {
    moduleId: string;
    userAddr: string;
}
declare const useGetUserTransactions: ({ moduleId, userAddr, }: ModuleDetailProps) => InteractionHistory;
export default useGetUserTransactions;
