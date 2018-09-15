"use strict"
var fs = require('fs')
module.exports =
{
     /**
      *@description program to sort the array elements in unordered list 
      */
    unorderedlist : function(array,word)
    {
    class Node//create a node 
    {
        // constructor
        constructor(element)
        {
            this.element = element;
            this.next = null
        }
    } 
    class LinkedList // create a linked list and initialize head and size
    {
        constructor()
        {
            this.head == null;
            this.size == 0;
        }
        /**
         * 
         * @param  element 
         */
        indexOf(element)
{
    var count = 0;
    var current = this.head;
 
    // iterae over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }
 
    // not found
    return -1;
}
    isEmpty()
    {
        return this.size == 0;
    }
    size_of_list()
    {
        console.log(this.size);
    }
    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
    add(element)
    {
        // creates a new node
        var node = new Node(element);
     
        // to store current node
        var current;
     
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
     
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, index)
    {
        if (index > 0 && index > this.size)
            return false;
        else 
        {
            // creates a new node
            var node = new Node(element);
            var curr, prev;
     
            curr = this.head;
     
            // add the element to the
            // first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
     
                // iterate over the list to find
                // the position to insert
                while (it < index)
                 {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index)
    {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
     
            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } 
            else 
            {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
     
                // remove the element
                prev.next = curr.next;
            }
            this.size--;
     
            // return the remove element
            return curr.element;
        }
    }
    removeElement(element)
    {
        var current = this.head;
        var prev = null;
     
        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    sortList() {

        var swap;
        var current = this.head;
        var current1 = current.next;
        var n = this.size;

        for (let i = 0; i < n; i++) {

            for (let j = 0; j < n - i - 1; j++) {

                if (parseInt(current1.element) < parseInt(current.element)) {

                    swap = current.element;

                    current.element = current1.element;

                    current1.element = swap;

                }

                if (current1.next != null) {

                    current = current1;

                    current1 = current1.next;

                }

            }

            current = this.head;

            current1 = current.next;
        }

        console.log('List sorted');
    }
    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
        return str;
    }
    }
      // creating an object for the
    // Linkedlist class
    var ll = new LinkedList();
    for ( var i =0; i<array.length; i++)
    {
        ll.add(array[i])
    }
    if(ll.indexOf(word)==-1)
    {
        ll.add(word)
    }    
    else{
        ll.removeElement(word)
    }
    ll.sortList()
    var res = ll.printList() 
    
    fs.writeFile('/home/abc/VSC code/VishnuProjects/datastuctures/main/data.txt',res,function(err){
        if(err)throw err
    })
    //ll.printList();
},

/**
 * @description  Read  a  List   of   Numbers   from   a   file   and   arrange   it   ascending   Order   in   a 
Linked   List.   Take   user   input   for   a   number,   if   found   then   pop   the   number   out   of   the 
list   else   insert   the   number   in   appropriate   position
 */
/**
 * @param array
 * @param number
 */
   orderedList : function(array, number)
   {
    class Node//create a node 
    {
        // constructor
        constructor(element)
        {
            this.element = element;
            this.next = null
        }
    } 
    class LinkedList // create a linked list and initialize head and size
    {
        constructor()
        {
            this.head == null;
            this.size == 0;
        }
        /**
         * 
         * @param  element 
         */
        indexOf(element)
{
    var count = 0;
    var current = this.head;
 
    // iterae over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }
 
    // not found
    return -1;
}
    isEmpty()
    {
        return this.size == 0;
    }
    size_of_list()
    {
        console.log(this.size);
    }
   
    add(element)
    {
        // creates a new node
        var node = new Node(element);
     
        // to store current node
        var current;
     
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
     
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, index)
    {
        if (index > 0 && index > this.size)
            return false;
        else 
        {
            // creates a new node
            var node = new Node(element);
            var curr, prev;
     
            curr = this.head;
     
            // add the element to the
            // first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
     
                // iterate over the list to find
                // the position to insert
                while (it < index)
                 {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index)
    {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
     
            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } 
            else 
            {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
     
                // remove the element
                prev.next = curr.next;
            }
            this.size--;
     
            // return the remove element
            return curr.element;
        }
    }
    removeElement(element)
    {
        var current = this.head;
        var prev = null;
     
        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    sortList() {

        var swap;
        var current = this.head;
        var current1 = current.next;
        var n = this.size;

        for (let i = 0; i < n; i++) {

            for (let j = 0; j < n - i - 1; j++) {

                if (parseInt(current1.element) < parseInt(current.element)) {

                    swap = current.element;

                    current.element = current1.element;

                    current1.element = swap;

                }

                if (current1.next != null) {

                    current = current1;

                    current1 = current1.next;

                }

            }

            current = this.head;

            current1 = current.next;
        }

        console.log('List sorted');
    }
    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
        return str;
    }
    }
      // creating an object for the
    // Linkedlist class
    var ll = new LinkedList();
    for ( var i =0; i<array.length; i++)
    {
        ll.add(array[i])
    }
    if(ll.indexOf(number)==-1)
    {
        ll.add(number)
    }    
    else{
        ll.removeElement(number)
    }
    ll.sortList()
    var res = ll.printList() 
    fs.writeFile('/home/abc/VSC code/VishnuProjects/datastuctures/main/integerdata.txt',res,function(err){
        if(err)throw err
    })

// console.log(array)
// this.unorderedlist(array,number)

   },
   /**
    * @description Take   an   Arithmetic   Expression   such   as 
(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)   where   parentheses   are   used   to   order   the 
performance   of   operations.   Ensure   parentheses   must   appear   in   a   balanced 
fashion
    */
balance : function(expr)
   {
   class Stack {
 
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }
    push(element)
{
    // push element into the items
    this.items.push(element);
}
pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}
// peek function
peek()
{
    // return the top most element from the stack
    // but doesn't delete it.
    return this.items[this.items.length - 1];
}
isEmpty()
{
    // return true if stack is empty
    return this.items.length == 0;
}
// printStack function
printStack()
{
    var str = ""; 
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}
}
var stack = new Stack()
var count = 0 , flag =0, a=0;
for (var i=0; i<expr.length; i++)
    {
        if (expr[i]=='(' ) 
        {
            // Push the element in the stack
            stack.push('(');
            count ++;
        }
        else if(expr[i]==')')
        {
            stack.pop()
            flag++;
        }
    }
 if(count == flag)
 {
     console.log(' Balanced ' )
 }
 else
 {
     console.log(" UnBalanced ")
 }
},

/**
 * @description  Create   a   Program   which   creates   Banking   Cash   Counter   where   people 
come   in   to   deposit   Cash   and   withdraw   Cash.   Have   an   input   panel   to   add   people 
to   Queue   to   either   deposit   or   withdraw   money   and   dequeue   the   people.   Maintain 
the   Cash   Balance
 */

cashCounter : function()
{
    class Queue
{
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }
    enqueue(element)
    {    
        // adding element to the queue
        this.items.push(element);
    }
    dequeue()
{
    // removing element from the queue
    // returns underflow when called 
    // on empty queue
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}
front()
{
    // returns the Front element of 
    // the queue without removing it.
    if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}
isEmpty()
{
    // return true if the queue is empty.
    return this.items.length == 0;
}
printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
length()
{
    return this.items.length;
}
}
/**
 * @param minamount
 * @param customers
 */
var queue = new Queue();// create queue object
var minamount=3000;//initialize minimum amount
var prompt = require('prompt-sync')()
var customers = prompt("Enternumber of customers : ");
for(var i=0; i<customers; i++)
{
    queue.enqueue(i);
}
//console.log(q.len());

while(queue.length())
{
    var option= prompt("Enter 1 to withdraw and 2 to deposit amount: ");
    if(option==1) 
    {
        var withdrawamount=prompt("Enter the amount to be withdrawn: ");
        if(withdrawamount>minamount)
        {
            console.log("insufficient balance")
            
        }
        else
        {
            var balance=minamount-withdrawamount;
            console.log("available balanace= "+balance);
        }
    }
    else if(option==2)
    {
        var dep_amt=prompt("Enter the amount to be deposited: ");
        balance=Number(minamount)+Number(dep_amt);
        console.log("available balanace= "+balance);
    }
    
    queue.dequeue();
 

   }
 },
 /**
  * @description  A   palindrome   is   a   string   that   reads   the   same   forward   and   backward,   for 
example,   radar,   toot,   and   madam.   We   would   like   to   construct   an   algorithm   to 
input   a   string   of   characters   and   check   whether   it   is   a   palindrome
  */
 /**
  * @param word
  */

 palindromechecker:function(word)
    {
        function Deque()
{
 this.stac=new Array();
 this.popback=function(){
  return this.stac.pop();
 }
 this.pushback=function(item){
  this.stac.push(item);
 }
 this.popfront=function(){
  return this.stac.shift();
 }
 this.pushfront=function(item){
  this.stac.unshift(item);
 }
 this.printQue=function(){
     var str='';
     for(var i=0;i<this.stac.length;i++)
     {
         str+=this.stac[i]+" ";
     }
     return str;
}
this.dqsise=function(){
    return this.stac.length;
}
}
        var deque=new Deque();//create a deque object
        var a=[];
        //str=str.trim();
        a=word.toLowerCase().split('');
        for(var i=0;i<a.length;i++)
            {
                deque.pushback(a[i]);
            }
            console.log(deque.printQue());
          var flag=true;
          if(deque.dqsise()%2==0)
          {
              while(deque.dqsise()>0)
              {
                  var a=deque.popfront();
                  var b=deque.popback();
                  if(a!=b)
                  {
                      flag=false;
                  }
              }
          }
        //   else
        //   {
        //       while(deque.dqsise()>1)
        //       {
        //         var a=deque.popfront();
        //         var b=deque.popback();
        //         if(a!=b)
        //         {
        //             flag=false;
        //         }
        //       }
        //   }
                if(flag==true)
                {
                console.log("pallindrome")
                process.exit();
                }
                else
                {
                    console.log("not a pallindrome");
                    process.exit();
                }

    },
    /**
     * @description  Create   a   Slot   of   10   to   store   Chain   of   Numbers   that   belong   to   each   Slot   to 
efficiently   search   a   number   from   a   given   set   of   number
     */
    hashing: function(data,num)
    {
    class Node {
        // constructor
        constructor(element)
        {
            this.element = element;
            this.next = null
        }
    } 
    class LinkedList
    {
        constructor()
        {
            this.head == null;
            this.size == 0;
        }
        indexOf(element)
{
    var count = 0;
    var current = this.head;
 
    // iterae over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }
 
    // not found
    return -1;
}
    isEmpty()
    {
        return this.size == 0;
    }
    size_of_list()
    {
        console.log(this.size);
    }
    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
    add(element)
    {
        // creates a new node
        var node = new Node(element);
     
        // to store current node
        var current;
     
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
     
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, index)
    {
        if (index > 0 && index > this.size)
            return false;
        else 
        {
            // creates a new node
            var node = new Node(element);
            var curr, prev;
     
            curr = this.head;
     
            // add the element to the
            // first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
     
                // iterate over the list to find
                // the position to insert
                while (it < index)
                 {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index)
    {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
     
            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } 
            else 
            {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
     
                // remove the element
                prev.next = curr.next;
            }
            this.size--;
     
            // return the remove element
            return curr.element;
        }
    }
    removeElement(element)
    {
        var current = this.head;
        var prev = null;
     
        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
        return str;
    }
    }
    var prompt=require('prompt-sync')();
    var arr = new Array(10),arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[],arr8=[],arr9=[],arr10=[],arr11=[];
    var list = new LinkedList();
    var hash1 = fs.readFileSync('hash.txt'); //reading the hash.txt file into this programe
    hash1 = hash1.toString().split(" ");  //convert string into an array
    var hash = []
    for(var i = 0 ; i < hash1.length; i++)
    {
        if(hash1 != '')

        {
            hash.push(hash1[i]);
        }
    }
    var arr = Array.from(data);
    arr.sort();
    console.log(arr);
    // var val = prompt("Please enter a value to search: ");
    for(var i=0;i<data.length;i++)
    {
        list.add(data[i]);
    }
    list.printList();
    var result = list.indexOf(num);
    if(result == -1)
    {
        console.log("Element not found!!");
       list.add(num);
       hash.push(num)
    }
    else
    {
        console.log("Element found!!");      
        list.removeElement(num);
        hash.pop(num)
    }
        num = list.printList();
        for(var j=0; j<data.length;j++)
        {
           var res = parseInt(data[j])%parseInt(data.length);
            switch(parseInt(res))
            {
                case 0:
                arr1.push(data[j]);
                break;

                case 1:
                arr2.push(data[j]);
                break;

                case 2:
                arr3.push(data[j]);
                break;

                case 3:
                arr4.push(data[j]);
                break;

                case 4:
                arr5.push(data[j]);
                break;

                case 5:
              
                arr6.push(data[j]);
                break;

                case 6:
                arr7.push(data[j]);
                break;

                case 7:
                arr8.push(data[j]);
                break;

                case 8:
                arr9.push(data[j]);
                break;

                case 9:
                arr10.push(data[j]);
                break;

                case 10:
                arr11.push(data[j]);
                break;

            }
        }
        var array=[];
        array.push(arr1);
        array.push(arr2);
        array.push(arr3);
        array.push(arr4);
        array.push(arr5);
        array.push(arr6);
        array.push(arr7);
        array.push(arr8);
        array.push(arr9);
        array.push(arr10);
        array.push(arr11);
       
        for( var k=0;k<array.length;k++)
        {
            console.log("Slot "+k+" --> "+array[k].join('-->'));
        }
    }
}