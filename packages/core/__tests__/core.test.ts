import {networks} from "../lib";
import {describe, expect, test} from '@jest/globals';
describe("core", () => {
    it("should be defined", () => {
        expect(networks).toBeDefined()
        expect(networks["0x1"]).toBeDefined()
    })
}
)