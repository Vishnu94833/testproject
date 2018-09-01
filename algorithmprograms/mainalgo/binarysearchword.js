var fs=require('fs')
var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')
var data=fs.readFileSync('words.txt')
data=data.toString().split(",");
function binarysearchword()
{
    var string=prompt('enter string/word to be searched...  ');
    utility.binarysearchword(data,string);
    
}
binarysearchword();
