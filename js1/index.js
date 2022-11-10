// console.log('log')
// console.info('info')
// console.error('Error')
// console.warn('Warning')
// console.assert('add'!=false)
// console.assert('add'==false)
// console.time('op')
// console.timeEnd('op')

// console.time('forLoop')
// for( let i=0; i<10; i++){
//     console.log(22)
// }
// console.timeEnd('forLoop')

// console.time('whileLoop')
// n= 10
// let i = 0;
// while(i<n){
//     console.log(i)
//     i++;
// }
// console.timeEnd('whileLoop')
const a = prompt("Enter value of A: ", 90);
console.log(a);
let write = confirm("Do you want to enter on page");
if (write) {
  document.write("The value of a ", +a);
} else {
  document.write("Maybe Later");
}
