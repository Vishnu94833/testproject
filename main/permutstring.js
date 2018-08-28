var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/utility/utility.js');

function permutstring()
{
    var row=prompt('enter a string ');
    utility.permutstring(row);
    
}
permutstring();