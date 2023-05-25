import Web3 from "web3"
import { getRpcByChainId } from "../helpers/networks"

type ChainId = '0x1'|    '0x5'|    '0xaa36a7'|   '0x38'|
      '0x61'|   '0x89'|   '0x13881'|    '0xa86a'|
      '0xa869'| '0xa4b1'| '0x66eed'|    '0xa'|
      '0x1a4'|  '0xa4ec'| '0xaef3'|     '0x13'|
      '0x7d0'|  '0x238'|  '0x1b'|       '0x19'|
      '0x152'|  '0xfa'|   '0xfa2'|      '0x8ae'|
      '0x8ad'|  '0x64'|   '0x4e454152'| '0x4e454153'|
      '0x7f93'| '0xb660'| '0x505'|      '0x504'|
      '0x1e'|   '0x1f'|   '0x250'|      '0x440'|
      '0x257'|  '0x46'|   '0x169'|      '0x16d'|
      '0x28'|   '0x29'|   '0x63564c40'| '0x6357d2e0'|
      '0x7a'|   '0x52'|   '0x53'|       '0x39'|
      '0x14'|   '0x15';

export async function getBalance(wallet: string, chainId: string | ChainId): Promise<number> {
    const rpc = getRpcByChainId(chainId)
    if (rpc && rpc.length > 2) {
        const web3 = new Web3(rpc)
        const balance = await web3.eth.getBalance(wallet)
        return Number(balance)
    } else {
        return Promise.reject("Invalid chainId")
    }
}