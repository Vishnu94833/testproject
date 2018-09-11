

  "use strict"
  var fs = require('fs')
  var prompt = require('prompt-sync')()
  var utility= require('/home/abc/VSC code/VishnuProjects/datastuctures/utility/utility.js')
  
  var data = fs.readFileSync('hash.txt')
  data =data.toString().split(' ')
  function hashing()
  {
      var num = prompt('Enter the element  to be searched : ') ; 
      utility.hashing(data,num);
  }

  hashing();
    

 
