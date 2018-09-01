const _= require("lodash")
module.exports={

    /**
     * @description program to print hello userinput,hoe are you?
     * @param username
     */


  hello:function(username)
  {
      if((username.length>3) && (username>='a')||(username>='A'))
      console.log("Hello "+username+",How are you?");// prints the userinput inplace of world
      else
      console.log('enter the valid name')
  },
         /**
     * @description condition 1 to check whether its a leapyear or not 
     * @param year
     */
  leap:function(year)
  {

      if( (year % 400 ==0)  && (year % 4==0 ) && (year % 100==0) )
      {
          console.log("Leap Year");
      }
      
    else
    {
        console.log("not a leap year")//if all 3 cases doesn't work then its not a leap year
    }
  },
         /**
     * @description program for power of 2 till m values
     * @param root
     */
  power:function(root)
  {

      var m=root; //initialize root with variable m
      for(j=0;j<=m;j++)
      {
          var num=Math.pow(2,j);
        
          console.log("2  power of "+j+" is "+num);
      }
  },

      /**
     * @description program to find nth harmonic value and print
     * @param num
     */
  harmonic:function(num)
  {

    var n=num;

   var sum = 0.0;
    for ( i = 1; i <= n; i++)//for loop executes till i becomes equal to user input
     {
        sum += 1.0 / i;
        console.log("nth harmonic of"+n+"  is  "+sum);// print the harmonic value
    }

  },
        /**
       * @description program to find prime factors of a number
       * @param num
       */
  prime:function(num)
  {

      for (i=2;i<=num;i++)//loop starts at 2 and exits at num 
      {
          while(num % i==0)//checks for the while condition if true enters to the body
          {
              console.log(i+" ");
              num=num/i;      //divide num by i times
          }
      }
      if(num<1)              //if num is less than 1 print directly
      console.log(num);
     
  },
        /**
       * @description program to find heads and tails of cointoss and find percentage 
       * of heads and tails
       * @param userinput
       */
  cointoss:function(userinput)
  {

      var noOfHeads=0,noOfTails=0,n;//initialize heads and tails with 0 and declare n
      for(i=1;i<=userinput;i++)//loop runs from i=1 to number entered by the user
      {
          n=Math.random();//initialize n with math.random function
          if(n>=0.5)//if n is greater than or equal to 0.5 enters if body and increments noOfHeads
                    //or goes to else body and increments noOfTails
          {
              noOfHeads++;
          }
          else
          {
              noOfTails++;
          }
         
      }
      var hp=(noOfHeads/userinput)*100;//formula to calculate head percentage
      console.log("number of heads"+noOfHeads);
         console.log("head percentage is"+hp);
         var tp=(noOfTails/userinput)*100;//formula to calculate tail percentage
         console.log("number of tails"+noOfTails);
         console.log("tail percentage is"+tp);        
  },
       /**
       * @description program to find winpercent and losspercent of a gambler
       * @param stake
       * @param goal
       * @param trials 
       */
 gambling:function(stake,goal,trials)
 {

    var bets = 0;        
    var wins = 0;        //declare and initialize no of bets and wins to 0

    
    for ( t = 1; t < trials; t++) //loop starts from i=1 to trials inputs
    {

       
        var cash = stake;//initialize cash as stake  
        while (cash > 0 && cash < goal) //check for condition if cash greater than 0 and less than goal
        {
            bets++;//increments bets

            if (Math.random() < 0.5) 
            cash++  ;  //cash increments if condition is true
            else                    
             cash--;     //cash decrements if condition is false
        }
        if (cash == goal) //if cash is equal to goal then increments wins
        wins++;                
    }

         console.log("wins "+wins+"of"+trials);
         var winpercent=100*(wins/trials);//formula to calculate win percent
         var losspercent=100-winpercent;//formula to calculate loss percent
         console.log(winpercent+"is the percentage of win");
         console.log(losspercent+"percentage of loss");
        


 },
         /**
         * @description program to find distinct coupon numbers
         * @param min
         * @param max
         */
 coupon:function (min,max)// code for coupon numbers
    {

       var random=[],i,n;
       for(i=min;i<max;i++)
       {
           n= _.random(min,max);
           random.push(n);
       }
       console.log(random);
       console.log("number of coupon generated= "+random.length);
       var distinct=new Set(random);
       console.log(distinct);
       console.log("number of distinct coupon "+[...distinct].length)
        
    },
     /**
      * @description program to find quadratic equation roots 
      */
 quadratic:function(a,b,c)//code for quadratic equation
 {
    
     var x;//declare x

     var determinant=(b*b)-(4*a*c);
     console.log('determinant ='+determinant);//print the determinant value
    
     if (determinant > 0)//condition for determinant is greater than 0
     {
        root1 = (-b+Math.sqrt(determinant))/(2*a);
        root2 = (-b-Math.sqrt(determinant))/(2*a);

        console.log('root1 is'+root1);//print roots 
        console.log('root2 is'+root2);
    }

    
    else if (determinant == 0)//condition for determinant is 0
    {

        root1 = root2 = -b/(2*a);

        console.log("the roots are "+root1);//print roots
    }

   
    else//if both the conditions doesn't satisfy execute else body
    {
        realPart = -b/(2*a);
        imaginaryPart = Math.sqrt(-determinant)/(2*a);
        console.log('the real part is  '+realPart);//prints real part
        console.log('the imaginary part is '+imaginaryPart+"i");//prints imaginary part
    }
 },
  /**
      * @description program to find eucledian distance using below formula
      */
 eucledian:function(x,y)
 {
    
     var distance;
     distance=Math.sqrt((Math.pow(x,2))+Math.pow(y,2));//formula to calculate eucledian distance
     console.log("EUCLEDIAN DISTANCE between roots x="+x,"y="+y+" is "+distance);

 },
 /**
      * program to find speed of wind using mathematical formula
      */
 windchill:function(v,t)
 {
     
     var w;
     if(t<50 && v<120 && v>3)
     {
         var x=(Math.pow(v,0.16));//formula to calculate x
     w=35.74+0.6215*t+(0.4275*t-35.75)*x;//formula to calculate windchill
     console.log("the wind speed according to national weather services is "+w);
     }
     else
     {
        console.log("enter the valid temperature and speed");
     }
     
     
 },
 /**
  * @description program to find elapsed time from start time and stop time
  */
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

 array:function(row)// code for 2d array
 {
     var prompt=require('prompt-sync')();//user inputs using prompt
     var arr=new Array(row);//create array with row inputs
     var coloumn=prompt('enter no of coloumns :');
     for (i=0;i<row;i++)
     {
         arr[i]=new Array(coloumn);//create array with column inputs
         for(j=0;j<coloumn;j++)
         {
             arr[i][j]=prompt('enter element.....=  ');
         }
     }
     console.log(arr);
 },
  /**
      * @description program to find sum of three equal to 0
      * @param row
      */
 triplets:function(row)//sum of three code
 {
    
     var prompt=require('prompt-sync')();
     var arr=new Array(row);//create an array with row inputs
     var arr1=new Array();
     var count=0;
     var res= '';
     for(var i=0;i<row;i++)
     {
         arr[i]=prompt('enter elements......');
     }
    //  console.log(arr);

     for (var i=0; i<(arr.length-2); i++)
     {
         
         for (var j=i+1; j<(arr.length-1); j++)
         {
             
             for (var k=j+1; k<arr.length; k++)
             {
                 
                 var res=Number(arr[i])+Number(arr[j])+Number(arr[k]) ;
                 if (res== 0)
                 {
                    count++;
                    console.log('triplet '+count+"  ={"+arr[i]+","+arr[j]+","+arr[k]+'}');
                  arr1.push(arr[i]+' '+arr[j]+' '+arr[j])  
                  
                  
                 }
                 
             }
         }
     }
     function duplicates(arr)
     {
         var unique=[];
         for(var i=0;i<arr.length;i++)
         {
             if(unique.indexOf(arr[i])==-1)
             {
                 unique.push(arr[i]);
             }
         }
         return unique;
     }
     
     console.log("distinct no of triplets "+duplicates(arr1).length)
 },
 /**
     * @description program to find permutation of a string using permute function
     * @param var 
     */
permutstring:function(str)
{
    
 var permutations=[];
 permute(str,[]);
 console.log(permutations)

 function permute(str, arr) 
 {
     if(str>=1)
     {
         console.log('enter only string..')
     }
     
     else
    {

     if (typeof(str) == 'string') 
     str = str.split('');
     if (str.length == 0) 
     permutations.push(arr.join(''));
     for (var i = 0; i < str.length; i++)
      {
         var x = str.splice(i, 1);
         arr.push(x);
         permute(str, arr);
         arr.pop();
         str.splice(i, 0, x);
      }
    }
}

 },

}

