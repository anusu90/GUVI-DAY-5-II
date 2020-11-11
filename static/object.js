const items = [    {        name: 'bike',        price: 100    },    
{        name: 'tv',        price: 200    },    
{        name: 'mobile',        price: 10    },    
{        name: 'dress',        price: 5    },    
{        name: 'pen',        price: 500    },    
{        name: 'paper',        price: 1000    },    
{        name: 'laptop',        price: 25    }]

let outPut1 = items.filter(v=>v.price<100);
console.log(outPut1)


let outPut3 = items.find(v=> v.price === 1000);
console.log(outPut3);

items.forEach(v => {
    console.log(v.name, '->', v.price + 10);

});

let outPut4 = items.some(v=>{
    return v.name === 'truck';
})
console.log(outPut4);


// (outPut3.length>0)? console.log(true):console.log(false)


outPut5 = items.reduce(((a,c)=>a+c.price),0);
console.log(outPut5);


let a = [99,89,39,43,51,66,70,18]

for ([k,v] of a.entries()){
    console.log(`the key is ${k} and value is ${v}`);
}


// for (var (k,v) in a.entries()){
//     console.log(k,v);
// }

