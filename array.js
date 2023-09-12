// An array is a data structure that can hold a collection of values
// Arrays can contain a mix of different data types. You can store strings, booleans,
// numbers or even objects all in the same array
//Arrays are resizeable. You don't have to declare the size of an array before creating it
// JavaScript arrays are zeo-indexed and the insertion order is maintained

// arrays are iterables. They can be used with a for loop

const arr = [1, 2, 3, 'Samson'];
//These are the basic of array methods

// to add value to the end of array use push() method
arr.push(4)
//if you want to add value to the beginning of the array use unshift() method
arr.unshift(0)
//to remove the element at the end of the array use pop() method
arr.pop()
//to remove the element at the beginning of the array use shift() method
arr.shift()
//to iterates the all elements of the array use for loop

//------------------------------//
//another method -> map, filter, concat, slice, and splice

for(const item of arr){
    console.log(item)
}


