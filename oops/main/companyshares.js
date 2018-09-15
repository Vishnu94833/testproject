var fs=require('fs')
var prompt=require('prompt-sync')();
var data=fs.readFileSync('/home/abc/VSC code/VishnuProjects/oops/main/company.json');
var arrayOfObjects = JSON.parse(data)

class companyshares
{
    constructor()
    {
        
    }
    buy()
    {
        var n=prompt("enter .... ")
    for(var i=0;i<n;i++)
    {
    var name=prompt("enter stockname.... ")
    var share=prompt("enter shares.... ")
    var price=prompt('enter price ....... ')

    arrayOfObjects.company.push({
		stockname: name,
        stockshare: share,
        stockprice:price
	})
//     var totalvalueofeachstack=parseInt(share*price);
// console.log("the total value of  stock is ---> "+totalvalueofeachstack)
  console.log(arrayOfObjects)
  var date = new Date();
  var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  console.log("Purchase Time : " + time);
    fs.writeFile('./company.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err
        
    }) 
    }

}
sell()
{
    var index = prompt('Enter the index of stock u want to delete : ')
        delete arrayOfObjects.company[index]
        for(var k=0;k<arrayOfObjects.company.length;k++)
    {
        if(arrayOfObjects.company[k]==null)
        {
            arrayOfObjects.company.splice(k,1);
        }
    }
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log("Purchase Time : " + time);
        fs.writeFile('./company.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
            if (err) throw err
            console.log("Done!")
    
        }
    )
    console.log(arrayOfObjects)
}
printstockreport()
{
    console.log(arrayOfObjects)
}
valueofshares()
{
    var amount = 0;
    for (var i = 0 ; i < arrayOfObjects.company.length ; i++)
    {
     amount=Number(arrayOfObjects.company[i].stockprice)+Number(amount);
     //amount=parseInt(amount)
    
    }
console.log(amount)
}
}
var res = new companyshares();
console.log('Press 1 to buy stocks ')
console.log('Press 2 for sell shares : ')
console.log('Press 3 to get the stock report : ')
console.log('Press 4 to get value of shares : ')
var choice =  prompt ('Enter the choice u want to perform ')
switch(parseInt(choice))
{
    case 1 : res.buy()
    break;

    case 2 : res.sell()
    break;
    
    case 3 : res.printstockreport()
    break;
    
    case 4 : res.valueofshares()
    break; 

    default:
    console.log('enter valid input.... ')
}


