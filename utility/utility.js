const _=["lodash"]
module.exports={
  hello:function(world)
  {
      console.log("Hello "+world+",How are you?");
  },
  leap:function(magic)
  {
      if( magic % 400 ==0 )
      {
          console.log("Leap Year");
      }
      else if(magic % 100==0)
      {
          console.log("Not a Leap Year");
      }
      else if(magic % 4==0)
    {
        console.log("leap year");
    }
    else
    {
        console.log("not a leap year")
    }
  },
  power:function(root)
  {
      var m=root;
      for(j=0;j<=m;j++)
      {
          var num=Math.pow(2,j);
          console.log("2  power of "+j+" is "+num);
      }
  },


  harmonic:function(name)
  {
    var n=name;

   var sum = 0.0;
    for ( i = 1; i <= n; i++)
     {
        sum += 1.0 / i;
        console.log("nth harmonic of"+n+"  is  "+sum);
    }

  },
  prime:function(num)
  {
      for (i=2;i<=num;i++)
      {
          while(num % i==0)
          {
              console.log(i+" ");
              num=num/i;
          }
      }
      if(num<1)
      console.log(num);
     
  },
  cointoss:function(userinput)
  {
      var noOfHeads=0,noOfTails=0,n;
      for(i=1;i<=userinput;i++)
      {
          n=Math.random();
          if(n>=0.5)
          {
              noOfHeads++;
          }
          else
          {
              noOfTails++;
          }
         
      }
      var hp=(noOfHeads/userinput)*100;
      console.log("number of heads"+noOfHeads);
         console.log("head percentage is"+hp);
         var tp=(noOfTails/userinput)*100;
         console.log("number of tails"+noOfTails);
         console.log("tail percentage is"+tp);        
  },
 gambling:function(stake,goal,trials)
 {
    var bets = 0;        
    var wins = 0;        

    
    for ( t = 1; t < trials; t++) {

       
        var cash = stake;
        while (cash > 0 && cash < goal) 
        {
            bets++;
            if (Math.random() < 0.5) 
            cash++  ;  
            else                    
             cash--;     
        }
        if (cash == goal) 
        wins++;                
    }

         console.log("wins "+wins+"of"+trials);
         var winpercent=100*(wins/trials);
         var losspercent=100-winpercent;
         console.log(winpercent+"is the percentage of win");
         console.log(losspercent+"percentage of loss");
        


 },
 coupon:function (min,max,num)
    {
        var arr=[];
        for(i=0;i<=num;i++)
        {
            arr.push(Math.floor(Math.random(min,max) * 100));
        }
        for(var i=0;i<=arr.length;i++)
        {
            if(arr[i]==arr[i+1])
            {
                arr.pop(arr[i+1]);
            }
        }
        for (var j=0;j<arr.length;j++)
        {
            console.log("distinct random numbers are: "+arr[j])
        }
        
    },
 quadratic:function(a,b,c)
 {
     var x;
     var determinant=(b*b)-(4*a*c);
     console.log('determinant ='+determinant);
    
     if (determinant > 0)
    {
    
        root1 = (-b+Math.sqrt(determinant))/(2*a);
        root2 = (-b-Math.sqrt(determinant))/(2*a);

        console.log('root1 is'+root1);
        console.log('root2 is'+root2);
    }

    
    else if (determinant == 0)
    {
        root1 = root2 = -b/(2*a);

        console.log("the roots are "+root1);
    }

   
    else
    {
        realPart = -b/(2*a);
        imaginaryPart = Math.sqrt(-determinant)/(2*a);
        console.log('the real part is  '+realPart);
        console.log('the imaginary part is '+imaginaryPart+"i");
    }
 },
 eucledian:function(x,y)
 {
     var distance;
     distance=Math.sqrt((Math.pow(x,2))+Math.pow(y,2));
     console.log("EUCLEDIAN DISTANCE between roots x="+x,"y="+y+" is "+distance);

 },
 windchill:function(v,t)
 {
     var w;
     if(t<50 && v<120 && v>3)
     {
         var x=(Math.pow(v,0.16));
     w=35.74+0.6215*t+(0.4275*t-35.75)*x;
     console.log("the wind speed according to national weather services is "+w);
     }
     else
     {
        console.log("enter the valid temperature and speed");
     }
     
     
 },
 getCurrentTime:function()
 {
     var d=new Date();
     var n=d.getTime();
     return n;
 },
 getElapsedTime:function(startTime,stopTime)
 {
     var elapsed=(stopTime-startTime)/1000;
     return elapsed;
 },

 array:function(row)
 {
     var prompt=require('prompt-sync')();
     var arr=new Array(row);
     var coloumn=prompt('enter no of coloumns :');
     for (i=0;i<row;i++)
     {
         arr[i]=new Array(coloumn);
         for(j=0;j<coloumn;j++)
         {
             arr[i][j]=prompt('enter element.....=');
         }
     }
     console.log(arr);
 },
 sumofthree:function(row)
 {
     var prompt=require('prompt-sync')();
     var arr=new Array(row);
     var arr1=new Array();
     var count=0;
     var res= '';
     for(var i=0;i<row;i++)
     {
         arr[i]=prompt('enter elements......');
     }
     console.log(arr);

     for (var i=0; i<arr.length; i++)
     {
         
         for (var j=i+1; j<arr.length; j++)
         {
             
             for (var k=j+1; k<arr.length; k++)
             {
                 
                 var res=Number(arr[i])+Number(arr[j])+Number(arr[k]) ;
                 if (res== 0)
                 {
                    count++;
                  arr1.push(arr[i]+' '+arr[j]+' '+arr[j])  
                  
                 }
             }
         }
     }
     function dup(arr)
     {
         var uniquearray=[];
         for(var i=0;i<arr.length;i++)
         {
             if(uniquearray.indexOf(arr[i])==-1)
             {
                 uniquearray.push(arr[i]);
             }
         }
         return uniquearray;
     }
    //  var distinct=new Set(arr1);
    //  console.log('distinct triples '+[...distinct]);
    //  console.log("total no of triplets ="+[...distinct].length);
     
     console.log(arr);
     console.log(count)
 },

permutstring:function(str)
{
 var permutations = [];
 permute(str,[]);
 console.log(permutations);

 function permute(str, arr) 
 {
     if (typeof (str) == 'string') 
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
 
 },

}

