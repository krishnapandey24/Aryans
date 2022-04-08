
const sideBar=document.getElementById("sideBar");
const content=document.getElementById("content");
const header=document.getElementById("header");
const body=document.querySelector("body");
const title=document.getElementById("title");
const row=document.querySelectorAll("td");
const logLogo=document.querySelector(".logout>i");
const table=document.getElementById("myTable");
const form=document.getElementById("form");
const sort=document.getElementById("sort");

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
    logLogo.style.color="rgb(148, 148, 148)";

   }
}
 function redirectToUpdate(){
         title.innerText="Update";
         table.style.display="none";
         form.style.display="block";
         sort.style.display="none";
         content.style.overflowX="none";
 }
 function redirectToTable(){
    title.innerText="DashBoard";
    table.style.display="block";
    form.style.display="none";
    sort.style.display="block";
    content.style.overflowX="scroll";
}