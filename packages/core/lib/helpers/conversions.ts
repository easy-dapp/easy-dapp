export function weiToEther(wei: number): number {
    return wei * 10 ** -18;
}

export function gweiToEther(gwei: number): number {
    return gwei * 10 ** -9;
}

export function weiToGwei(wei: number): number {
    return wei * 10 ** -9;
}

export function gweiToWei(gwei: number): number {
    return gwei * 10 ** 9;
}

export function etherToWei(ether: number): number {
    return ether * 10 ** 18;
}

export function etherToGwei(ether: number): number {
    return ether * 10 ** 9;
}