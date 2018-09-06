var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')
/**
 * @description program to convert celsius to farenheit and vice versa
 */
function temperatureconversion()
{
    var value=prompt("enter the value... ")
    utility.temperatureconversion(value);
    
}
temperatureconversion();
