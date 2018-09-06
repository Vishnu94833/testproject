var prompt = require('prompt-sync')()
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')
/**
 * @description program to play with user by finding number
 */
 function questionNumber()
 {     var number = prompt('Enter the number : ')
     utility.questionNumber(number)
 }
 questionNumber()

