var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);


function power()
{
    read.question("enter the power value :",function(root)
        {utility.power(root);
        read.close();
}
);
}
power();