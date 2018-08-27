var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);


function cointoss()
{
    read.question("enter the number of times to flip a coin:",function(userinput)
        {utility.cointoss(userinput);
        read.close();
}
);
}
cointoss();