function convertToRoman(num) {

    let numerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let romanNumeral = "";

    for(let numeral in numerals)
    {
        console.log("\nthe number is " + num);
        console.log("numeral is " + numeral + ", which represents " + numerals[numeral]);
        console.log("comparing " + num + " to " + numerals[numeral]);
        while(num >= numerals[numeral])
        {
            console.log("\n\tsince " + num + " is bigger than " + numerals[numeral]);
            console.log("\tadding " + numeral + " to " + romanNumeral);
            romanNumeral += numeral;
            console.log("\tand romanNumeral is now " + romanNumeral);
            console.log("\tsubtracting " + numerals[numeral] + " from " + num);
            num -= numerals[numeral];
            console.log("\tand the number is now " + num)
        }
        console.log("decrementing the roman numeral");

    }

    return romanNumeral;
}

convertToRoman(36);
