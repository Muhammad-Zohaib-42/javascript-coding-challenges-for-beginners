import {describe, it, expect} from "vitest"
import { descendingOrder, getHighestAndLowestNum, getMiddleCharacter, multiplesOf3Or5, past, removeVowels, vowelCount, whichCentury } from "."

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

/*

3. calculate the current century

describe("whichCentury", () => {
    it("should return current century", () => {
        expect(whichCentury(1705)).toBe(18)
        expect(whichCentury(1900)).toBe(19)
        expect(whichCentury(1601)).toBe(17)
        expect(whichCentury(2000)).toBe(20)
        expect(whichCentury(85)).toBe(1)
    })
})

*/

/*

4. calculate the vowels in text

describe("calculateVowelsCount", () => {
    it("should return the vowels count in given text", () => {
        expect(vowelCount("my pyx")).toBe(0)
        expect(vowelCount("pear tree")).toBe(4)
        expect(vowelCount("abracadabra")).toBe(5)
        expect(vowelCount("o a kak ushakov lil vo kashu kakao")).toBe(13)
    })
})

*/

/*

5. remove vowels from text

describe("removeVowels", () => {
    it("should remove vowels from text", () => {
        expect(removeVowels("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!")
    })
})

*/

/*

6. get middle character

describe("getMiddleCharacter", () => {
    it("should get the middle character of word", () => {
        expect(getMiddleCharacter("test")).toBe("es")
        expect(getMiddleCharacter("testing")).toBe("t")
        expect(getMiddleCharacter("middle")).toBe("dd")
        expect(getMiddleCharacter("A")).toBe("A")
    })
})

*/

/*

7. get highest and lowest done

describe("getHightestAndLowestNum", () => {
    it("should return object contains highest and lowest nums of given num string", () => {
        expect(getHighestAndLowestNum("1 2 3 4 5")).toBe("5 1")
        expect(getHighestAndLowestNum("1 2 -3 4 5")).toBe("5 -3")
        expect(getHighestAndLowestNum("1 9 3 4 -5")).toBe("9 -5")
        expect(getHighestAndLowestNum("0 -214 542")).toBe("542 -214")
    })
})

*/

/*

8. descending order

describe("descendingOrder", () => {
    it("should return descending order", () => {
        expect(descendingOrder(0)).toBe(0)
        expect(descendingOrder(1)).toBe(1)
        expect(descendingOrder(1021)).toBe(2110)
    })
})

*/