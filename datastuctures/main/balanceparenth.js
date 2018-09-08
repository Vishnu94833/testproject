"use strict"
var fs = require('fs')
var prompt = require('prompt-sync')()
var utility= require('/home/abc/VSC code/VishnuProjects/datastuctures/utility/utility.js')

// var data = fs.readFileSync('integerdata.txt')
// data =data.toString().split(' ')
function balance()
{
    var expr = prompt('Enter  expression to check balanced/unbalanced  : ')  
    utility.balance(expr)
}
balance()