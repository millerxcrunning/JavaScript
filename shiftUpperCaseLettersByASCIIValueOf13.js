function rot13(str) {

    let array = str.split('');
    console.log(array);
    for(let i = 0; i < array.length; i+=1)
    {
        //console.log(array[i].charCodeAt(0));
        console.log("\nthe current letter in the array is " + array[i]);
        if((array[i].charCodeAt(0)) > 64 && (array[i].charCodeAt(0) < 78))
        {
            console.log("it's ascii representation is " + array[i].charCodeAt(0));
            console.log("and it should be greater than 64 and less than 78");
            array[i] = String.fromCharCode(array[i].charCodeAt(0) + 13);
            console.log("changed to " + array[i]);
        }

        else if((array[i].charCodeAt(0)) > 77 && (array[i].charCodeAt(0) < 91))
        {
            console.log("it's ascii representation is " + array[i].charCodeAt(0));
            console.log("and it should be greater than 77 and less than 91");
            array[i] = String.fromCharCode(array[i].charCodeAt(0) - 13);
            console.log("changed to " + array[i]);
        }
    }

    console.log(array.join(''));
    let string = array.join('');
    return string;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
