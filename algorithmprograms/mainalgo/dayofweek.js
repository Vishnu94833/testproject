var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function dayofweek()
{
    var day=prompt("enter the day... ")
    var month=prompt("enter the month... ")
    var year=prompt("enter the year... ")
    utility.dayofweek(day,month,year);
    
}
dayofweek();
