import {describe, it, expect} from "vitest"
import { multiplesOf3Or5 } from "."

describe("sum of all multiples of 3 or 5", () => {
    it ("this function returns sum of multiples of 3 or 5", () => {
        expect(multiplesOf3Or5(0)).toBe(0)
        expect(multiplesOf3Or5(-15)).toBe(0)
        expect(multiplesOf3Or5(10)).toBe(23)
        expect(multiplesOf3Or5(20)).toBe(78)
        expect(multiplesOf3Or5(200)).toBe(9168)
    })
})