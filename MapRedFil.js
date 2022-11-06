let arr = [34,78,23,56,89,50]
// console.log(arr)

// map method is similar to forEach Loop but in Map we creates a new Array
// If we run the same condition that we want to run in filter it will return boolean value whether the condition is true or not the output of 
// retun val>50 is
// [ false, true, false, true, true, false ]
let a = arr.map((val,ind, array)=>{
    // console.log(val,ind, array)
    return val+10
})
// console.log(a)

// But filter will return filter out from the array elememts whether the condition is true or not if it's true than it will show the values that are greater than 50
let fil = arr.filter((val)=>{
    // if we want the values that are greater than 100 which is not in the array than it will give us an enpty array
    // return val>100
    // It will give us an empty array because ther is no value greater than 100
    return val>50
})
// console.log(fil)

// Reduce Method 
// In the below given case the reduce method will start addinng the numbers from start
// so return h1 + h2 will
// first 1 + 2 = 3
// than 3 + 3 = 6
// than 6 + 4 = 10
// than 10 + 5 = 15
// than 15 + 6 = 21
let arr2=[1,2,3,4,5,6]
let red = arr2.reduce((h1, h2)=>{
    return h1+h2
})
console.log(red)