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
    read.question("enter the value :",function(name)
        {utility.harmonic(name);
        read.close();
}
);
}
harmonic();