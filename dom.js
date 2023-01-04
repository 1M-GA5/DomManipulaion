// EXAMINE THE DOCUMENT OBJECT

//console.dir(document);
// console.log(document.domain)
// console.log(document.url)
// console.log(document.title)
// document.title = 123;
// console.log (document.doctype);
// console.log(document.head);
// console.log(document.all)
// console.log(document.all[10])
// //console.log(forms)
// console.log(document.link);
// console.log(document.images);

//getElementById

// console.log(document.getElementById("header-title"))

// var headerTitle = document.getElementById("header-title")


// console.log(headerTitle);

// headerTitle.textContent = 'Hello Sharp';
// headerTitle.innerText = 'Good-Bye'

// console.log(headerTitle.innerText='GoodBye')

//console.log(headerTitle.innerHTML='<h3>Hello</h3>')

var header = document.getElementById('main-header')
header.style.borderBottom= 'solid 3px #000'

var item =document.getElementsByClassName('title-1')

item[0].style.fontWeight='bold'
item[0].style.color='green'