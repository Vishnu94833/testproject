var fs = require('fs')
var prompt = require('prompt-sync')();




fs.readFile('details.json', 'utf-8', function (err, data) {
    if (err) throw err
    var record = JSON.parse(data)
    // console.log(data)

    function Delete() {
        var name = prompt('Enter the Firstname of Profile you want to delete ')
        for (var i = 0; i < record.details.length; i++) {
            if (record.details[i].firstname == name) {
                record.details.splice(i, 1)
            }
        }
        fs.writeFileSync('./details.json', JSON.stringify(record), 'utf-8', function (err) {
            if (err) throw err

        })
    }
    function create() {
        var n = prompt("enter .... ")
        for (var i = 0; i < n; i++) {
            var name1 = prompt("enter firstname.... ")
            var name2 = prompt("enter lastname.... ")
            var cit = prompt("enter city.... ")
            var stat = prompt('enter state ....... ')
            var pincode = prompt('enter pincode ....... ')
            var mobile = prompt('enter phone number ....... ')

            record.details.push({
                firstname: name1,
                lastname: name2,
                address_and_phone_num: { city: cit, state: stat, zipcode: pincode, phonenumber: mobile }
            })

            fs.writeFile('details.json', JSON.stringify(record), 'utf-8', function (err) {
                if (err) throw err

            })
        }
    }
    console.log('enter 1 to create address.... ')
    console.log('enter 2 to open the address book.....')
    console.log('enter 3 to exit .... ')
    var choice = prompt('choice : ')
    switch (parseInt(choice)) {
        case 1:
            create();
            
            break
        case 2:
            // var open = prompt('enter first name to see the address...  : ')
            // console.log('enter 1 for adding address.... ')
            console.log('enter 1 to delete address.... ')
            console.log('enter 2 to update address.... ')
            console.log('enter 3 to arrange address.... ')
            console.log('enter 4 to address.... ')
            console.log('enter 5 to save.... ')
            console.log('enter 6 to quit.... ')
            var option = prompt('enter option .... ')
            switch (parseInt(option)) {
                case 1:
                Delete();
                    break;


                case 2:
                    break;

                case 3:
                    break;

                case 4:
                    break;

                case 5:
                    break;

                case 6:
                    break;
            }
        case 3:
            process.exit();

        default:
            console.log("enter options 1 or 2")
    }
})
