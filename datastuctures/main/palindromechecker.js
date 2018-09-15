"use strict"
/**
 * @description A   palindrome   is   a   string   that   reads   the   same   forward   and   backward,   for 
example,   radar,   toot,   and   madam.   We   would   like   to   construct   an   algorithm   to 
input   a   string   of   characters   and   check   whether   it   is   a   palindrome
 */
var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/datastuctures/utility/utility.js')
function palindromechecker()
{
    var word = prompt('Enter the word to be checked: ');
    utility.palindromechecker(word=word.replace(/ /g,""));
}
palindromechecker();
