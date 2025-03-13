/// <reference types="vite/client" />

declare module "*.css";
declare module "*.scss";
declare module "*.png" {
	const value: string;
	export default value;
  }
  declare module "*.svg" {
	const value: string;
	export default value;
  }
  declare module "*.gif" {
	const value: string;
	export default value;
  }
  

interface ImportMetaEnv {
	readonly VITE_WC_PROJECT_ID: string;
	readonly VITE_BASE_CHAIN_NETWORK_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
