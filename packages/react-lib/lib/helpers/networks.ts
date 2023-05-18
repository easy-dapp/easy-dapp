export const networks = {
    "0x1": {
        name: "Ethereum Mainnet",
        chainId: 1,
        shortName: "eth",
        chain: "ETH",
        rpcUrl: "https://eth.llamarpc.com"
    },
    "0x38": {
        name: "Binance Smart Chain",
        chainId: 56,
        shortName: "bsc",
        chain: "BSC",
        rpcUrl: "https://bsc-dataseed.binance.org"
    },
    "0x89": {
        name: "Polygon",
        chainId: 137,
        shortName: "matic",
        chain: "MATIC",
        rpcUrl: "https://rpc-mainnet.maticvigil.com"
    },
    "0xa4b1": {
        name: "Avalanche",
        chainId: 43114,
        shortName: "avalanche",
        chain: "AVAX",
        rpcUrl: "https://api.avax.network/ext/bc/C/rpc"
    },
    "0x13881": {
        name: "Polygon Mumbai",
        chainId: 80001,
        shortName: "matic",
        chain: "MATIC",
        rpcUrl: "https://polygon-testnet.public.blastapi.io"
    },
}

export function getNetworkByChainId(chainId: string): string {
    const rpc = Object.values(networks).find((network) => network.chainId === Number(chainId))?.rpcUrl
    if (!rpc) {
        return ""
    }
    return rpc
}