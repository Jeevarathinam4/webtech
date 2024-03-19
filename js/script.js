//1.for manupulating the existing document
// with the help of methods and properties provided by DOM

//getElementByName
//getElementByClassName
//getElementByTagName()

///css Selector
//



//?getElementById
// let mydiv=document.getElementById("parent")
// console.log(mydiv)
// mydiv.style.backgroundColor="red";

// let para=document.getElementsByClassName("para");
// console.log(para.length);
// for(i=0;i<para.length;i++){
//    // para[i].style.backgroundColor="red";
   
//    para[i].textContent="this is from document"//textcontent is method to rewrite the content in the html page
// }


//thre are tree methods to rewrite the content using document
// ways to create the content from document
// 1 textContent
// 2 innertext
// 3 innerHtml

//css querrySelector
// let mydiv=document.querySelector("#parent")
// console.log(mydiv)
// mydiv.style.backgroundColor="red";

// let para =document.querySelector(".para")
// console.log(para.style.backgroundColor="blue")
//quesry selector alwayas target the first node eventhough we are using "class selector"


// let para=document.querySelector("#parent .para");
// console.log(para.style .backgroundColor="purple")

let para=document.querySelectorAll("#parent .para");
console.log(para[0]);

// let mydiv=document.getElementById("parent")
// console.log(mydiv)
// mydiv.style.border="1px solid black";
// mydiv.firstChild.textContent="this is first child"
// mydiv.firstElementChild.textContent="this first element child from dom"


// let mydiv=document.getElementById("parent");
// mydiv.nextElementSibling.children[1].style .backgroundColor="red";

// let para=document.getElementsByClassName="para";
// console.log(( para[1].parentElement)
// )