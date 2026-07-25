import {describe, it, expect} from "vitest"
import { multiplesOf3Or5, past } from "."

/*

1. sum of multiples of 3 or 5

describe("multiplesOf3Or5", () => {
    it ("should return sum of multiples of 3 or 5", () => {
        expect(multiplesOf3Or5(0)).toBe(0)
        expect(multiplesOf3Or5(-15)).toBe(0)
        expect(multiplesOf3Or5(10)).toBe(23)
        expect(multiplesOf3Or5(20)).toBe(78)
        expect(multiplesOf3Or5(200)).toBe(9168)
    })
})

*/


/*

2. calculate the milliseconds

describe("past", () => {
    it("should returns the time since midnight in milliseconds", () => {
        expect(past(0, 0, 0)).toBe(0)
        expect(past(0, 1, 1)).toBe(61000)
        expect(past(1, 0, 0)).toBe(3600000)
        expect(past(1, 0, 1)).toBe(3601000)
        expect(past(1, 1, 1)).toBe(3661000)
    })
})

*/