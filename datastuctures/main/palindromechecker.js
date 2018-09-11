"use strict"
var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/datastuctures/utility/utility.js')
function palindromechecker()
{
    var word = prompt('Enter the word to be checked: ');
    utility.palindromechecker(word=word.replace(/ /g,""));
}
palindromechecker();
