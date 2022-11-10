console.log("Getting_started_Window_obj_DOM_BOM");
// console.log(document.body);
// document.body.style.backgroundColor = "aqua";
// console.log("Bowser_Object_Model");
// location.href = "https://github.com/";

// Q1 use prompt function to get input and process thr input to tell whether user can drive or not
// let age = prompt('Enter u r age')
// age = Number(parseInt(age))

// const canDrive=(age)=>{
//    return age >= 18 ? true : false
// }
// if(canDrive(age)){
//     alert('U can drive')
// }
// else{
//     alert('U can not drive')
// }

// Q2 ask user wants to run prompt again

// let runAgain = true

// const canDrive=(age)=>{
//    return age >= 18 ? true : false
// }

// while (runAgain) {
//     let aged = prompt('Enter u r age')
//     aged = Number(parseInt(aged))
//     const canDrive=(aged)=>{
//         return aged >= 18 ? true : false
//      }
//      if(aged<0){
//         console.error('Enter a valid age')
//         break;
//      }
//      if(canDrive(aged)){
//          alert('U can drive')
//      }
//      else{
//          alert('U can not drive')
//      }
//      runAgain = confirm('Do u want to start again.')
// }