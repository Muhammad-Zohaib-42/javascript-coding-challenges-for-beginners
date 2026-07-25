/*

1. Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0. 

*/

export function multiplesOf3Or5(number) {
    const multiplesOf3And5 = []

    if (number <= 2) {
        return 0
    }

    for (let i = 3; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) multiplesOf3And5.push(i)
    }

    return multiplesOf3And5.reduce((acc, curr) => acc + curr, 0)
}


/* 

3. Clock

The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) after midnight. Your task is to write a function which returns the time since midnight in milliseconds. There are 1,000 milliseconds in a second.

*/

export function past(h, m, s) {
    let milliseconds = 0

    if (h > 0) milliseconds = h * 60

    if (m > 0) {
        milliseconds = milliseconds > 0 ? (milliseconds + m) * 60 : m * 60
    } else {
        milliseconds = milliseconds > 0 ? milliseconds * 60 : 0
    }

    if (s > 0) {
        milliseconds = milliseconds > 0 ? (milliseconds + s) * 1000 : s * 1000
    } else {
        milliseconds = milliseconds > 0 ? milliseconds * 1000 : 0
    }

    return milliseconds
}

/*

5. Century From Year

The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in.

*/

export function whichCentury(year) {
    return Math.ceil(year / 100)
}

/*

8. Vowel Count

Return the number (count) of vowels (a, e, i, o, u) in the given string. The input string will only consist of lower case letters and/or spaces.

*/

export function vowelCount(text) {
    let vowels = 0

    for (let i = 0; i < text.length; i++) {
        if ("aeiou".includes(text[i].toLowerCase())) vowels++
    }

    return vowels
}

/*

9. Disemvowel Trolls

Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed.

*/

export function removeVowels(text) {
    let newText = ""

    for (let i = 0; i < text.length; i++) {
        if (!"aeiou".includes(text[i].toLowerCase())) {
            newText += text[i]
        }
    }

    return newText
}

/*

11. Get the Middle Character

Given a word, your job is to return the middle character(s) of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

*/

export function getMiddleCharacter(word) {
    const isEven = word.length % 2 == 0
    const wordHalf = Math.floor(word.length / 2)

    if (word.length <= 2) return word

    if (isEven) {
        return word.slice(wordHalf - 1, (wordHalf - 1) + 2)
    } else {
        return word.slice(wordHalf, wordHalf + 1)
    }
}

/*

16. Highest and Lowest

Given a string of space-separated numbers, write a function that returns the highest and lowest numbers. There will always be at least one number in the input string.

*/

export function getHighestAndLowestNum(string) {
    let highestNum = Number(string[0])
    let lowestNum = Number(string[0])

    console.log("starting highest Num", highestNum)
    console.log("starting lowest Num", lowestNum)

    const nums = string.split(" ")

    console.log("nums array", nums)

    for (let i = 1; i < nums.length; i++) {
        if (Number(nums[i]) > highestNum) highestNum = Number(nums[i])

        if (Number(nums[i]) < lowestNum) lowestNum = Number(nums[i])
    }

    console.log("final highest num", highestNum)
    console.log("final lowest num", lowestNum)

    return `${highestNum} ${lowestNum}`
}

/*

17. Descending Order

Write a function that takes any non-negative integer as an argument and returns it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

*/

export function descendingOrder(number) {
    return Number(`${number}`.split("").sort((a,b) => Number(b) - Number(a)).join(""))
}

/*

20. Shortest Word

Given a non-empty string of words, return the length of the shortest word(s).

*/

export function getShortestWordLength(string) {
    const wordsArray = string.split(" ")
    const wordLengthsArray = wordsArray.map(word => word.length)
    console.log(wordsArray)
    console.log(wordLengthsArray)
    console.log(Math.min(...wordLengthsArray))
}

/*

21. Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to 1 in the binary representation of that number. You can guarantee that input is non-negative. For example the binary representation of 1234 is 10011010010, so the function should return 5 in this case.

*/

function bigCounting(number) {
    let binary = ''
    let bitCount = 0

    while (number > 1) {
        binary += number == 2 ? 1 : number % 2
        number = (number / 2).toFixed(2)

        console.log(number)
    }
    
    for (let i = 0; i < binary.length; i++) {
        if (Number(binary[i]) == 1) bitCount++
    }

    console.log(binary, bitCount)
}

bigCounting(9)