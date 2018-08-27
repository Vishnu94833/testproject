var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);


function gambling()
{
    read.question("enter the stake amount :",function(stake)
        {
            read.question("enter the goal :",function(goal)
            {  
                read.question("enter number of times :",function(trials)
        {
            utility.gambling(stake,goal,trials);
        read.close();
});
});
});
}
gambling();