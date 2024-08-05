module.exports = function toReadable(number) {
    number = String(number);
    const oneDigit = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    const twoDigit = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    switch (number.length) {
        case 1:
            return oneDigit[number];
        case 2:
            if ((number < 20 || number[1] == 0) && number[0] != 0) {
                return twoDigit[number];
            } else if (number[0] == 0) {
                return oneDigit[number[1]];
            } else {
                let tens = number[0] + `0`;
                let ones = number[1];
                return twoDigit[tens] + ` ` + oneDigit[ones];
            }
        case 3:
            let hundreds = oneDigit[number[0]] + ` hundred`;
            let tens = number[1] + number[2];
            if (tens[0] == 0 && tens[1] == 0) {
                return hundreds;
            } else {
                return hundreds + " " + toReadable(tens);
            }
    }
};
