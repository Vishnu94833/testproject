var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

/**
 * @description program to sort an array of elements using merge sort
 */
function mergesort()
{
    var size=prompt('enter size of an array  ');
    utility.mergesort(size);
    
}
mergesort();
