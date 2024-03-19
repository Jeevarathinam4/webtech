// let mydiv=document.createElement("div")
// document.body.append(mydiv)
// mydiv.textContent="this is from dom"


// let p1=document.createElement("p")
// mydiv.appendChild(p1)
// p1.textContent="this is para 1"

//how to add attributes
// direct attribute="value"

// mydiv.id="div1"
// mydiv.className="mydiv"

//set attribute method
//mydiv.setAttribute("id","mydiv");



let ename=prompt("enter the user name")
let elocation=prompt("enter the locatiopn")
let mydiv=document.createElement("div");
document.body.append(mydiv);
let h1=document.createElement("h1")
let h2=document.createElement("h1")
h1.textContent=`ename:${ename}`;
mydiv.appendChild(h1)
h2.textContent=`elocation : ${elocation}`;
mydiv.appendChild(h2)
mydiv.style.backgroundColor="red"




