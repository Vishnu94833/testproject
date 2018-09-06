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
    var res=[];
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
          res.push(y);
          anagram(res);
          
          
           if((i.toString().split("").reverse().join("")==i))
          {
         console.log(" primepalindrome... "+i);
          }
          
            
            // if( i.toString().split("").sort().join("").trim()==
            // y.toString().split("").sort().join("").trim())
            // {
            //   console.log('the given number '+y+' is a anagram of '+i)
            // }
            
          }  
          
  }
  function anagram(res)
  {
      var n = res.length;

for(var i = 0; i <= n; i++)
{
    for(var j =i+1; j <= n; j++)
    {
        var arr1=[];
        var s1 = "" + parseInt(res[i]); 
        var s2 = "" + parseInt(res[j]);
        s1 = s1.split('').sort();       
        s2 = s2.split('').sort();     //parse each element and sort in ascending order  
        if(s1.join() === s2.join())  //joins the specified path string segments 
        {
            console.log("The two anagrams are : " + res[i] + " , " + res[j]);
            arr1.push(res[i]); // stores the result in array arr1
            
        }
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
    
     for(var i=1; i < n-1; i++)
    {  
             for(var j=0; j < (n-2); j++)
            {  
                      if(array[j] > array[j+1])
                        {  
                             //swap elements  
                             temp = parseInt(array[j]);  
                             array[j] = parseInt(array[j+1]);  
                             array[j+1] = temp;  
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
     // console.log(1)
      array[d]   = parseInt(array[d-1]);
     // console.log(3)
      array[d-1] = t;
     // console.log(3)
 
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
    string=string.toLowerCase()
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
    //for(var i = index-1;i >= 0;i--){
      console.log(String(binary.reverse()).replace(/\,/g," "));
    
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
      * @param a
      * @param b
      */
        var a, b;
        var flag=0;
        this.decimaltobinary(c);
        console.log(c)
         a = c & 0x0F;// and input with hexadecimal 0x0f
         b = c & 0xF0;// and input with hexadecimal 0xf0
         a=a << 4;// left shift temp1 
         b=b >> 4;// right shift temp2
    var n=0,count=0;
         var res=(b|a); //or temp1 and temp2
         
         this.decimaltobinary(res)
         console.log(res)
      // this.decimaltobinary(temp);
        // console.log(res)
         for(i=res;i>=0;i--)
         {
             if(res==Math.pow(2,i))
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
 


vending:function(amount)
    {
        var amt=Math.round(amount);
        console.log(parseInt(amt))
        var arr=[2000,500,100,50,20,10,5,2,1];
        var count,i;
    for(i=0;i<=arr.length;i++)
    {
    if(amt/arr[i]>=1)//case to print how many no of notes 2000,500,100,50,20,10,5,2,1
    {
            var result = parseInt(Math.floor(amt/arr[i]))
            console.log('Number of '+arr[i]+' rs note are : ' +result)
            amt = parseInt(amt) - parseInt(result*arr[i]);
            amt=parseInt(amt)
            count = parseInt(count) + parseInt(result);

    }
    
    }
    // console.log(count)
    },
    

     /**
  * @description program to find an integer from a array using binary search
  */
binarysearchint:function(size)
{
    /**
     * @param size
     */
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
        var middle=Math.floor((lsb+msb)/2);// to find middle element of array
        if(num==array[middle])
        {
            flag=1;
            break;
        }
        else
        {
            if(num>array[middle])//checks if number is greater than middle element
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
    
     for(var i=1; i < n-1; i++)//loop runs for n times
    {  
             for(var j=0; j < (n-2); j++)//loop runs for n-1 times
            {  
                      if(array[j] > array[j+1])//compares array[0]>array[1]
                        {  
                             //swap elements  
                             temp = parseInt(array[j]);  
                             array[j] = parseInt(array[j+1]);  
                             array[j+1] = temp;  
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

  for (i = 1 ; i <= n - 1; i++) 
  {
    d = i;
 
    while ( d > 0 && array[d-1] > array[d]) //condition for insertion sort
    {
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
    /**
     * @param size
     */
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

dayofweek:function(date,month,year) 
{
    /**
     * @param day
     * @param month
     * @param year
     */
        
        aa =(Math.floor((14 - month) / 12));
        aa=parseInt(aa);
        
        yy = year - aa;
        
        mm =((month +(12 * aa)) - 2);
        mm=parseInt(mm)
        
        dayOfWeek = ((date + yy + Math.floor(yy / 4) - Math.floor(yy / 100) 
        +Math.floor(yy / 400) + Math.floor((31 * mm) / 12)) % 7);
    
        dayOfWeek=parseInt(dayOfWeek)
    
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
            break;
        case 7:
        console.log("invalid date")
    } 

    },
    /**
  * @description program to find the question number
  */
    questionNumber : function(number)
    {
        /**
         * @param number
         */
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
        /**
         * @param low
         * @param high
         */
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

    

