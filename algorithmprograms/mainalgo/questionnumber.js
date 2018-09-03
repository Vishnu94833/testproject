var util=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js');
var readlinesync=require('readline-sync');
var value=process.argv[2];
console.log('\n\n Think of a number between 0 and '+value);
console.log('\n follow the instructions');
util.questionnumber(readlinesync,value);