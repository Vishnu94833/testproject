
    var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);


function stopwatch()
{
    read.question("switch on stopwatch :",function(i)
        {
            
        //     read.question("switch off stopwatch :",function(d)
        // {
        utility.stopwatch(i);
        read.close();
});
        // });
}
stopwatch();