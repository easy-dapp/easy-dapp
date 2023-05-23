export const networks = {
    // Ethereum Mainnet
    "0x1": {
        name: "Ethereum Mainnet",
        chainId: 1,
        shortName: "eth",
        chain: "ETH",
        rpcUrl: "https://eth.llamarpc.com"
    },
    // Ethereum Testnet
    "0x5": {
        name: "Goerli Testnet",
        chainId: 5,
        shortName: "eth",
        chain: "ETH",
        rpcUrl: "https://eth-goerli.public.blastapi.io"
    },
    "0xaa36a7": {
        name: "Sepolia Testnet",
        chainId: 11155111,
        shortName: "eth",
        chain: "ETH",
        rpcUrl: "https://rpc2.sepolia.org"
    },
    // Binance Mainnet
    "0x38": {
        name: "Binance Smart Chain",
        chainId: 56,
        shortName: "bsc",
        chain: "BSC",
        rpcUrl: "https://bsc-dataseed.binance.org"
    },
    // Binance Testnet
    "0x61": {
        name: "Binance Smart Chain Testnet",
        chainId: 97,
        shortName: "bsc",
        chain: "BSC",
        rpcUrl: "https://data-seed-prebsc-1-s3.binance.org:8545/"
    },
    // Polygon Mainnet
    "0x89": {
        name: "Polygon",
        chainId: 137,
        shortName: "matic",
        chain: "MATIC",
        rpcUrl: "https://rpc-mainnet.maticvigil.com"
    },
    // Polygon Testnet
    "0x13881": {
        name: "Polygon Mumbai",
        chainId: 80001,
        shortName: "matic",
        chain: "MATIC",
        rpcUrl: "https://polygon-testnet.public.blastapi.io"
    },
    // Avalanche Mainnet
    "0xa4b1": {
        name: "Avalanche",
        chainId: 43114,
        shortName: "avalanche",
        chain: "AVAX",
        rpcUrl: "https://api.avax.network/ext/bc/C/rpc"
    },
    // Avalanche Testnet
    "0xa869": {
        name: "Avalanche Fuji Testnet",
        chainId: 43113,
        shortName: "avalanche",
        chain: "AVAX",
        rpcUrl: "https://avalanche-fuji-c-chain.publicnode.com"
    },
}

export function getRpcByChainId(chainId: string): string | null {
    const rpc = Object.values(networks).find((network) => network.chainId === Number(chainId))?.rpcUrl
    if (!rpc) {
        return null
    }
    return rpc
}

export function getNetworkByChainId(chainId: string) : {
    name: string;
    chainId: number;
    shortName: string;
    chain: string;
    rpcUrl: string;
} | null {
    const network = Object.values(networks).find((network) => network.chainId === Number(chainId))
    if (!network) {
        return null
    }
    return network
}

export function getNetworkByName(query: string) {
    const filteredNetworks = Object.values(networks).filter(network =>
      network.name.toLowerCase().includes(query.toLowerCase())
    );
  
    const sortedNetworks = filteredNetworks.sort((a, b) => {
      const aIndex = a.name.toLowerCase().indexOf(query.toLowerCase());
      const bIndex = b.name.toLowerCase().indexOf(query.toLowerCase());
      return aIndex - bIndex;
    });
  
    return sortedNetworks;
  }