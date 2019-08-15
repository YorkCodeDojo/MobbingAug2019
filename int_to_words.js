

console.log("Hello world");

numbers = {
    1 : "One",
    2 : "Two",
    3 : "Three",
    4 : "Four",
    5 : "Five",
    6 : "Six",
    7 : "Seven",
    8 : "Eight",
    9 : "Nine",
    10 : "Ten",
    11 : "Eleven",
    12 : "Twelve",
    13 : "Thirteen",
    14 : "Fourteen",
    15 : "Fifteen",
    16 : "Sixteen",
    17 : "Seventeen",
    18 : "Eighteen",
    19 : "Nineteen",
    20 : "Twenty",
    30 : "Thirty",
    40 : "Forty",
    50 : "Fifty",
    60 : "Sixty",
    70 : "Seventy",
    80 : "Eighty",
    90 : "Ninety"
};


function Not_Units (num, word, number) {
    const remainder = num % number;
    const millions = (num - remainder) / number;

    if (remainder === 0) {
        return Num_To_Words(millions) + " " + word;
    } else if (remainder > 99) {
        return Num_To_Words(millions) + " " + word + " " + Num_To_Words(remainder);
    } else {
        return Num_To_Words(millions) + " " + word + " and " + Num_To_Words(remainder);
    }
}

function Num_To_Words (num) {   
    if (num in numbers) {
        return numbers[num];
    }

    if (num > 999999) {
        return Not_Units(num, "Million", 1000000);
    }

    if (num > 999) {
        return Not_Units(num, "Thousand", 1000);
    }

    if (num > 99) {
        const remainder = num % 100;
        const hundreds = (num - remainder) / 100;

        if (remainder === 0) {
            return numbers[hundreds] + " Hundred";
        } else {
            return numbers[hundreds] + " Hundred and " + Num_To_Words(remainder);
        }
    }

    const units = num % 10;
    const tens = num - units;
    return numbers[tens] + " " + Num_To_Words(units);
}

function assert(num, expected_result) {
    const actual_result = Num_To_Words(num);
    if (expected_result !== actual_result) {
        console.log(`${num} returned ${actual_result} instead of ${expected_result}`);
    }
}

module.exports = (num) => { 
    return Num_To_Words(num);
}


// assert(1, "One");
// assert(2, "Two");
// assert(3, "Three");
// assert(20, "Twenty");
// assert(21, "Twenty One");
// assert(30, "Thirty");
// assert(100, "One Hundred");
// assert(101, "One Hundred and One");
// assert(200, "Two Hundred");
// assert(999, "Nine Hundred and Ninety Nine");
// assert(1000, "One Thousand");
// assert(1001, "One Thousand and One");
// assert(10456, "Ten Thousand Four Hundred and Fifty Six");
// assert(100000, "One Hundred Thousand");
// assert(100849, "One Hundred Thousand Eight Hundred and Forty Nine");
// assert(987654, "Nine Hundred and Eighty Seven Thousand Six Hundred and Fifty Four");
// assert(1000000, "One Million");
// assert(1000001, "One Million and One");
// assert(1760001, "One Million Seven Hundred and Sixty Thousand and One");



