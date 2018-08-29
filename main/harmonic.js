var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);


function harmonic()
{
    read.question("enter the value :",function(num)
        {utility.harmonic(num);
        read.close();
}
);
}
harmonic();