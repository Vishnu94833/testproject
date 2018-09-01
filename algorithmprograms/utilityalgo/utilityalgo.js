module.exports={
    anagram:function (s1,s2)
{
   
    if((s1)>=('a'&&'A')&&(s2)>=('a'&&'A'))
    {

            if(s1.toLowerCase().split("").sort().join("").trim() === s2.toLowerCase().split("").sort().join("").trim())
            {
                     console.log('given string is a anagram')
            }
            else
            {
                     console.log('given string is not a anagram ')
            }

    }
    else 
    {
             console.log('enter a valid string')
    }
},



primenumber:function(num1,num2)
{
var num1, num2,flag = 0, i, j;
 if(num1==0)
 console.log(2);
    for(i = num1; i <= num2; i++)
    {
     for( j =2; j <i; j++)
     {
         if(i % j == 0)
         {
             flag = 0;
             break;
         }
         else
         {
             flag = 1;
         }
     }
     if(flag == 1)
     {
        //  if((i.toString().split("").reverse().join("")==i)&& (i.toString().split("").sort().join("").trim()))
        console.log(i);
     }
    }
},
primepalindrome:function(lower,upper)
{
    var prompt=require('prompt-sync')();
 var lower, upper,flag = 0, i, j;
 // if(s2>s1)
 // {
 //     console.log('enter the valid range....')
 // }
  if(lower==0)
  console.log(2);
  for(i = lower; i <= upper; i++)
  {
      for( j =2; j <i; j++)
      {
          if(i % j == 0)
          {
              flag = 0;
              break;
          }
          else
          {
              flag = 1;
          }
      }
      if(flag == 1)
      {
        
           var y=i;
           console.log("prime numbers... "+y)
          if((i.toString().split("").reverse().join("")==i))
          {
         console.log(" primepalindrome... "+i);
          }
            
            if( i.toString().split("").sort().join("").trim()==y.toString().split("").sort().join("").trim())
            {
              console.log('the given number '+y+' is a anagram of '+i)
            }
            
         
          
          }
         
      
      
  }
 
},
binarysearch:function(size)
{
    var prompt=require('prompt-sync')();
    var flag=0;
    var array=new Array(size);
    for(i=0;i<size;i++)
    {
        array[i]=prompt('enter the elements....: ');
    }
    array.sort();
    console.log(array);
    var lsb=0;
    var msb=size-1;
    var num=prompt('enter number/string to be searched...  ');
    while(lsb<=msb)
    {
        var middle=Math.floor((lsb+msb)/2);
        if(num==array[middle])
        {
            flag=1;
            break;
        }
        else
        {
            if(num>array[middle])
            lsb=middle+1;
            else
            msb=middle-1;
        }
    }
    if(flag==1)
    console.log('number/string was found at index  '+middle)
    else
    console.log('the element was not found');
    return 0;
},
bubblesort:function(num) 
{  
    var prompt=require('prompt-sync')();
    var array=new Array(num);
    for(i=0;i<num;i++)
    {
        array[i]=prompt('enter array elements...  ')
    }
    var n = array.length;  
    console.log(n)
    var temp = 0;  
    
     for(var i=0; i < n; i++)
    {  
             for(var j=1; j < (n-i); j++)
            {  
                      if(array[j-1] > array[j])
                        {  
                             //swap elements  
                             temp = parseInt(array[j-1]);  
                             array[j-1] = parseInt(array[j]);  
                             array[j] = temp;  
                        }  
                      
            }  
    }
    console.log(array+" , ");
},

insertionsort:function(n)
{
var n,i, d, t;
 
var prompt=require('prompt-sync')();

var array=new Array(n);
for (i = 0; i < n; i++) {
    array[i]=prompt('enter array elements...  ')
  }
var n = array.length; 

  for (i = 1 ; i <= n - 1; i++) {
    d = i;
 
    while ( d > 0 && array[d-1] > array[d]) {
      t          = parseInt(array[d]);
      array[d]   = parseInt(array[d-1]);
      array[d-1] = t;
 
      d--;
    }
  }
 
 console.log("Sorted list in ascending order:\n");
 
  for (i = 0; i <= n - 1; i++) {
    console.log(array[i]);
  }
 
  return 0;
},
binarysearchword:function(array,string)
{
    
   
    array=array.sort();
    console.log(array);
    var flag=0;
    var lsb=0;
    var msb=array.length-1;
    
    while(lsb<=msb)
    {
        var middle=Math.floor((lsb+msb)/2);
        if(string==array[middle])
        {
            flag=1;
            break;
        }
        else
        {
            if(string>array[middle])
            lsb=middle+1;
            else
            msb=middle-1;
        }
    }
    if(flag==1)
    console.log('number/string was found at index  '+middle)
    else
    console.log('the element was not found');
    return 0;
},
temperatureconversion:function(value)
{
    var c,f;
    var prompt=require('prompt-sync')();
    switch(parseInt(value))
    {
        case 0:
        var c=prompt("enter degree in celsius... ")
        f=(c*(9/5))+32;
        console.log("conversion from C: "+c+" to F: "+f)
        break;
    case 1:
    var f=prompt("enter degree in farenheit... ")
        c=(f-32)*(5/9);
        console.log("conversion from F: "+f+" to C: "+c)
        break;
    default:
        console.log("invalid temperature.... ")
    }
},
monthlypayment:function(principal,years,rate)
{
    var payment;
    var n=(12*years);
    var r=(rate/(12*100));
    var x=Math.pow((1+r),(-n));
    payment=((principal*r)/(1-x));
    console.log(n);
    console.log(r);
    console.log(x);
}
}