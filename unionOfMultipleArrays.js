function uniteUnique(arr, ...arg)
{
    let newArr = [];
    for (let i of arg)
    {
        arr.push(...i);
    }
    for (let i = 0; i < arr.length; i++)
    {
        console.log("is " + arr[i] + " present in the newArr already? " + (newArr.indexOf(arr[i])));
        console.log("does newArr.indexOf(" + arr[i] + ") == -1? " + ((newArr.indexOf(arr[i])) == -1));
        if ((newArr.indexOf(arr[i])) == -1)
        {
            console.log("pushing " + arr[i] + " onto newArr which already contains " + newArr);
            newArr.push(arr[i]);
            console.log("\n");
        }
    }

    return newArr;
}

function uniteUnique2(arr, ...arg)
{
    let newArr = [];
    for (let i in arg)
    {
        arr.push(...arg[i]);
    }
    for (let i = 0; i < arr.length; i++)
    {
        console.log("is " + arr[i] + " present in the newArr already? " + (newArr.indexOf(arr[i])));
        //console.log("the opposite of this test should flip the answer. Does it? " + !(newArr.indexOf(arr[i])));
        console.log("does newArr.indexOf(" + arr[i] + ")==-1? " + ((newArr.indexOf(arr[i]))== -1));
        if ((newArr.indexOf(arr[i]))== -1)
        {
            console.log("pushing " + arr[i] + " onto newArr which already contains " + newArr);
            newArr.push(arr[i]);
            console.log("\n");
        }
    }

    return newArr;
}

function uniteUnique3(arr, ...arg)
{
    for (let i in arg)
    {
        arr.push(...arg[i]);
    }
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = i+1; j < arr.length; j++)
        {
            if (arr[j] == arr[i])
            {
                arr.splice(j,1);
            }
        }
    }

    return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
