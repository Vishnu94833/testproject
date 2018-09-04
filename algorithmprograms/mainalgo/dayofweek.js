var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function dayofweek()
{
    var day=prompt("enter the day... ")
    day=parseInt(day);
    var month=prompt("enter the month... ")
    month=parseInt(month)
    var year=prompt("enter the year... ")
    year=parseInt(year)
    utility.dayofweek(day,month,year);
    
}
dayofweek();
