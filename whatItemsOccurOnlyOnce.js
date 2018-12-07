function diffArray2(arr1, arr2) {
    var newArr = [...arr1, ...arr2];
    newArr = newArr.sort();
    console.log(newArr);
    let length = newArr.length;
    let occurredOnce = [];
    for(let i=0; i<length; i+=1)
    {
        console.log("iteration: " + i);
        //console.log(!occurredOnce.some(x => x==1));
        console.log("newArr[" + i + "] is " + newArr[i]);
        console.log("occurredOnce does not contain " + newArr[i] + ": " + !occurredOnce.some(x => x==newArr[i]));
        //if occurredOnce does not contain newArr[i]
        if(!occurredOnce.some(x => x==newArr[i]))
        {
             let a = newArr[i];
             let b = newArr.lastIndexOf(newArr[i]);
             console.log("the  of " + newArr[i] + " is " + newArr.indexOf(a));
             console.log("the last index of " + newArr[i] + " is " + b);
             if(newArr.indexOf(a) === b)
             {
                 console.log("there is only one occurence of " + a + ": " + (newArr.indexOf(a) === b));
                 occurredOnce.push(a);
             }
             else console.log("there is more than one occurence of " + newArr[i]);
         }
         console.log("occurredOnce now contains " + occurredOnce);
    }
    return occurredOnce;
}

let onlyOnce = diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log("the following numbers only occurred once: " + onlyOnce + "\n");
let onlyOnce1 = diffArray2(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
console.log("the following numbers only occurred once: " + onlyOnce1 + "\n");
let onlyOnce2 = diffArray2(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
console.log("the following numbers only occurred once: " + onlyOnce2 + "\n");
let onlyOnce3 = diffArray2(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
console.log("the following numbers only occurred once: " + onlyOnce3 + "\n");
let onlyOnce4 = diffArray2([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
console.log("the following numbers only occurred once: " + onlyOnce4 + "\n");
let onlyOnce5 = diffArray2([], ["snuffleupagus", "cookie monster", "elmo"]);
console.log("the following numbers only occurred once: " + onlyOnce5 + "\n");
let onlyOnce6 = diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log("the following numbers only occurred once: " + onlyOnce6 + "\n");
let onlyOnce7 = diffArray2([1, "calf", 3, "piglet"], [7, "filly"]);
console.log("the following numbers only occurred once: " + onlyOnce7);

// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
// [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
// [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
// [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
// [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
