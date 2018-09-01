function decToBinary(n)
{
    var prompt=require('prompt-sync')();
    // array to store binary number
    var n=prompt("enter a decimal number  ")
    var array=new Array();

 
    // counter for binary array
    var i = 0;
    while (n > 0) {
 
        // storing remainder in binary array
        array[i] = n % 2;
        n = n / 2;
        i++;
    }
 
    // printing binary array in reverse order
    for (j = i - 1; j >= 0; j--)
        console.log(array[j]);
}
decToBinary();