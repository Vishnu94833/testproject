var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);


function coupon()
{
    read.question("enter the min value :",function(min)
        {
            read.question("enter the max value :",function(max)
        {
            read.question("enter no of tokens :",function(num)
        {
           
            utility.coupon(min,max,num);
        read.close();
});
        });
    });
}
coupon();