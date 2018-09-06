
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')
/**
 * @description program to swap nibble 
 */
function swapnibble()
{
    var prompt=require('prompt-sync')();
    var c = prompt("enter an integer.... ");
    utility.swapnibble(c);
    
}
swapnibble();
