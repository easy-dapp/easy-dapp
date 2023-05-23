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
  "0xa4b1": {
    name: "Avalanche",
    id: 0x13881,
    chainId: "0xa4b1",
    shortName: "avalanche",
    chain: "AVAX",
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
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
