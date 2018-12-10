function steamrollArray(arr) {
    let newArr = [];
    function flatten(arr) {
        arr.forEach(item => {
            console.log(item);
            if (!Array.isArray(item))
                newArr.push(item);

            else (flatten(item));
        });
    }
    flatten(arr);
    return newArr;
}

steamrollArray([[1,2,3], [2], [3, [[4]]]]);
