var prompt=require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')

function dayofweek()
{
    var date=prompt("enter the day... ")
    date=parseInt(date);
    var month=prompt("enter the month... ")
    month=parseInt(month)
    var year=prompt("enter the year... ")
    year=parseInt(year)
    if(year % 4 == 0 && year % 100 !=0 || year % 400 ==0) //logic to find leap year
    {
        if (date > 0 && date < 32 && month  <=12)
        {
            utility.dayofweek(date, month , year);
        }
        else{
            console.log("Invalid date");
    
        }

    }
    else if (date > 29 && month == 2)
    {
        console.log("Date does'nt exsit");
    }
    else if (date >= 31 && (month == 4 || month ==6 || month ==9 || month == 11))
    {
        console.log("Invalid date");
    }
    else if(date > 0 && date < 32)
    {
        utility.dayofwWeek(date, month , year);
    }
    else{
        console.log("Invalid date");
    }
}      
    

dayofweek();
