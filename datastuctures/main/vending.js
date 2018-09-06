
function vending()
{
    var prompt=require('prompt-sync')();
    var amount=prompt("enter the amount  ")
var arr=[1000,500,200,100,50,20,10,5,2,1];
var count,i;
for(i=0;i<=arr.length;i++)
{
if(amount/arr[i]>=1)//case5 to print 10 notes
{
        var result4 = Math.floor(amount/arr[i])
        console.log('Number of '+arr[i]+' rs note are : ' +result4)
        amount = amount - result4*arr[i];
        count = count + result4;
        
}

}
console.log(count)
}
vending();