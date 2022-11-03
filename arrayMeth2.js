let num =[222,78,89,90,56,78,34,23,]
// let num2 =[12,3,5,65,76,87]
// let num3 =[343,453,235,165,276,887]
// delete num[0]
// console.log(num)

// Sort array in ascending order.
let compare = (a,b)=>{
   return a-b
}
// let newArr=num.concat(num2,num3)
// console.log(newArr)
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
let numS = [222,78,89,90,56,78,34,23,]
let deletedVal = numS.splice(2,3,2022,1024,5068) // Arguments is splice are(1=> 2: that is index number u wanna start,2=> 3: Number of elemnents u wanna delete,3=> 3: numbers u wanna add any numbers)
// console.log(deletedVal)
console.log(numS)

let slicer = numS.slice(3)
console.log(slicer)