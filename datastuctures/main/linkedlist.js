var fs=require('fs')
var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/datastuctures/utility/utilitydata.js')
var data=fs.readFileSync('data.txt')
data=data.toString().split(",");
/**
 * @description program
 */
function linkedlist()
{
    var string=prompt('enter string/word to be searched...  ');
    utility.linked(data,string);
    
}
linkedlist();
