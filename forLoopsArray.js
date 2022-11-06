let num = [9,6,8,7,4]
// for (let i=0; i<num.length; i++){
//     console.log(num[i])
// }

// ForEach loops noramlly used for Arrays
// ForEach is used when we have to perform an operastion on an element
num.forEach((ele, ind, arr)=>{
    console.log(ele*ele, ind, arr)
    // console.log(ele*ele)
})

// Convert any collections into Array
// let name = 'Shaikh_Noman'
// let x=Array.from(name)
// console.log(typeof x)
// console.log(x)

// For of Loops for Arrays
for(let i of num){
    // console.log(i)
}

// For in Loops for Arrays
for(let i in num){
    // console.log(num[i])
}