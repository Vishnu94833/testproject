var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function binarysearch()
{
    var size=prompt('enter size of an array  ');
    startTime=utility.getCurrentTime();
    utility.binarysearch(size);
    var stopTime=utility.getCurrentTime();
    var res=utility.getElapsedTime(startTime,stopTime);
    console.log('the elapsed time is '+res+'seconds')
    
}
binarysearch();
