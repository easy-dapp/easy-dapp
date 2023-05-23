import Web3 from "web3"
import { getRpcByChainId } from "../helpers/networks"

type ChainId = "0x1" | "0x38" | "0x89" | "0xa4b1"

export function getBalance(wallet: string, chainId: string | ChainId) {
    const rpc = getRpcByChainId(chainId)
    if (rpc && rpc.length > 2) {
        const web3 = new Web3(rpc)
        return web3.eth.getBalance(wallet)
    } else {
        return Promise.reject("Invalid chainId")
    }
}