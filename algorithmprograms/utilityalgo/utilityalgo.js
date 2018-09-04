module.exports={
/**
 * @description program to find anagram of a string
 */


    anagram:function (s1,s2)
{
    /**
     * @param s1 string one
     * @param s2 string two
     */
   
    if((s1)>=('a'&&'A')&&(s2)>=('a'&&'A'))//limits only to string
    {

            if(s1.toLowerCase().split("").sort().join("").trim() === s2.toLowerCase().split("").sort().join("").trim())//checks for the anagram condition
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
getCurrentTime:function()//create getcurrent time function for stopwatch code
 {
     var d=new Date();
     var n=d.getTime();//get current time
     return n;
 },
 getElapsedTime:function(startTime,stopTime)//create elapsed time function for stopwatch
 {
     var elapsed=(stopTime-startTime)/1000;//elapsed time formula
     return elapsed;
 },

 /**
  * @description program to find prime numbers between the given range
  */
primenumber:function(num1,num2)
{
    /**
     * @param num1 the lower number
     * @param num2 the higher number
     */
var num1, num2,flag = 0, i, j;
 if(num1==0)
 console.log(2);
    for(i = num1; i <= num2; i++)//loop for the given range of times
    {
     for( j =2; j <i; j++)
     {
         if(i % j == 0)//condition to check prime number
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
 /**
  * @description program to find prime,palindrome and anagram between the given range
  */
primepalindrome:function(lower,upper)
{
    /**
     * @param lower 
     * @param upper
     */
    var prompt=require('prompt-sync')();
 var lower, upper,flag = 0, i, j;
 // if(s2>s1)
 // {
 //     console.log('enter the valid range....')
 // }
  if(lower==0)
  console.log(2);
  for(i = lower; i <= upper; i++)//for loop runs till the upper range
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

 /**
  * @description program to find sorting of an array using bubblesort
  */

bubblesort:function(num) 
{  
    /**
     * @param num
     */
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

 /**
  * @description program to find sorting of an array using insertionsort
  */
insertionsort:function(n)
{
    /**
     * @param n
     * @param i
     * @param d
     * @param t
     */
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
      console.log(1)
      array[d]   = parseInt(array[d-1]);
      console.log(3)
      array[d-1] = t;
      console.log(3)
 
      d--;
    }
  }
 
 console.log("Sorted list in ascending order:\n");
 
  for (i = 0; i <= n - 1; i++) {
    console.log(array[i]);
  }
 
  return 0;
},

 /**
  * @description program to find a word from an array using binarysearch
  */
binarysearchword:function(array,string)
{
    /**
     * @param array
     * 
     */
   
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
 /**
  * @description program to find sorting of an array using mergesort using three different function
  */
mergesort : function(size)
    {
        /**
         * @param size
         */
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
            for(let i=0;i<size;i++)
            {
                arr[i]=prompt("enter elements: ");
                
            }
            console.log((arr));
           // console.log("before merge arr len "+arr.length);
            this.merge((arr));
            //console.log("after merge arr len "+arr.length);
            arr.forEach(element =>
                {
            
                    console.log(parseInt(element));
                });
    },  
    merge : function(arr)
    {
        if(arr.length==1)
        {
            return; 
        }
        var m=Math.floor(arr.length/2);
        var a1=new Array(m);
        var a2=new Array(arr.length-m);
        var i;
        for(i=0;i<a1.length;i++)
        {
            a1[i]=parseInt(arr[i]);
            
        }
        for(var j=0;j<a2.length;j++,i++)
        {
            a2[j]=parseInt(arr[i]);
            
        }
        this.merge(a1);
        this.merge(a2);
        this.merger(a1,a2,arr);
    },
    merger : function(a,b,c)
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length)
        {
            if(a[i]<b[j])
            {
                c[k]=parseInt(a[i]);
                i++;
                k++;
            }
            else
            {
                c[k]=parseInt(b[j]);
                k++;
                j++;
            }
        }
        while(i<a.length)
        {
            c[k]=parseInt(a[i]);
            k++;
            i++;
        }
        while(j<b.length)
        {
            c[k]=parseInt(b[j]);
            k++;
            j++;
        }
    },

     /**
  * @description program to find temperature conversion from celsius to farenheit and vice versa
  */
temperatureconversion:function(value)
{
    /**
     * @param c
     * @param f
     */
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
 /**
  * @description program to find monthly payment using given formula
  */
monthlypayment:function(principal,years,rate)
{
    /**
     * @param principal
     * @param years
     * @param rate
     */
    var payment;
    var n=(12*years);
    var r=(rate/(12*100));
    var x=Math.pow((1+r),(-n));
    payment=((principal*r)/(1-x));
    // console.log(n);
    // console.log(r);
    // console.log(x);
    console.log("payment....: "+payment)
},
 /**
  * @description program to convert decimal to binary
  */
decimaltobinary:function(num)
{
    /**
     * @param binary[] array
     */

    var binary=[];
    var index=0;
    while(num > 0)
    {
      binary[index++] = Math.floor(num%2);
      num = Math.floor(num/2);
    }
    for(var i = index-1;i >= 0;i--){
      console.log((binary[i]));
    }
 },
 
  /**
  * @description program to find square root of a number using newton method
  */
 newtonmethod:function(num)
 {
     /**
      * @param num
      */
     var epsilon=1e-15;
     var t=num;
    if((num>=0)&&(!NaN))
    {
        while(Math.abs(t-num/t)>epsilon*t)
     {
         t=(num/t+t)/2.0;
         
     }
     console.log(t)
    }
    else
    {
        console.log('enter only number')
    }

 },
  /**
  * @description program to swap lower and upper nibble of a number
  */
 swapnibble:function(c)
 {
     /**
      * @param temp1
      * @param temp2S
      */
    var temp1, temp2;
    var flag=0;
         temp1 = c & 0x0F;
         temp2 = c & 0xF0;
         temp1=temp1 << 4;
         temp2=temp2 >> 4;
    var n=0,count=0;
         var temp=(temp2|temp1); //adding the bits
         console.log(temp)
        
         for(i=temp;i>=0;i--)
         {
             if(temp==Math.pow(2,i))
             {
                 flag=1;
                 break;
             }

         }
         if(flag==1)
         console.log('2 power of '+i)
         else
         console.log('number is not a power of 2')
         
         
         

 },
  /**
  * @description program to find minimum number of notes to be printed by the vending machine
  */
 vendingmachine : function(amount)
    {
        var count =0;
        choice = 1;
        switch(choice)
        {
            case 1 : if(amount/1000>=1)
            {
                    var result = Math.floor(amount/1000)
                    console.log('Number of 1000 rs note are : ' +result)
                    amount = amount -result*1000;
                    count = count + result;
        }
        case 2 : if(amount/500>=1)
        {
                var result1 = Math.floor(amount/500)
                console.log('Number of 500 rs note are : ' +result1)
                amount = amount - result1*500;
                count = count + result1;
    }
    case 3 : if(amount/100>=1)
    {
            var result2 = Math.floor(amount/100)
            console.log('Number of 100 rs note are : ' +result2)
            amount = amount - result2*100;
            count = count + result2;
}
case 4 : if(amount/50>=1)
{
        var result3 = Math.floor(amount/50)
        console.log('Number of 50 rs note are : ' +result3)
        amount = amount - result3*50;
        count = count + result3;
}
case 5: if(amount/10>=1)
{
        var result4 = Math.floor(amount/10)
        console.log('Number of 10 rs note are : ' +result4)
        amount = amount - result4*10;
        count = count + result4;
}
case 6: if(amount/5>=1)
{
        var result5 = Math.floor(amount/5)
        console.log('Number of 5 rs note are : ' +result5)
        amount = amount - result5*5;
        count = count + result5;
}
case 7 : if(amount/2>=1)
{
        var result7 = Math.floor(amount/2)
        console.log('Number of 2 rs note are : ' +result7)
        amount = amount - result7*2;
        count = count + result7;
}
case 8 : if(amount/1>=1)
{
        var result8 = Math.floor(amount/1)
        console.log('Number of 1 rs note are : ' +result8)
        count = count + result8;
}
    }
    count = parseInt(count)
    console.log('Total notes are ' +count)
    },
     /**
  * @description program to find an integer from a array using binary search
  */
binarysearchint:function(size)
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



/************************************************************************************/
     /**
  * @description program to sort a array using bubble sort
  */


bubblesortint:function(num) 
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
     /**
  * @description program to sort a array using insertion sort
  */
insertionsortint:function(n)
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
      console.log(1)
      array[d]   = parseInt(array[d-1]);
      console.log(3)
      array[d-1] = t;
      console.log(3)
 
      d--;
    }
  }
 
 console.log("Sorted list in ascending order:\n");
 
  for (i = 0; i <= n - 1; i++) {
    console.log(array[i]);
  }
 
  return 0;
},
     /**
  * @description program to find an string from a array using binary search
  */
binarysearchstring:function(size)
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
     /**
  * @description program to sort string using bubble sort
  */
bubblesortstring:function(num) 
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
                             temp = (array[j-1]);  
                             array[j-1] =(array[j]);  
                             array[j] = temp;  
                        }  
                      
            }  
    }
    console.log(array+" , ");
},
  /**
  * @description program to sort string using insertion sort
  */
insertionsortstring:function(n)
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
      t          = (array[d]);
      
      array[d]   = (array[d-1]);
     
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

     /**
  * @description program to find day of a week using formula
  */

dayofweek:function(day,month,year) 
{
        
        aa =(Math.floor((14 - month) / 12));
        aa=parseInt(aa);
        // console.log(aa)
        yy = year - aa;
        // console.log(yy)
        mm =((month +(12 * aa)) - 2);
        mm=parseInt(mm)
        // console.log(mm)
        dayOfWeek = ((day + yy + Math.floor(yy / 4) - Math.floor(yy / 100) 
        +Math.floor(yy / 400) + Math.floor((31 * mm) / 12)) % 7);
    // console.log(dayOfWeek)
        dayOfWeek=parseInt(dayOfWeek)
        switch(parseInt(month))
   {
case 1:
      console.log("January\n");
      break;
case 2:
      console.log("February\n");
      break;
case 3:
      console.log("March\n");
      break;
case 4:
      console.log("April\n");
      break;
case 5:
      console.log("May\n");
      break;
case 6:
      console.log("June\n");
      break;
case 7:
      console.log("July\n");
      break;
case 8:
      console.log("August\n");
      break;
case 9:
      console.log("September\n");
      break;
case 10:
      console.log("October\n");
      break;
case 11:
      console.log("November\n");
      break;
case 12:
      console.log("December\n");
      break;
default:
      console.log("invalid Month number\nPlease try again ....\n");
      break;
      }

    //   var x= ((dayOfWeek + 6) % 7) + 1;

      switch ((dayOfWeek))
      {
        case 0:
           console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
    } 
    
    },
    /**
  * @description program to find the question number
  */
    questionNumber : function(number)
    {
        var prompt =require('prompt-sync')()
        var n = Math.pow(2,number)
        console.log('Think of a number between 0 and ' + n )
        var low = 0;
        var high = n;
        var secret = this.question(low,high)
        console.log('Your number is '+secret)
    },
        
    question : function(low ,high)
    {
        var prompt =require('prompt-sync')()
        if ((high - low) == 1) 
        return low;
        else
        var mid =low + (high-low) / 2;
        console.log("Is it less than  " , +mid)
        var choice = prompt('Enter the choice in true or false : ')
        if(choice ==='t')
        {
        return this.question(low,mid)
        }
        else if(choice === 'f')
        {
        return this.question(mid,high)
    }
    else
    {
        console.log('Not valid')
    }
},
}

    

