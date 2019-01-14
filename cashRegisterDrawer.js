let denom = [
  {name: 'ONE HUNDRED', value: 100.00},
  {name: 'TWENTY', value: 20.00},
  {name: 'TEN', value: 10.00},
  {name: 'FIVE', value: 5.00},
  {name: 'DOLLAR', value: 1.00,},
  {name: 'QUARTER', value: 0.25},
  {name: 'DIME', value: 0.10},
  {name: 'NICKEL', value: 0.05},
  {name: 'PENNY', value: 0.01}
]

function checkCashRegister(price, cash, cid) {
    let cidTotal = 0;
    console.log("adding up the cash register");
    cid.reverse();
    for(let item of cid)
    {
        console.log(item[1]);
        if(typeof item[1] === 'number')
        cidTotal += item[1];
    }
    //rounding the total of the cash in drawer because of adding numbers with
    //different decimal lengths
    cidTotal = Math.round(cidTotal * 100)/100;
    console.log("cidTotal is " + cidTotal);
    let neededChange = cash - price;
    console.log("the change that needs to be returned is : " + neededChange);
    //console.log(denom[0].name);
    //console.log(Object.keys(denom).length);
    for(let i = 0; i < Object.keys(denom).length; i+=1)
    {
        console.log(denom[i]["value"]);
    }
    if(neededChange < cidTotal)
    {
        let change = 0;
        while(neededChange > 0)
        {
            for(let i = 0; i < Object.keys(denom).length; i+=1)
            {
                if(cid[i][1] <= neededChange)

                change += cid[i][1];
            }
        }
    }
//if(change > cid.reduce((acc, current[1]) => acc + current) return "INSUFFICIENT FUNDS";
//else if(price == cash) return "

  //return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
