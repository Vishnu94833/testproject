var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function vendingmachine()
{
    var amount=prompt('enter the amount   ');
    utility.vendingmachine(amount);
    
}
vendingmachine();
