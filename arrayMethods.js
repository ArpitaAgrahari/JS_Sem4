// array methods for conversion

/* used for conversion of elements to string */


// let n = [2, 5, 8, 9, 6];
// console.log(n); // simple array printing 




// type conversion 

// let b = n.toString();  // b is now string
// console.log(b);




//join seperator used to append between elements like "and","-", " &" etc

// let c = n.join(" and ");  //here and is a seperator
// console.log(c);

// let c = n.join(" & ");    //here & is a seperator
// console.log(c);
// let c = n.join(" _ ");    //here _ is a seperator
// console.log(c);




/* using of pop operations - basically it is used to pop out the ****last element**** which is being added */

// let popelement = n.pop();
// console.log(n );    
// console.log("The poped element from the array is:", popelement);  //printing the pop element
// console.log("Updated array : ",n);     //printing the updated array




/* push operations - modifies the array */

// let pushElement = n.push(23);
// console.log(n);
// console.log("The pushed element is :", pushElement);  //push updates the new array length
// console.log("Updated array : ",n);              //updated array to be printed




/* shift operator - delete the *****first element***** from the array and returns it */

// let shiftElement = n.shift();
// console.log(n);
// console.log("Shifted Element : ",shiftElement);




/*unshift operator - adds the new element in the array and upadted the array length */

// let unshiftElement = n.unshift(23);
// console.log(n);
// console.log("Added element in the above array: ",unshiftElement);
// console.log("Updated array:",n);



/* delete operator - delete is a operator use to delete the particular element from the array */

/* 
let arr = [87, 45, 93, 90, 91];
console.log(arr);
console.log(arr.length)
console.log("length of array:",arr.length);
delete arr[0];
console.log(arr);   
console.log(arr.length)
console.log("length of array:",arr.length); */  /******important interview Question **** - we can notice that in updated 
                                                        array after using delete operator the length
                                                        of the updated array is still the same.
                                                        interviewer can ask tell me the updated length of the
                                                        array after suing delete[0] in gien array of length 5 .
                                                        SO the answer will be 5 only bacause delete only removes 
                                                        the element but not delete the space it aquires.
                                                   */




/* Concat is used to add multiple array in one*/

//example of 2 array concatenation
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let newArray = arr1.concat(arr2);    
// console.log("The new array is:",newArray);                                                   

//example of 3 array concatenation
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];
// let newArray = arr1.concat(arr2,arr3);    
// console.log("The new array is:",newArray);                                         



//Sort Method - used to sort alphabeticaly elements in the existing array.
// let arr = [95, 87, 223, 23, 56, 909, 123, 1000];
// let sortElement = arr.sort();
// console.log("The alphabetically sorted array is :",sortElement);



// here, we can use compare operators to sort them in ascending and descending order. 
// let compare = (a,b)=>{   ///is a function used to comapre ascending order of number it compares the 
//     // two numbers wheather it is smaller then a or b and then printing accordingky.
//     return a - b
// }
// let arr = [95, 87, 223, 23, 56, 909, 123, 1000];
// let sortElement = arr.sort(compare);
// console.log("The secending order sorted array is :",sortElement);


// let compare = (a,b)=>{   // here b - a is the differnece beacuse it return the 
//     // largest value of subtarction so that wer casn find decesdng order of aray elements.
//     return b - a           
// }
// let arr = [95, 87, 223, 23, 56, 909, 123, 1000];
// let sortElement = arr.sort(compare);
// console.log("The secending order sorted array is :",sortElement);
                                    



// reverse operator - reversew the given array

// let arr = [95, 87, 223, 23, 56, 909, 123, 1000];
// let reverseElement = arr.reverse();
// console.log("The reversed array is :", reverseElement);



/*SPLICE AND SLICE (****Important in accordance of interview and question basis) 
             Splice is used to add new items in the existing array.
             Syntax*** =  splice(startNumbers[index where u want to use splice from] , DeleteCount[elements u want to delete], NUmbers to be added)
            Slice  -SLices out the elements from the aarya and creates a new array with it .
       It is basiucalaly the subset of the existing array and creates a new array from that subset.

*/
/* it modifies the source array and make them updated and returns it */
// let num = [2,6,9,5,0,1];
// num.splice(2 , 2, 1000,1001,1002, 1003);    //here 2 isindex from where to start and 2 is number of 
//                                      // elements u wan to delete from the start index position(i.e right now 2)
//                                      // and lastly then deletes it and and next are the elements u wan to add 
                                        // and make an updated array.
// console.log(num);

//  let num = [2,6,9,5,0,1];
// let deletedElements = num.splice(2 , 2, 1000,1001,1002, 1003);    
// console.log("The deleted elements from the array after splicing is :",deletedElements);   //it returns the deleted 
//                                                                         // elements from the array and prints it
// console.log(typeof deletedElements);   //returns the data type of deleted array and returns it as oops.


//SLICE - it doesn't modify the array it just creates a new array from the existing array
// here syntax - *** (start[where to start from index], end[excluding end index it will print till then only])
// let slicedElement = num.slice(2);
// let slicedElement2 = num.slice(1,4);
// console.log("The new Generated array is :",slicedElement);
// console.log("The new Generated array from given array with satrt and end index is: ",slicedElement2);

