var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')
function primepalindrome()
{
var lower=prompt('enter lower number   ');
var upper=prompt('enter upper number   ');
// var x=prompt('enter a number to find anagram or not....:')
utility.primepalindrome(lower,upper);
}
primepalindrome();












// var reverseNum1= parseInt(num1.toString().split("").reverse().join(""));
// var reverseNum = parseInt(num2.toString().split("").reverse().join(""));
// console.log(reverseNum1)
// console.log(reverseNum)


