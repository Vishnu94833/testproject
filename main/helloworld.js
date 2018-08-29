var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface
(
    {
        input:process.stdin,
        output:process.stdout
    }

);

function hello()
{
    read.question("Enter the user name:",function(username)
    {
utility.hello(username);
read.close();
    });
}
hello();