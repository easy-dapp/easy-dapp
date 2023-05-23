export function weiToEther(wei: number): number {
    return wei * 10 ** -18;
}

export function gweiToEther(gwei: number): number {
    return gwei * 10 ** -9;
}

export function weiToGwei(wei: number) {
    return wei * 10 ** -9;
}