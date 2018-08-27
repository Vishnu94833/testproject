var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);


function windchill()
{
    read.question("enter the wind speed value :",function(v)
        {
            read.question("enter the temperature value :",function(t)
        {utility.windchill(v,t);
        read.close();
});
});
}
windchill();