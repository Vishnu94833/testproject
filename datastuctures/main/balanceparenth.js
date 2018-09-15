"use strict"

/**
 * @description  Take   an   Arithmetic   Expression   such   as 
(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)   where   parentheses   are   used   to   order   the 
performance   of   operations.   Ensure   parentheses   must   appear   in   a   balanced 
fashion
 */
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