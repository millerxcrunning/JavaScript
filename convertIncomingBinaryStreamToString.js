function binaryToString(str) {
    let arr = str.split(' ');
    console.log("the binary numbers are " + arr);
    numberArray = [];
    let sentence = '';
    for(let i = 0; i < arr.length; i+=1)
    {
        console.log(parseInt(arr[i], 2) + " is the current binary number. Converted to a letter, " + parseInt(arr[i], 2) +
            " is " + String.fromCharCode(parseInt(arr[i], 2)));
        let number = parseInt(arr[i], 2);
        numberArray.push(number);
        console.log("adding " + String.fromCharCode(number) + " to " + sentence);
        sentence += String.fromCharCode(number);

    }
    console.log("\n" + sentence + "\n");
    return sentence;
}

binaryToString("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

function binaryToString2(str) {
    let arr = str.split(' ');
    console.log("the binary numbers are " + arr);
    numberArray = [];
    let sentence = '';
    for(let item of arr)
    {
        console.log(parseInt(item, 2) + " is the current binary number parsed to an integer. Converted to a letter, " + parseInt(item, 2) +
            " is \""+ String.fromCharCode(parseInt(item, 2)) + "\"");
        let number = parseInt(item, 2);
        numberArray.push(number);
        console.log("adding " + String.fromCharCode(number) + " to " + sentence);
        sentence += String.fromCharCode(number);

    }
    console.log("\n" + sentence);
    return sentence;
}

binaryToString2("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
