export type NetworkId = string;

export type Network = {
  name: string;
  id: number;
  chainId: NetworkId;
  shortName: string;
  chain: string;
  rpcUrl: string;
};

export type Networks = {
  [key in NetworkId]: Network;
};

export const networks: Networks = {
  // Ethereum Mainnet
  "0x1": {
    name: "Ethereum Mainnet",
    id: 1,
    chainId: "0x1",
    shortName: "eth",
    chain: "ETH",
    rpcUrl: "https://eth.llamarpc.com",
  },
  // Ethereum Testnet
  "0x5": {
    name: "Goerli Testnet",
    id: 5,
    chainId: "0x5",
    shortName: "eth",
    chain: "ETH",
    rpcUrl: "https://eth-goerli.public.blastapi.io",
  },
  "0xaa36a7": {
    name: "Sepolia Testnet",
    id: 11155111,
    chainId: "0xaa36a7",
    shortName: "eth",
    chain: "ETH",
    rpcUrl: "https://rpc2.sepolia.org",
  },
  // Binance Mainnet
  "0x38": {
    name: "Binance Smart Chain",
    id: 56,
    chainId: "0x38",
    shortName: "bsc",
    chain: "BSC",
    rpcUrl: "https://bsc-dataseed.binance.org",
  },
  // Binance Testnet
  "0x61": {
    name: "Binance Smart Chain Testnet",
    id: 97,
    chainId: "0x61",
    shortName: "bsc",
    chain: "BSC",
    rpcUrl: "https://data-seed-prebsc-1-s3.binance.org:8545/",
  },
  // Polygon Mainnet
  "0x89": {
    name: "Polygon",
    id: 137,
    chainId: "0x89",
    shortName: "matic",
    chain: "MATIC",
    rpcUrl: "https://rpc-mainnet.maticvigil.com",
  },
  // Polygon Testnet
  "0x13881": {
    name: "Polygon Mumbai",
    id: 80001,
    chainId: "0x13881",
    shortName: "matic",
    chain: "MATIC",
    rpcUrl: "https://polygon-testnet.public.blastapi.io",
  },
  // Avalanche Mainnet
  "0xa86a": {
    name: "Avalanche",
    id: 43114,
    chainId: "0xa86a",
    shortName: "avalanche",
    chain: "AVAX",
    rpcUrl: "https://avalanche.public-rpc.com",
  },
  // Avalanche Testnet
  "0xa869": {
    name: "Avalanche Fuji Testnet",
    id: 43113,
    chainId: "0xa869",
    shortName: "avalanche",
    chain: "AVAX",
    rpcUrl: "https://avalanche-fuji-c-chain.publicnode.com",
  },
	// Arbitrum One Mainnet
	"0xa4b1": {
    name: "Arbitrum One Mainnet",
    id: 43113,
    chainId: "0xa869",
    shortName: "arbitrum",
    chain: "AVAX",
    rpcUrl: "https://avalanche-fuji-c-chain.publicnode.com",
  },
	// Arbitrum Goerli Testnet
	"0x66eed": {
    name: "Arbitrum Goerli Testnet",
    id: 421613,
    chainId: "0xa869",
    shortName: "arbitrum",
    chain: "AGOR",
    rpcUrl: "https://endpoints.omniatech.io/v1/arbitrum/goerli/public",
  },
	// Optimism Mainnet
	"0xa": {
    name: "Optimism Mainnet",
    id: 10,
    chainId: "0xa",
    shortName: "optimism",
    chain: "ETH",
    rpcUrl: "https://mainnet.optimism.io",
  },
	// Optimism Testnet
	"0x1a4": {
    name: "Optimism Goerli Testnet",
    id: 420,
    chainId: "0x1a4",
    shortName: "optimism",
    chain: "ETH",
    rpcUrl: "https://goerli.optimism.io",
  },
	// Celo Mainnet
	"0xa4ec": {
    name: "Celo Mainnet",
    id: 42220,
    chainId: "0xa4ec",
    shortName: "celo",
    chain: "CELO",
    rpcUrl: "https://forno.celo.org",
  },
	// Celo Alfajores Testnet
	"0xaef3": {
    name: "Celo Alfajores Testnet",
    id: 44787,
    chainId: "0xaef3",
    shortName: "celo",
    chain: "CELO",
    rpcUrl: "https://alfajores-forno.celo-testnet.org",
  },
	// Songbird Canary-Network
	"0x13": {
    name: "Celo Alfajores Testnet",
    id: 19,
    chainId: "0x13",
    shortName: "songbird",
    chain: "SGB",
    rpcUrl: "https://songbird-api.flare.network/ext/C/rpc",
  },
	// Dogechain Mainnet
	"0x7d0": {
    name: "Dogechain Mainnet",
    id: 2000,
    chainId: "0x7d0",
    shortName: "dogechain",
    chain: "DOGE",
    rpcUrl: "https://rpc.ankr.com/dogechain",
  },
	// Dogechain Testnet
	"0x238": {
    name: "Dogechain Testnet",
    id: 568,
    chainId: "0x238",
    shortName: "dogechain",
    chain: "DOGE",
    rpcUrl: "https://rpc-testnet.dogechain.dog",
  },
	// ShibaChain Mainnet
	"0x1b": {
    name: "ShibaChain Mainnet",
    id: 27,
    chainId: "0x1b",
    shortName: "shiba",
    chain: "SHIB",
    rpcUrl: "https://rpc.shibchain.org",
  },
	// Cronos Mainnet
	"0x19": {
    name: "Cronos Mainnet",
    id: 25,
    chainId: "0x19",
    shortName: "cronos",
    chain: "CRO",
    rpcUrl: "https://node.croswap.com/rpc",
  },
	// Cronos Testnet
	"0x152": {
    name: "Cronos Testnet",
    id: 338,
    chainId: "0x152",
    shortName: "cronos",
    chain: "TCRO",
    rpcUrl: "https://evm-t3.cronos.org",
  },
	// Fantom Opera Mainnet
	"0xfa": {
    name: "Fantom Opera Mainnet",
    id: 250,
    chainId: "0xfa",
    shortName: "fantom",
    chain: "FTM",
    rpcUrl: "https://rpcapi.fantom.network",
  },
	// Fantom Opera Testnet
	"0xfa2": {
    name: "Fantom Opera Testnet",
    id: 4002,
    chainId: "0xfa2",
    shortName: "fantom",
    chain: "FTM",
    rpcUrl: "https://fantom-testnet.publicnode.com",
  },
	// Kava Mainnet
	"0x8ae": {
    name: "Kava Mainnet",
    id: 2222,
    chainId: "0x8ae",
    shortName: "kava",
    chain: "KAVA",
    rpcUrl: "https://evm.kava.io",
  },
	// Kava Testnet
	"0x8ad": {
    name: "Kava Testnet",
    id: 2221,
    chainId: "0x8ad",
    shortName: "kava",
    chain: "KAVA",
    rpcUrl: "https://evm.testnet.kava.io",
  },
	// Gnosis Mainnet
	"0x64": {
    name: "Gnosis Mainnet",
    id: 100,
    chainId: "0x64",
    shortName: "gnosis",
    chain: "xDai",
    rpcUrl: "https://rpc.gnosischain.com",
  },
	// Aurora Mainnet
	"0x4e454152": {
    name: "Aurora Mainnet",
    id: 1313161554,
    chainId: "0x4e454152",
    shortName: "aurora",
    chain: "ETH",
    rpcUrl: "https://mainnet.aurora.dev",
  },
	// Aurora Testnet
	"0x4e454153": {
    name: "Aurora Testnet",
    id: 1313161555,
    chainId: "0x4e454153",
    shortName: "aurora",
    chain: "ETH",
    rpcUrl: "https://endpoints.omniatech.io/v1/aurora/testnet/public",
  },
	// Fusion Mainnet
	"0x7f93": {
    name: "Fusion Mainnet",
    id: 32659,
    chainId: "0x7f93",
    shortName: "fusion",
    chain: "FSN",
    rpcUrl: "https://mainnet.fusionnetwork.io",
  },
	// Fusion Testnet
	"0xb660": {
    name: "Fusion Testnet",
    id: 46688,
    chainId: "0xb660",
    shortName: "fusion",
    chain: "T-FSN",
    rpcUrl: "https://testnet.fusionnetwork.io",
  },
	// Moonriver Mainnet
	"0x505": {
    name: "Moonriver Mainnet",
    id: 1285,
    chainId: "0x505",
    shortName: "moonriver",
    chain: "MOVR",
    rpcUrl: "https://rpc.api.moonriver.moonbeam.network",
  },
	// Moonbeam Mainnet
	"0x504": {
    name: "Moonbeam Mainnet",
    id: 1284,
    chainId: "0x504",
    shortName: "moonbeam",
    chain: "GLMR",
    rpcUrl: "https://rpc.api.moonbeam.network",
  },
	// RSK Mainnet
	"0x1e": {
    name: "RSK Mainnet",
    id: 30,
    chainId: "0x1e",
    shortName: "rsk",
    chain: "RBTC",
    rpcUrl: "https://public-node.rsk.co",
  },
	// RSK Testnet
	"0x1f": {
    name: "RSK Testnet",
    id: 31,
    chainId: "0x1f",
    shortName: "rsk",
    chain: "tRBTC",
    rpcUrl: "https://public-node.testnet.rsk.co",
  },
	// Atstar Mainnet
	"0x250": {
    name: "Astar Mainnet",
    id: 592,
    chainId: "0x250",
    shortName: "astar",
    chain: "ASTR",
    rpcUrl: "https://evm.astar.network",
  },
	// Metis Andromeda Mainnet
	"0x440": {
    name: "Metis Andromeda Mainnet",
    id: 1088,
    chainId: "0x440",
    shortName: "metis",
    chain: "METIS",
    rpcUrl: "https://andromeda.metis.io/?owner=1088",
  },
	// Metis Andromeda Testnet
	"0x257": {
    name: "Metis Goerli Testnet",
    id: 599,
    chainId: "0x257",
    shortName: "metis",
    chain: "METIS",
    rpcUrl: "https://goerli.gateway.metisdevops.link",
  },
	// Hoo Smart Chain Mainnet
	"0x46": {
    name: "Hoo Smart Chain Mainnet",
    id: 70,
    chainId: "0x46",
    shortName: "hoo",
    chain: "HOO",
    rpcUrl: "https://http-mainnet.hoosmartchain.com",
  },
	// Theta Mainnet
	"0x169": {
    name: "Theta Mainnet",
    id: 361,
    chainId: "0x169",
    shortName: "theta",
    chain: "TFUEL",
    rpcUrl: "https://eth-rpc-api.thetatoken.org/rpc",
  },
	// Theta Testnet
	"0x16d": {
    name: "Theta Testnet",
    id: 365,
    chainId: "0x16d",
    shortName: "theta",
    chain: "TFUEL",
    rpcUrl: "https://eth-rpc-api-testnet.thetatoken.org/rpc",
  },
	// Telos Mainnet
	"0x28": {
    name: "Telos Mainnet",
    id: 40,
    chainId: "0x28",
    shortName: "telos",
    chain: "TLOS",
    rpcUrl: "https://mainnet.telos.net/evm",
  },
	// Telos Testnet
	"0x29": {
    name: "Telos Testnet",
    id: 41,
    chainId: "0x29",
    shortName: "telos",
    chain: "TLOS",
    rpcUrl: "https://testnet.telos.net/evm",
  },
	// Harmony Mainnet
	"0x63564c40": {
    name: "Harmony Mainnet",
    id: 1666600000,
    chainId: "0x63564c40",
    shortName: "harmony",
    chain: "ONE",
    rpcUrl: "https://api.harmony.one",
  },
	// Harmony Testnet
	"0x6357d2e0": {
    name: "Harmony Testnet",
    id: 1666700000,
    chainId: "0x6357d2e0",
    shortName: "harmony",
    chain: "ONE",
    rpcUrl: "https://api.s0.b.hmny.io",
  },
	// Fuse Mainnet
	"0x7a": {
    name: "Fuse Mainnet",
    id: 122,
    chainId: "0x7a",
    shortName: "fuse",
    chain: "FUSE",
    rpcUrl: "https://rpc.fuse.io",
  },
	// Meter Mainnet
	"0x52": {
    name: "Meter Mainnet",
    id: 82,
    chainId: "0x52",
    shortName: "meter",
    chain: "MTR",
    rpcUrl: "https://rpc.meter.io",
  },
	// Meter Testnet
	"0x53": {
    name: "Meter Testnet",
    id: 83,
    chainId: "0x53",
    shortName: "meter",
    chain: "MTR",
    rpcUrl: "https://rpctest.meter.io",
  },
	// Syscoin Mainnet
	"0x39": {
    name: "Syscoin Mainnet",
    id: 57,
    chainId: "0x39",
    shortName: "syscoin",
    chain: "SYS",
    rpcUrl: "https://rpc.syscoin.org",
  },
	// Elastos Smart Chain Mainnet
	"0x14": {
    name: "Elastos Smart Chain Mainnet",
    id: 20,
    chainId: "0x14",
    shortName: "Elastos",
    chain: "ELA",
    rpcUrl: "https://api.elastos.io/eth",
  },
	// Elastos Smart Chain Testnet
	"0x15": {
    name: "Elastos Smart Chain Testnet",
    id: 21,
    chainId: "0x15",
    shortName: "Elastos",
    chain: "tELA",
    rpcUrl: "https://api-testnet.elastos.io/eth",
  },
};

export function getRpcByChainId(chainId: string): string | null {
  const rpc = Object.values(networks).find(
    (network) => network.chainId === chainId
  )?.rpcUrl;
  if (!rpc) {
    return null;
  }
  return rpc;
}

export function getNetworkByChainId(chainId: string): {
  name: string;
  id: number;
  chainId: string;
  shortName: string;
  chain: string;
  rpcUrl: string;
} | null {
  const network = Object.values(networks).find(
    (network) => network.chainId === chainId
  );
  if (!network) {
    return null;
  }
  return network;
}

export function getNetworkByName(query: string): {
  name: string;
  id: number;
  chainId: string;
  shortName: string;
  chain: string;
  rpcUrl: string;
}[] {
  const filteredNetworks = Object.values(networks).filter((network) =>
    network.name.toLowerCase().includes(query.toLowerCase())
  );

  const sortedNetworks = filteredNetworks.sort((a, b) => {
    const aIndex = a.name.toLowerCase().indexOf(query.toLowerCase());
    const bIndex = b.name.toLowerCase().indexOf(query.toLowerCase());
    return aIndex - bIndex;
  });

  return sortedNetworks;
}
