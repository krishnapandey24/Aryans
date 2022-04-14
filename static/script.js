// import fetch from "node-fetch";

const api_url = "http://127.0.0.1:5000/colleges/sorted"


getColleges("college_id","ASC")

function loadData(records = []) {
	var table_data = "";
	    table_data=`
		<thead>
            <tr> 
                <th><div class="arrow down" onclick="getColleges('college_id','DESC')"></div><div class="arrow up" onclick="getColleges('college_id','ASC')"></div>Id</th>
                <th><div class="arrow down" onclick="getColleges('name','DESC')"></div><div class="arrow up" onclick="getColleges('name','ASC')"></div>Name</th>
                <th><div class="arrow down" onclick="getColleges('address','DESC')"></div><div class="arrow up" onclick="getColleges('address','ASC')"></div>Address</th>
                <th><div class="arrow down" onclick="getColleges('placement_ratio','DESC')"></div><div class="arrow up" onclick="getColleges('placement_ratio','ASC')"></div>Placement Ratio</th>
                <th><div class="arrow down" onclick="getColleges('average_pakage','DESC')"></div><div class="arrow up" onclick="getColleges('average_pakage','ASC')"></div>Average Pakage</th>
                <th><div class="arrow down" onclick="getColleges('cut_off','DESC')"></div><div class="arrow up" onclick="getColleges('cut_off','ASC')"></div>Cutoff</th>
                <th><div class="arrow down" onclick="getColleges('website','DESC')"></div><div class="arrow up" onclick="getColleges('website','ASC')"></div>Website</th>
                <th><div class="arrow down" onclick="getColleges('autonomous','DESC')"></div><div class="arrow up" onclick="getColleges('autonomous','ASC')"></div>Is Autonomus</th>
                <th><div class="arrow down" onclick="getColleges('ranking','DESC')"></div><div class="arrow up" onclick="getColleges('ranking','ASC')"></div>Rank</th>
                <th >Action</th>

            </tr>
            </thead>`;
	for(let i=0; i<records.length; i++) {
		table_data += `<tr>`;

		table_data += `<td>${records[i][0]}</td>`;
		table_data += `<td class="toolTip">${records[i][1]}  <span class="tipText">${records[i][1]}</span></td>`;
		table_data += `<td class="toolTip">${records[i][2]}  <span class="tipText">${records[i][2]}</span></td>`;
		table_data += `<td>${records[i][3]}</td>`;
		table_data += `<td>${records[i][4]}</td>`;
		table_data += `<td>${records[i][5]}</td>`;
		table_data += `<td class="toolTip"><a href="${records[i][6]}">${records[i][6]}</a><span class="tipText">${records[i][6]}</span></td>`;
		table_data += `<td>${records[i][7]}</td>`;
		table_data += `<td>${records[i][8]}</td>`;
		table_data += `<td><i class="fa fa-edit" style="font-size:28px;color:rgb(71, 105, 224)" onclick="redirectToUpdate(${records[i][0]})"></i> &nbsp;&nbsp;&nbsp;
		<i class="fa fa-trash-o" style="font-size:28px;color:red" onclick="deleteData(${records[i][0]})"></i></td>`;
		
		// table_data += `<td>`;
		// table_data += `<a href="edit.html?id=${records[i][0]}"><button class="btn btn-primary">Edit</button></a>`;
		// table_data += '&nbsp;&nbsp;';
		// table_data += `<button class="btn btn-danger" onclick=deleteData('${records[i][0]}')>Delete</button>`;
		// table_data += `</td>`;
		table_data += `</tr>`;
	}
	document.getElementById("myTable").innerHTML = table_data;

	loaderback.setAttribute('class',"abc");
	loader.setAttribute('class',"abc");
}

function getColleges(sortBy,sortType) {
    loaderback.setAttribute('class',"loaderback");
	loader.setAttribute('class',"bubbles");

	fetch(`${api_url}?sortBy=${sortBy}&sortType=${sortType}`)
	.then((response) =>response.json())
	.then((data) => loadData(data))	
	
	// loaderback.setAttribute('class',"abc");
	// loader.setAttribute('class',"abc");
	
}


function getCollegesById(id) {
	
	fetch(`${api_url}?id=${id}`)
	.then((response) => response.json())
	.then((data) => { 
		console.log(data);
		document.getElementById("id").value = data[0][0];
		document.getElementById("name").value = data[0][1];
		document.getElementById("address").value = data[0][2];
		document.getElementById("pr").value = data[0][3];
		document.getElementById("ap").value = data[0][4];
		document.getElementById("cutoff").value = data[0][5];
		document.getElementById("url").value = data[0][6];
		document.getElementById("autonomous").value = data[0][7];
		document.getElementById("ranking").value = data[0][8];
		document.getElementById("rating").value = data[0][9];
	})

}

function addCollege(){
	loaderback.setAttribute('class',"loaderback");
	loader.setAttribute('class',"bubbles");

	var id =document.getElementById("id").value;
    var name= document.getElementById("name").value;
    var address= document.getElementById("address").value;
    var placementRatio= document.getElementById("pr").value;
    var aveargePackage= document.getElementById("ap").value;
    var cutoff= document.getElementById("cutoff").value;
    var url= document.getElementById("url").value;
    var autonomous= document.getElementById("autonomous").value;
    var ranking= document.getElementById("ranking").value;
    // var rating= document.getElementById("rating").value;
	
	// data = {
    //     name: name,
    //     address: address,
    //     placementRatio: placementRatio,
    //     aveargePackage: aveargePackage,
    //     cutoff: cutoff,
    //     websiteUrl: url,
    //     autonomous: autonomous,
    //     ranking: ranking,
    //     rating: rating
    // };
	
	// fetch(url, {
	// 	method: "POST",
	// 	headers: {
	// 	  'Accept': 'application/json',
	// 	  'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify(data)
	// })
	// .then((response) => response.json())
	// .then((data) => { 
	// 	console.log(data); 
	// 	window.location.href = "index.html";
	// })

	fetch(`/colleges/add?id=${id}&name=${name}&address=${address}&placementRatio=${placementRatio}&aveargePackage=${aveargePackage}&cutoff=${cutoff}&url=${url}&autonomous=${autonomous}&ranking=${ranking}`)
	.then((response) =>{
	if(response.ok){
		response.json()
	}else{
	   loaderback.setAttribute('class',"abc");
	   loader.setAttribute('class',"abc");
	   redirectToTable();
	   alert("something went wrong");
	}})
	.then((data) => { 
		// console.table(data);
		// window.location.href = "index.html";
		getColleges("college_id","ASC");

	});
    
		redirectToTable();
}


function editCollege(id){
	loaderback.setAttribute('class',"loaderback");
	loader.setAttribute('class',"bubbles");

    var name= document.getElementById("cname").value;
    var address= document.getElementById("caddress").value;
    var placementRatio= document.getElementById("cpr").value;
    var aveargePackage= document.getElementById("cap").value;
    var cutoff= document.getElementById("ccutoff").value;
    var url= document.getElementById("curl").value;
    var autonomous= document.getElementById("cautonomous").value;
    var ranking= document.getElementById("cranking").value;
    // var rating= document.getElementById("crating").value;
	
	// data = {
    //     name: name,
    //     address: address,
    //     placementRatio: placementRatio,
    //     aveargePackage: aveargePackage,
    //     cutoff: cutoff,
    //     websiteUrl: url,
    //     autonomous: autonomous,
    //     ranking: ranking,
        
    // };

	// fetch("http://127.0.0.1:5000/colleges/update", {
	// 	method: "GET",
	// 	headers: {
	// 	  'Accept': 'application/json',
	// 	  'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(data)
	// })
	// .then((response) => response.json())
	// .then((data) => { 
	// 	console.table(data);
	// 	window.location.href = "index.html";
	// })
	fetch(`/colleges/update?id=${id}&name=${name}&address=${address}&placementRatio=${placementRatio}&aveargePackage=${aveargePackage}&cutoff=${cutoff}&url=${url}&autonomous=${autonomous}&ranking=${ranking}`)
	.then((response) =>{
		if(response.ok){
			response.json()
		}else{
		   loaderback.setAttribute('class',"abc");
		   loader.setAttribute('class',"abc");
		   redirectToTable();
		   alert("something went wrong");
		}})
	.then((data) => { 
		// console.table(data);
		// window.location.href = "index.html";
		getColleges("college_id","ASC");
	})
	
	redirectToTable();

}

function deleteData(id) {
	loaderback.setAttribute('class',"loaderback");
	loader.setAttribute('class',"bubbles");

		fetch(`/colleges/delete?id=${id}`, {
			method: "DELETE",
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			}})
		.then((response) =>{
			if(response.ok){
				response.json()
			}else{
			   loaderback.setAttribute('class',"abc");
			   loader.setAttribute('class',"abc");
			   redirectToTable();
			   alert("something went wrong");
			}})
		.then((data) => {
			// console.log(data); 
			// window.location.href = "index.html";
			getColleges("college_id","ASC");
		});
		
	}
	// window.location.href = "index.html";	
	// ,
	// body: JSON.stringify({id : id}