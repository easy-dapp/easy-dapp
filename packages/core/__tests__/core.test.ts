import {gweiToEther, gweiToWei, networks, weiToEther} from "../lib";

describe("networks", () => {
    it("should be defined", () => {
        expect(networks).toBeDefined()
        expect(networks["0x1"]).toBeDefined()
    })
}
)

describe("calc", () => {
    it("weiToEther", () => {
        expect(weiToEther(1000000000000000000)).toEqual(1)
    })

    it("gweiToEther", () => {
        expect(gweiToEther(1000000000)).toEqual(1)
    })

    it("weiToGwei", () => {
        expect(gweiToEther(1000000000)).toEqual(1)
    })
    
    it("gweiToWei", () => {
        expect(gweiToWei(0.000000001)).toEqual(1)
    })
})