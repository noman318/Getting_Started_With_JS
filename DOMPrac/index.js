console.log("Walking to DOM");
// document.getElementsByClassName("li_1")[2].style.color = "red"; it works in console
console.log(document.body.firstChild);
console.log(document.body.lastChild);

// This will return the output as an Object
console.log(document.body.childNodes);
// Now all child Nodes are in Array form
let arr = Array.from(document.body.childNodes);
console.log(arr);
// Now we can perform array operations on it.
console.log(arr.length);
