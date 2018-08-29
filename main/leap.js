var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);

function leap()
{
    read.question("enter the year :",function(year)
        {utility.leap(year);
        read.close();
}
);
}
leap();