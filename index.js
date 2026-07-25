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