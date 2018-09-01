var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function anagram()
{
    var s1=prompt('enter string1...');
    var s2=prompt('enter string2...');
    utility.anagram(s1,s2);
    
}
anagram();
