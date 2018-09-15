'use strict';

const fs = require('fs');
var prompt=require('prompt-sync')();
// var grocery=prompt("enter a number for respected grocery.... ")
let rawdata = fs.readFileSync('stock.json');  
let data = JSON.parse(rawdata); //to read data from json file
for(var i=0;i<data.stock.length;i++)//loop runs stock length time
{
console.log("stock name--->  "+data.stock[i].stockname+" stock shares---> "+data.stock[i].stockshare+"  stock price--->  "+data.stock[i].stockprice);
var totalvalueofeachstack=data.stock[i].stockshare*data.stock[i].stockprice;//formula to calculate total value of each stock
console.log(totalvalueofeachstack)

// var totalvalue=parseInt(totalvalue)+parseInt(totalvalueofeachstack);
// console.log(totalvalue)

}





