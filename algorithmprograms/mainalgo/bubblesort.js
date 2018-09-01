var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function bubblesort()
{
    var num=prompt('enter size of an array  ');
    utility.bubblesort(num);
    
}
bubblesort();
