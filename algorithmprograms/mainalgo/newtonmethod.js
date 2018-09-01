
var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function newtonmethod()
{
    var num=prompt("enter the value... ")
    utility.newtonmethod(num);
    
}
newtonmethod();
