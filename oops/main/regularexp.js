var prompt = require('prompt-sync')()
var fs = require('fs')
var data = fs.readFileSync('/home/abc/VSC code/VishnuProjects/oops/main/regular.txt')
data = data.toString()
var strict = /[a-zA-Z]/g
var strict1 = /[0-9]/g
var strict2 = /[!@#$%^&*+_]/g

var name = prompt('Enter your First name : ')
if(name.search(strict1)==-1 && name.search(strict2)==-1)
{
    var string = data.replace(/<<name>>/g,name)
       
}
else 
    {
        console.log('Invalid ')
        process.exit()
    }
var fullname = prompt('Enter your Full name : ')

if(name.search(strict1)==-1 && name.search(strict2)==-1)
{
    string = string.replace(/<<fullname>>/g,fullname)
    
}
else 
{
    console.log('invalid')
    process.exit()
}
var contact = prompt('Enter your contact number : ')

if(contact.search(strict)==-1 && contact.search(strict2)==-1)
{
    if(contact.length==10)
    {
        string = string.replace(/91-xxxxxxxxxx/g,contact)
    }
    else 
    {
        console.log('Enter 10 digit number')
        process.exit()
    }

}
else 
{
    console.log('invalid')
    process.exit()
}
var d=new Date();
var date=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
string=string.replace(/01-01-2016/g,date);
console.log(string)


