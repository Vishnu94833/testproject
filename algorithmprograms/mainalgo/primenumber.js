var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')
/**
 * @description program to find prime numbers between given range
 */

function primenumber()
{
         num1=prompt("Enter the lower limit :"); 
         num2=prompt("Enter the upper limit :"); 
        utility.primenumber(num1,num2);
}
primenumber();      