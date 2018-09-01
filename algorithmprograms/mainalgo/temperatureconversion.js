var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function temperatureconversion()
{
    var value=prompt("enter the value... ")
    utility.temperatureconversion(value);
    
}
temperatureconversion();
