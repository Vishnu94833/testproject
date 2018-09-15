"use strict"

/**
 * @description  Read   a   List   of   Numbers   from   a   file   and   arrange   it   ascending   Order   in   a 
Linked   List.   Take   user   input   for   a   number,   if   found   then   pop   the   number   out   of   the 
list   else   insert   the   number   in   appropriate   position 
 */
var fs = require('fs')
var prompt = require('prompt-sync')()
var utility= require('/home/abc/VSC code/VishnuProjects/datastuctures/utility/utility.js')

var data = fs.readFileSync('integerdata.txt')
data =data.toString().split(' ')
function orderedlist()
{
    var word = prompt('Enter the number u want to search : ')  
    utility.orderedList(data, word)
}
orderedlist()