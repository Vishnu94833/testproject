var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);


function quadratic()
{
    read.question("enter the value :",function(a)
        {
            read.question("enter the value :",function(b)
            {
                read.question("enter the value :",function(c)
                {
            utility.quadratic(a,b,c);
        read.close();
});
});
});
}
quadratic();