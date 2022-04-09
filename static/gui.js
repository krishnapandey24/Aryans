
const sideBar=document.getElementById("sideBar");
const content=document.getElementById("content");
const header=document.getElementById("header");
const body=document.querySelector("body");
const title=document.getElementById("title");
const row=document.querySelectorAll("td");
const logLogo=document.querySelector(".logout>i");
const table=document.getElementById("myTable");
const eform=document.getElementById("editForm");
const cform=document.getElementById("createForm");
const sort=document.getElementById("sort");
const alter=document.querySelectorAll("tr:nth-child(even)>td");
const tip=document.querySelectorAll(".tipText");


function changeMode(){
   const dark=document.querySelector("#dark:checked")!= null;
   if(dark){
       header.style.backgroundColor=" rgb(38, 65, 102)";
       sideBar.style.backgroundColor="rgba(25, 25, 25, 0.729)";
       sideBar.style.border=" 2px solid rgb(133, 133, 133)";
       content.style.backgroundColor=" rgba(25, 25, 25, 0.729)";
       content.style.border="2px solid rgb(148, 148, 148)";
       body.style.color="white";
       title.style.textShadow="0px 2px 10px black";
       body.style.background="url("+"'blackback.jpg'"+")";
         row.forEach(element => {
           element.style.backgroundColor="rgb(95, 95, 95)";
           element.style.borderBottom="4px solid rgba(25, 25, 25, 0.729)";
       });
        alter.forEach(element=>{
            element.style.backgroundColor="rgb(77, 76, 76)";
        });
        tip.forEach(element => {
            element.style.backgroundColor="rgb(26, 26, 26)";
        });
       logLogo.style.color="white";
   }
   else{
    header.style.backgroundColor="rgb(67, 118, 190";
    sideBar.style.backgroundColor="rgba(221, 221, 221, 0.729)";
    sideBar.style.border=" 2px solid rgba(252, 250, 250, 0.422)";
    content.style.backgroundColor=" rgba(221, 221, 221, 0.729)";
    content.style.border="2px solid rgba(252, 250, 250, 0.422)";
    body.style.color="black";
    title.style.textShadow="0px 2px 10px rgb(91, 87, 87)";
    body.style.background="url("+"'back.jpg'"+")";
    row.forEach(element => {
        element.style.backgroundColor="rgb(230, 230, 230)";
        element.style.borderBottom="4px solid rgb(221, 221, 221)";
    });
    alter.forEach(element=>{
        element.style.backgroundColor="rgb(225, 222, 222)";
    });
    tip.forEach(element => {
        element.style.backgroundColor="rgb(103, 103, 103)";
    });
    logLogo.style.color="rgb(148, 148, 148)";
   }
}
 function redirectToUpdate(){
         title.innerText="Update";
         table.style.display="none";
         eform.style.display="block";
         sort.style.display="none";
         content.style.overflowX="none";
 }
 function redirectToCreate(){
    title.innerText="Add Data";
    table.style.display="none";
    cform.style.display="block";
    eform.style.display="none";
    sort.style.display="none";
    content.style.overflowX="none";
}
 function redirectToTable(){
    title.innerText="DashBoard";
    table.style.display="block";
    eform.style.display="none";
    cform.style.display="none";
    sort.style.display="block";
    content.style.overflowX="scroll";
}