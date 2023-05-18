import {describe, expect, test} from '@jest/globals';

import {useMetaMaskConnect, MetaMaskProvider} from "../lib/MetaMaskProvider"

describe("useMetaMaskConnect", () => {
    it("should be defined", () => {
        expect(useMetaMaskConnect).toBeDefined()
    })
    }
)

describe("MetaMaskProvider", () => {
    it("should be defined", () => {
        expect(MetaMaskProvider).toBeDefined()
    })
    }
)