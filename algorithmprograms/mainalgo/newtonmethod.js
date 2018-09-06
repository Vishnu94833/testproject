
var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')


/**
 * @description program to find square root of a number using newtons method
 */
function newtonmethod()
{
    var num=prompt("enter the value... ")
    utility.newtonmethod(num);
    
}
newtonmethod();
