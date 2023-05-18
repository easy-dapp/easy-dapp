import {core} from "../lib/core";
import {describe, expect, test} from '@jest/globals';
describe("core", () => {
    it("should be defined", () => {
        const value = core()
        expect(value).toBeDefined()
        expect(value).toEqual("Hello from core")
    })
}
)