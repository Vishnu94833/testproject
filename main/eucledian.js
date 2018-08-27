var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);


function eucledian()
{
    read.question("enter the value :",function(x)
        {
            read.question("enter the value :",function(y)
        {utility.eucledian(x,y);
        read.close();
});
});
}
eucledian();