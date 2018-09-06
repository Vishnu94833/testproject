var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')
/**
 * @description program to find prime palindrome and anagram of number
 */
function primepalindrome()
{
var lower=prompt('enter lower number   ');
var upper=prompt('enter upper number   ');
utility.primepalindrome(lower,upper);
}
primepalindrome();














