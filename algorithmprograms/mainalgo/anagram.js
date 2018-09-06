var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')
/**
 * @description program to find anagram of a given string
 */
function anagram()
{
    var s1=prompt('enter string1...');
    var s2=prompt('enter string2...');
    utility.anagram(s1,s2);
    
}
anagram();
