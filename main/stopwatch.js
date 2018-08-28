
    var readline=require('readline');
    var utility=require('../utility/utility.js');
    var startTime=0;
    var read=readline.createInterface
    (
        {
            input:process.stdin,
            output:process.stdout
        }
    
    );
    
    
    function stopwatch()
    {
        read.question("switch on stopwatch :",function(start)
            {
                
           if(start==1)
           {
               startTime=utility.getCurrentTime();
               read.question("switch off stopwatch :",function(stop)
               {
                var stopTime=utility.getCurrentTime();
                var res=utility.getElapsedTime(startTime,stopTime);
                console.log("elapse time is"+res+"seconds");
                read.close();
               });
           }
    });
            // });
    }
    stopwatch();