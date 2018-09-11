'use strict';

const fs = require('fs');
var prompt=require('prompt-sync')();
console.log('enter 0 for rice')
console.log('enter 1 for pulses')
console.log('enter 2 for wheat')
var grocery=prompt("enter a number for respected grocery.... ")
let rawdata = fs.readFileSync('data.json');  
let data = JSON.parse(rawdata); 
if(grocery==0)
{
for(var i=0;i<data.rice.length;i++)
{
console.log("1kg of "+ data.rice[i].ricename+" rice  is "+data.rice[i].price+"  and total price of rice for  "+data.rice[i].weight+" kgs is "+data.rice[i].weight * data.rice[i].price)
}
}
else if(grocery==1)
{
for(var i=0;i<data.pulses.length;i++)
{
console.log("1kg of "+ data.pulses[i].pulsesname+"  pulses is "+data.pulses[i].price+"  and total price of pulses for  "+data.pulses[i].weight+" kgs is "+data.pulses[i].weight * data.pulses[i].price)
}
}
else if(grocery==2)
{
for(var i=0;i<data.wheat.length;i++)
{
console.log("1kg of "+ data.wheat[i].wheatname+"  wheat is "+data.wheat[i].price+"  and  total price of wheat for  "+data.wheat[i].weight+" kgs is "+data.wheat[i].weight * data.wheat[i].price)
}
}
else
{
console.log("enter a proper grocery.....  ")
}
