var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/utility/utility.js');

function sumofthree()
{
    var row=prompt('enter no of rows ');
    utility.sumofthree(row);
    
}
sumofthree();