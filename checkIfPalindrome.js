function palindrome(str) {

    function removeAllNonAlphNumericToLowerCase(string){
        console.log("stripping all non alphanumeric from \"" + string + "\" returns \"" + string.replace(/[^A-Za-z0-9]/g, '') + "\"");
        return string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    }

    /*function pushToStackAndPopAllOffStack(string){
        let stack = [];
        for(let element of string)
        {
            stack.push(element);
        }
        let backToString =  [];
        for(let i = stack.length-1; i >= 0; i-=1)
        {
            backToString.push(stack[i]);
        }
        console.log("reversed string is " + backToString);
        console.log(backToString.join(''));
        return backToString;
    }*/

    function doTheyMatch(originalString, backwardString){
        if(originalString.length !== backwardString.length) return false;

        for(let i = 0; i < backwardString.length; i+=1)
        {
            if(originalString[i] !== backwardString[i]) return false;
        }
        return true;
    }

    let strippedString = removeAllNonAlphNumericToLowerCase(str);
    let backwardString = strippedString.split("").reverse().join("");
    console.log(backwardString);
    return doTheyMatch(strippedString, backwardString);


}

console.log(palindrome("_eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
