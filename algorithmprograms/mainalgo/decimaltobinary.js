
var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

/**
 * @description program to convert decimal to binary
 */
function decimaltobinary()
{
    var num=prompt("enter the value... ")
    utility.decimaltobinary(num);
    
}
decimaltobinary();
