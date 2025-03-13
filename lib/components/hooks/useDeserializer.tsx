import { AbiCoder, BytesLike } from "ethers";
import contractConfig from "../utils/test-config.json" with { type: "json" };

interface DeserializerVals {
	getVaultAddressFromModuleId: (moduleId: BytesLike) => string;
	getVaultChainId: (vaultAddr: string) => Number;
	getVaultConfig: (vaultAddr: string) => any;
	deconstructReceiptId: (receiptId: BytesLike) => any;
	constructReceiptId: (
		funcId: BytesLike,
		userAddr: string,
		tokenAddr: string,
		amount: BigInt,
		nonce: BigInt,
	) => BytesLike;
}

interface DestructuredReceiptId {
	funcId: BytesLike;
	userAddr: string;
	tokenAddr: string;
	amount: BigInt;
	nonce: BigInt;
}

const useDeserializer = (): DeserializerVals => {
	const abiCoder: AbiCoder = AbiCoder.defaultAbiCoder();

	const getVaultAddressFromModuleId = (moduleId: BytesLike): string => {
		const [, vaultAddr] = abiCoder.decode(["address", "address"], moduleId);
		return vaultAddr;
	};

	const getVaultConfig = (vaultAddr: string): any => {
		return Object.values(contractConfig.tradableSideVault.vault).filter(
			(vault) => vault.tradableSideVault === vaultAddr,
		)[0];
	};

	const getVaultChainId = (vaultAddr: string): Number => {
		return getVaultConfig(vaultAddr).networkId;
	};

	const constructReceiptId = (
		funcId: BytesLike,
		userAddr: string,
		tokenAddr: string,
		amount: BigInt,
		nonce: BigInt,
	): BytesLike => {
		return abiCoder.encode(
			["bytes", "address", "address", "uint256", "uint256"],
			[funcId, userAddr, tokenAddr, amount, nonce],
		);
	};

	const deconstructReceiptId = (receiptId:BytesLike):DestructuredReceiptId => {
		const [funcId, userAddr, tokenAddr, amount, nonce] = abiCoder.decode(
			["bytes", "address", "address", "uint256", "uint256"],
			receiptId,
		);

		return {
			funcId,
			userAddr,
			tokenAddr,
			amount,
			nonce,
		};
	}


	return {
		getVaultAddressFromModuleId,
		getVaultChainId,
		getVaultConfig,
		deconstructReceiptId,
		constructReceiptId,
	};
};

export default useDeserializer;
