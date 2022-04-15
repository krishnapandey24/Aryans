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
const alter=document.querySelectorAll("tbody >tr:nth-child(even)>td");
const tip=document.querySelectorAll(".tipText");
const next=document.querySelectorAll("#editForm>input");
const loaderback=document.getElementById("loaderback");
const loader=document.getElementById("loader");
const options=["name","placement_ratio","average_package","cut_off","ranking"]


function changeMode(){
   const dark=document.querySelector("#dark:checked")!= null;
   if(dark){
       header.style.backgroundColor="rgb(23,27,35)";
       sideBar.style.backgroundColor="rgb(23,27,35)";
       sideBar.style.boxShadow="none"
       sideBar.style.border=" 2px solid rgba(252, 250, 250, 0.422)";
       content.style.backgroundColor=" rgba(25, 25, 25, 0.729)";
       content.style.border="2px solid rgb(148, 148, 148)";
       body.style.color="white";
       body.style.background="rgb(12,16,23)";
       var tbl = document.getElementById("myTable");
       var numRows = tbl.rows.length;
       for (var i = 1; i < numRows; i++) {
           var cells = tbl.rows[i].getElementsByTagName('td');
           for (var ic=0,it=cells.length;ic<it;ic++) {
               cells[ic].style.backgroundColor="rgb(12,16,23)";
               cells[ic].style.color="rgb(139,149,159)";
           }
       }
    
        
   }
   else{
    header.style.backgroundColor="rgb(67, 118, 190";
    sideBar.style.backgroundColor="rgba(221, 221, 221, 0.729)";
    sideBar.style.border=" 2px solid rgba(252, 250, 250, 0.422)";
    content.style.backgroundColor=" rgba(221, 221, 221, 0.729)";
    content.style.border="2px solid rgba(252, 250, 250, 0.422)";
    body.style.color="black";
    body.style.background="url("+"'../static/back.jpg'"+")";
    var tbl = document.getElementById("myTable");
    var numRows = tbl.rows.length;
    for (var i = 1; i < numRows; i++) {
        var cells = tbl.rows[i].getElementsByTagName('td');
        var even= i%2==0 ? true : false
        for (var ic=0,it=cells.length;ic<it;ic++) {
            cells[ic].style.backgroundColor=even ?"rgb(205, 205, 205)" : "rgb(230, 230, 230)";
        }
    }
   }
}

let ridd;
function redirectToUpdate(rid){
         title.innerText="Update";
         table.style.display="none";
         eform.style.display="grid";
         content.style.overflowX="none";
         sort.style.display="none";
         document.getElementById("name_edit").value="";
         document.getElementById("address_edit").value="";
         document.getElementById("pr_edit").value="";
         document.getElementById("ap_edit").value="";
         document.getElementById("cutoff_edit").value="";
         document.getElementById("url_edit").value="";
         document.getElementById("ranking_edit").value="";
         getCollegesById(rid)
         ridd=rid;
         document.getElementById("updatebtn").onclick=function()
         {
             editCollege(ridd);
         }

 }

 function deleteCollege(id,position){
    if(deleteData(id)){
        document.getElementById("myTable").deleteRow(position+1)
    }

 }

 function redirectToCreate(){
    console.log("createding")
    title.innerText="Add Data";
    console.log("done")
    table.style.display="none";
    cform.style.display="grid";
    eform.style.display="none";
    sort.style.display="none";
    content.style.overflowX="none";
    document.getElementById("name").value="";
    document.getElementById("address").value="";
    document.getElementById("pr").value="";
    document.getElementById("ap").value="";
    document.getElementById("cutoff").value="";
    document.getElementById("url").value="";
    console.log("setting")
    document.getElementById("autonomous_yes1").checked = true;
    console.log("setted")
    document.getElementById("ranking").value="";
    document.getElementById("addbtn").onclick=function()
    {
        addCollege();
    }
}
 function redirectToTable(){
    sortCollege()
    title.innerText="DashBoard";
    sort.style.display="block";
    table.style.display="block";
    eform.style.display="none";
    cform.style.display="none";
    content.style.overflowX="scroll";
}

function startLoading(){
	loaderback.setAttribute('class',"loaderback");
	loader.setAttribute('class',"bubbles");
}

function stopLoading(){
	loaderback.setAttribute('class',"abc");
	loader.setAttribute('class',"abc");
}

function sortCollege(){
    var sortOptions= document.getElementById("select");
    var sortASC = document.getElementById("order_asc").checked;
    var index=sortOptions.selectedIndex
    if(index==0){
        getCollegesWithoutSort()
    }else{
        getColleges(options[index-1],sortASC ? "ASC" : "DESC")
    }
    console.log(`selected option ${options[sortOptions.selectedIndex]} sortASC ${sortASC}`)
}















