var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function mergesort()
{
    var size=prompt('enter size of an array  ');
    utility.mergesort(size);
    
}
mergesort();
