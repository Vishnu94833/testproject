var prompt = require('prompt-sync')();
var utility=require('/home/abc/VSC code/VishnuProjects/algorithmprograms/utilityalgo/utilityalgo.js')
/**
 * @description program to search and sort
 */
function searchandsort()
{ 
    var userInput= prompt("Enter the number of elements in the array: ");
        var arr = new Array(userInput);
        //console.log("Enter the number of elements in the array: ");
            // for(var i=0;i<userInput;i++)
            // {
            //   arr[i] = prompt("Enter the elements for this array: ");
            // }
                console.log("1: BinarySearch method for Integer .");
                console.log("2: InsertionSort method for Integer . ");
                console.log("3: BubbleSort method for Integer . ");  
                console.log("4: Binarysearch method for  String. ");
                console.log("5: InsertionSort method for  String. ");
                console.log("6: Bubblesort method for  String. "); 
                var choice= prompt("Enter your choice of operation: ");

            switch(parseInt(choice))
            {
                case 1:
               var startTime = utility.getCurrentTime();
                   utility.binarysearchint(arr);
                var stopTime = utility.getCurrentTime();
                var res=utility.getElapsedTime(startTime,stopTime);
               console.log("The time taken to search is: "+res+" seconds");
                    break;

                case 2:
                var startTime = utility.getCurrentTime();
                    utility.insertionsortint(userInput,arr);
                    var stopTime = utility.getCurrentTime();
                    var res=utility.getElapsedTime(startTime,stopTime);
               console.log("The time taken to sort is "+res+" seconds");
                    break;

                case 3:
                var startTime = utility.getCurrentTime();
                    utility.bubblesortint(userInput,arr);
                    var stopTime = utility.getCurrentTime();
                    var res=utility.getElapsedTime(startTime,stopTime);
               console.log("The time taken to sort is "+res+" seconds");
                    break;
                    case 4:
                var startTime = utility.getCurrentTime();
                    utility.binarysearchstring(userInput,arr);
                    var stopTime = utility.getCurrentTime();
                    var res=utility.getElapsedTime(startTime,stopTime);
               console.log("The time taken to sort is "+res+" seconds");
                    break;
                    case 5:
                var startTime = utility.getCurrentTime();
                    utility.insertionsortstring(userInput,arr);
                    var stopTime = utility.getCurrentTime();
                    var res=utility.getElapsedTime(startTime,stopTime);
               console.log("The time taken to sort is "+res+" seconds");
                    break;
                    case 6:
                var startTime = utility.getCurrentTime();
                    utility.bubblesortstring(userInput,arr);
                    var stopTime = utility.getCurrentTime();
                    var res=utility.getElapsedTime(startTime,stopTime);
               console.log("The time taken to sort is "+res+" seconds");
                    break;

                default:
                    console.log("Invalid choice! Please enter a valid option.");
                break;
                   
         } 
 }

searchandsort();