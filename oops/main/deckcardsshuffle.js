var utilityQueue = require('/home/abc/VSC code/VishnuProjects/oops/main/queue.js');
var queue = new utilityQueue();
var queue1 = new utilityQueue();
var queue2 = new utilityQueue();
var queue3 = new utilityQueue();

var arr1 = ["Hearts","Diamonds", "Spades","Clubs"];
    var arr2 = ["Jack", "Queen", "King", "Ace","2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var n = arr1.length * arr2.length;
    var arr3 = new Array(n);


    for (var i = 0; i < arr2.length; i++) 
    {
        for (var j = 0; j < arr1.length; j++) 
        {
            arr3[arr1.length*i + j] = arr2[i] + " of " + arr1[j];
        }
    }

function shuffle()
{
    for (var i = 0; i < n; i++) 
    {
        var random = i + parseInt(Math.random() * (n-i));
        var temp = arr3[random];
        arr3[random] = arr3[i];
        arr3[i] = temp;
    }
}

    
    for (var j = 0; j < 9; j++)
    {
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
        queue.enqueue(arr);
        i++;
        
    }
    console.log(" Person 1 ");
    queue.printQ();
    shuffle();
    for (var j = 0; j < 9; j++)
    {
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
       // console.log(arr);
        queue1.enqueue(arr);
        i++;

    }
    console.log(" Person 2 ");
    queue1.printQ();
    shuffle();
    for (var j = 0; j < 9; j++)
    {
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
       // console.log(arr);
        queue2.enqueue(arr);
        i++;
        
    }
    console.log(" Person 3 ");
    queue2.printQ();
    shuffle();
    for (var j = 0; j < 9; j++)
    {
        i=0;
        var arr = [];
        arr.push(arr3[i+j*4]);
       // console.log(arr);
        queue3.enqueue(arr);
        i++;
        
    }
    console.log(" Person 4 ");
    queue3.printQ();

