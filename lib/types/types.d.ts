import { BytesLike } from "ethers";
import React from "react";
export declare enum ModalState {
    DEPOSIT = 0,
    TRANS_LOADING = 1,
    DEPOSIT_ASSET_SELECTION = 2,
    HISTORY = 3,
    RESPONSE = 4,
    INTERACT = 5,
    INTERACT_CONFIRM = 6,
    CONNECT_WALLET = 7,
    WITHDRAWAL = 8,
    USER_INTERFACE = 9
}
export interface AppConfig {
    appState: {
        moduleId: string;
        modalInfo: ModalInfo;
        website: string;
        isModalOpen: boolean;
        getFuncConfig?: (funcId: string) => FunctionConfig;
    };
    dispatchAppState?: React.Dispatch<any>;
}
export interface UserInterfaceConfig {
    handleConnectWallet: () => void;
    handleProtocolTransaction: (funcId: BytesLike, tokenAddr: string, amount: number, funcPayload: BytesLike) => void;
    handleDeposit: () => void;
    handleWithdrawal: () => void;
}
export interface FunctionConfig {
    interactType: string;
    interactDescription: string;
}
export interface TradableConfig {
    app_name: string;
    moduleId: string;
    initialModal: ModalInfo;
    moduleFuncConfig: {
        [key: string]: FunctionConfig;
    };
}
export interface Interaction {
    interactAmount: number;
    funcId: BytesLike;
    payload: BytesLike;
    tokenAddr: string;
    createdAt?: string;
}
export interface AppSetupParams {
    moduleId: string;
}
export interface InteractionHistory {
    pending: Interaction[];
    completed: Interaction[];
}
export interface TransactionLoading {
    transType: string;
    eventOptions?: any;
    eventQuery?: EventQuery;
    nextModal?: ModalInfo;
    address: string;
    amount: number;
}
export interface EventQuery {
    key: string;
    value: any;
}
export interface ModuleFuncConfig {
    funcId: BytesLike;
    name: string;
    description: string;
}
export interface ResponseVal {
    isSuccessful: boolean;
    interactType: string;
    amount: number;
    responseMsg: string;
}
export interface ModuleDataSet {
    [key: string]: {
        [key: string]: InteractionHistory;
    };
}
export interface AppFeatures {
    changeModal?: (modalState: ModalInfo) => void;
    closeModal?: () => void;
    userAddr: string;
}
export interface ModalInfo {
    modalState: ModalState | null;
    optionalData?: any;
}
export declare enum AssetSelectionTransactionType {
    DEPOSIT = 0,
    WITHDRAWAL = 1
}
export interface Deposit {
    selectedChainId?: number;
    tokenName?: string;
    assetImage?: string;
    chainImage?: string;
    transactType?: AssetSelectionTransactionType;
    tokenAddr?: string;
}
export interface ConnectWallet {
    nextModal?: ModalInfo | null;
}
