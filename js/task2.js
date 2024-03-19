
// let ul=document.createElement("ul")
// document.body.append(ul);
// let num=Number(prompt("enter list item you want to enter"))
// console.log(typeof num);

// for(i=0;i<num;i++){
//     let li=document.createElement("li")
//     let listcontent=li.textContent=prompt(`enter list item:${i+1}`);
    
//     if (listcontent !=""){
//         ul.appendChild(li)
//     }
//     else{
//         i--
//     }

    
// }
//"table">"thead">"tr>th*3"+"tbody">"tr*3">"td*3"

//--------------------------------task 1...for table-------------------------------


// let tbody=document.getElementById("tbody");
// let row=prompt("enter no rows yoy want")
// for(i=0;i<row;i++){
//     let tr= document.createElement("tr")
//     tbody.appendChild(tr);

//     for(j=0;j<3;j++){
//         let td= document.createElement("td")
//         let tdcontent;
//         if(j==0){
//             td.textContent=i+1;
//             tr.appendChild(td)
//         }
//         else if(j==1){
//             tdcontent=td.textContent=prompt("enter name of the emp: "+(i+1))
//             if (tdcontent!=""){
//                 tr.appendChild(td);
//             }
//             else{
//                 j--;
//             }
//         }
//         else if(j==2){
//             tdcontent=td.textContent=prompt("enter name of location : "+(i+1));
//             if (tdcontent!=""){
//                 tr.appendChild(td);
//             }
//             else{
//                 j--;
//             }
//         }
//     }
// }


//--------------------------------task 2...for table-------------------------------

let tbody=document.getElementById("t-body");
let row=prompt("enter no rows yoy want")
for(i=0;i<row;i++){
    let tr= document.createElement("tr")
    tbody.appendChild(tr);

    for(j=0;j<4;j++){
        let td= document.createElement("td")
        let tdcontent;
        if(j==0){
            td.textContent=i;
            tr.appendChild(td)
        }
        else if(j==1){
            tdcontent=td.textContent=prompt("enter value for col 1: "+(i+1))
            if (tdcontent!=""){
                tr.appendChild(td);
            }
            else{
                j--;
            }
        }
        else if(j==2){
            tdcontent=td.textContent=prompt("enter value for col 2 : "+(i+1));
            if (tdcontent!=""){
                tr.appendChild(td);
            }
            else{
                j--;
            }          
        }
        else if(j==3){
            tdcontent=td.textContent=prompt("enter value for col 3 : "+(i+1));
            if (tdcontent!=""){
                tr.appendChild(td);
            }
            else{
                j--;
            }
   
        }
    }
}