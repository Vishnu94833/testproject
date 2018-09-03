var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function insertionsort()
{
    var n=prompt('enter size of an array  ');
    startTime=utility.getCurrentTime();
    utility.insertionsort(n);
    var stopTime=utility.getCurrentTime();
    var res=utility.getElapsedTime(startTime,stopTime);
    console.log('the elapsed time is '+res+'seconds')
    
}
insertionsort();
