function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for(let element in arr)
    {
        arr[element].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[element].avgAlt, 3) / GM));
        delete arr[element].avgAlt;
    }
    console.log(arr);
    return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

function orbitalPeriod2(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(element => {
        return {
            name: element.name,
            orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((element.avgAlt + 6367.4447), 3) / 398600.4418))
        }
    })
}

console.log(orbitalPeriod2([{name : "sputnik", avgAlt : 35873.5553}]));
