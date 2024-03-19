let myheader=document.createElement("header")
let mynav=document.createElement("nav")
let myMain=document.createElement("main")
let myimg=document.createElement("img")
let myvideo=document.createElement("iframe")
//let myvideo=document.createElement("video")
let myfooter=document.createElement("footer")


myMain.setAttribute("id","pqr")

document.body.append(myheader)
document.body.append(mynav)
document.body.append(myMain)
myMain.appendChild(myimg)
myMain.appendChild(myvideo)
document.body.append(myfooter)

//header details
myheader.textContent="this my heading"
myheader.style .backgroundColor="rgb(35,47,62)";
myheader.style.border="1px solid black";
myheader.style.color="white";
myheader.style.textAlign="center"


//for navigation
function navelements(x){for(i=x;i<=4;i++){
    let navElements=document.createElement("a")
    mynav.appendChild(navElements);
    navElements.style.display="flex"
    navElements.style.display="inline-block"
    navElements.style.height="20px"
    navElements.style.width="320px"
   navElements.style.justifyContent="center"
   navElements.style.justifyContent="space-evenly"
   navElements.style.alignItems="flex-start"
    


}}
navelements(1)

mynav.setAttribute("id","navig")


let Navig=document.getElementById("navig");
Navig.children[0].textContent="home"
Navig.children[0].setAttribute("href","#5")
Navig.style.csstext=`display:block;textalign:ceter`
Navig.children[1].textContent="content "
Navig.children[1].setAttribute("href","#6")
Navig.children[2].textContent="about "
Navig.children[2].setAttribute("href","#7")
Navig.children[3].textContent="footer"
Navig.children[3].setAttribute("href","#8")

mynav.style.border="1px solid black"
mynav.style.height="20px"
mynav.style.padding=("5px")
mynav.style.marginLeft="0px"
mynav.style.textAlign="center"
mynav.style.borderSpacing="30px"

function navstyle(e) {for (i=e;i<=4;i++){
    
    //Navig.children[0].style.border="1px solid black"
    Navig.children[0].style.marginLeft="0px"
   // Navig.children[1].style.border="1px solid black"
    Navig.children[1].style.marginLeft="50px"
   // Navig.children[2].style.border="1px solid black"
    Navig.children[2].style.marginLeft="50px"
   // Navig.children[3].style.border="1px solid black"
    Navig.children[3].style.marginLeft="50px"
    

}}
navstyle(0)

mynav.style.backgroundColor="skyblue"
// let navgap=document.getElementById(Navig)
// navgap.style.gap="20px"
// navgap.style.textAlign="center"
// Navig.style.cssText=`display:flex;justify-content:space-evenly`

//main content
myimg.src="https://cdn.pixabay.com/photo/2023/09/11/16/44/roses-8247285_640.jpg"
myimg.setAttribute("height","500px")
myimg.setAttribute("width","725px")
myvideo.src="https://cdn.pixabay.com/vimeo/868916307/cosmos-182517.mp4?width=1280&hash=dc0eca362d0bde4ea9a41dae1de2c07ab77d0ac4"
//myvideo.setAttribute="controls"
myvideo.setAttribute("height","500px")
myvideo.setAttribute("width","720px")






//for content
// function divcontent(b){
//     for(i=b;i<=9;i++){
//         let mydiv=document.createElement("div")
//         myMain.appendChild(mydiv)
//         mydiv.setAttribute("id",b++)
//         mydiv.setAttribute("width","100px")
//         mydiv.style.border="1px solid black"
//         backgroundColor="red"
//         mydiv.textContent="jhgfsgdsyy"
        
//     }

// }
// divcontent(5)

// let accesingdiv=document.getElementById("pqr")
// console.log(accesingdiv)
// console.log(accesingdiv.children[2])
// accesingdiv.children[2].style.height="200px"
// accesingdiv.children[3].style.height="200px"
// accesingdiv.children[4].style.height="200px"
// accesingdiv.children[5].style.height="200px"
// accesingdiv.children[6].style.height="200px"





// accesingdiv.children[2].setAttribute=("id","5")
// accesingdiv.children[3].setAttribute=("id","6")
// accesingdiv.children[4].setAttribute=("id","7")
// accesingdiv.children[5].setAttribute=("id","8")

//------------------------------------------

// let a=document.querySelector("#navig")
// console.log(a)
// a.nextSibling.backgroundColor="red"


myMain.style.backgroundColor="violet"
myMain.style.display="flex"
myMain.style.height="100%"
myMain.style.width="100%"
myMain.style.justifyContent="center"
myMain.style.justifyContent="space-evenly"


//---------------------------------------------------------------

//for footer
myfooter.textContent="*************thank you****************";
myfooter.style.border="1px solid black"
myfooter.style.backgroundColor="rgb(19,26,34)"
myfooter.style.height="30px";
myfooter.style.textAlign="center"
myfooter.style.color="white";
