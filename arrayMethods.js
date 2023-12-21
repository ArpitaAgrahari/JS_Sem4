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





