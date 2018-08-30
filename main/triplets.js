var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/utility/utility.js');

function triplets()
{
    var row=prompt('enter no of elements ');
    utility.triplets(row);
    
}
triplets();