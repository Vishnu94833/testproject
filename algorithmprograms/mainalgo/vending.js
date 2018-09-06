var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')
/**
 * @description program to find number notes produced by vending machine in multiples of 1000,500,100,50,20,10,5,2,1
 */
function vending()
{
    var prompt=require('prompt-sync')();
    var amount=prompt("enter the amount  ")
    utility.vending(parseInt(amount));
}
vending();