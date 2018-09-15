"use strict"

/**
 * @description  Create   a   Program   which   creates   Banking   Cash   Counter   where   people 
come   in   to   deposit   Cash   and   withdraw   Cash.   Have   an   input   panel   to   add   people 
to   Queue   to   either   deposit   or   withdraw   money   and   dequeue   the   people.   Maintain 
the   Cash   Balance
 */
var fs = require('fs')
var prompt = require('prompt-sync')()
var utility= require('/home/abc/VSC code/VishnuProjects/datastuctures/utility/utility.js')
function cashcounter()
{
    utility.cashCounter()
}
cashcounter()