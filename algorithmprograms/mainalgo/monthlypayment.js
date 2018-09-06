var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')


/**
 * @description program to calculate monthly payment
 */
function monthlypayment()
{
    var principal=prompt("enter the principal amount... ")
    var years=prompt("enter years... ")
    var rate=prompt("enter the rate percent... ")
    utility.monthlypayment(principal,years,rate);
    
}
monthlypayment();
