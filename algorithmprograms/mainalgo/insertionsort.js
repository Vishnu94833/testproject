var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function insertionsort()
{
    var n=prompt('enter size of an array  ');
    utility.insertionsort(n);
    
}
insertionsort();
