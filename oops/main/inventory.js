var fs = require('fs')
var prompt=require('prompt-sync')();

fs.readFile('invent.json', 'utf-8', function(err, data) {
    if (err) throw err
    var arrayOfObjects = JSON.parse(data)
    // console.log(data)
    console.log('1.Insert Stock')
    console.log('2.Delete Stock')
    var choice = prompt('choice : ')
    switch(parseInt(choice))
    {
      case 1:
    var n=prompt("enter .... ")
    for(var i=0;i<n;i++)
    {
    var name=prompt("enter stockname.... ")
var share=prompt("enter shares.... ")
    var price=prompt('enter price ....... ')

    arrayOfObjects.invent.push({
		stockname: name,
        stockshare: share,
        stockprice:price
	})
    var totalvalueofeachstack=parseInt(share*price);
console.log("the total value of  stock is ---> "+totalvalueofeachstack)
  console.log(arrayOfObjects)
    fs.writeFile('invent.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err
        
    })
}
break
case 2 : var del = prompt('Provide an Index : ')
            delete arrayOfObjects.invent[del]
            fs.writeFile('./invent.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
            if (err)
            throw err
            console.log(arrayOfObjects)
    })
    break;

default:
console.log("enter options 1 or 2")
}
})