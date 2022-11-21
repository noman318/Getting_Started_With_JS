console.log('DOM_Practice')
document.getElementsByTagName('nav')[0].firstElementChild.style.color= 'red'
document.getElementsByTagName('nav')[0].firstElementChild.style.color= 'green'
document.getElementsByTagName('nav')[0].lastElementChild.style.color= 'green'

// change background color of li items to any color
Array.from(document.getElementsByTagName('li')).forEach(element => {
    element.style.background = 'red'
});