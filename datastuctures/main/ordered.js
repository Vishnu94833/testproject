"use strict"
var fs = require('fs')
var prompt = require('prompt-sync')()
var utility= require('/home/abc/VSC code/VishnuProjects/datastuctures/utility/utility.js')

var data = fs.readFileSync('integerdata.txt')
data =data.toString().split(' ')
function orderedlist()
{
    var word = prompt('Enter the word u want to search : ')  
    utility.orderedList(data, word)
}
orderedlist()