<<<<<<< HEAD:templates/script .js
import fetch from 'node-fetch'
const api_url = "http://127.0.0.1:5000/colleges"
=======
// import fetch from 'node-fetch'
const api_url = "http://127.0.0.1:5000/"
>>>>>>> main:static/script .js

function loadData(records = []) {
	console.log(records)
	var table_data = "";
	for(let i=0; i<records.length; i++) {
		table_data += `<tr>`;

		table_data += `<td>${records[i][0]}</td>`;
		table_data += `<td>${records[i][1]}</td>`;
		table_data += `<td>${records[i][2]}</td>`;
		table_data += `<td>${records[i][3]}</td>`;
		table_data += `<td>${records[i][4]}</td>`;
		table_data += `<td>${records[i][5]}</td>`;
		table_data += `<td>${records[i][6]}</td>`;
		table_data += `<td>${records[i][7]}</td>`;
		table_data += `<td>${records[i][8]}</td>`;
		table_data += `<td>`;
		table_data += `<i class="fa fa-edit" style="font-size:28px;color:rgb(71, 105, 224)" onclick="redirectToUpdate(${records[i][0]})"></i>`;
		table_data += '&nbsp;&nbsp;';
		table_data += `<button class="btn btn-danger">Delete</button>`;
		table_data += `</td>`;
		table_data += `</tr>`;
	}
	document.getElementById("tbody").innerHTML = table_data;
}

function getColleges(sortBy,sortType) {
	fetch(`${api_url}colleges/sorted?sortBy=${sortBy}&sortType=${sortType}`)
	.then((response) => response.json())
	.then((data) => loadData(data))		
}


function getCollegesById(id) {
	console.log(id)
	fetch(`${api_url}colleges?id=${id}`)
	.then((response) => response.json())
	.then((data) => { 
		console.log(data);
		document.getElementsByName("collegeId").value = data[0][0];
		document.getElementsByName("name").value = data[0][1];
		document.getElementsByName("address").value = "hello";
		document.getElementsByName("pr").value = data[0][3];
		document.getElementsByName("ap").value = data[0][4];
		document.getElementsByName("cutoff").value = data[0][5];
		document.getElementsByName("url").value = data[0][6];
		document.getElementsByName("autonomous").value = data[0][7];
		document.getElementsByName("ranking").value = data[0][8];
		// document.getElementById("rating").value = data[0][9];
	})

}

function deleteData(id) {
		fetch(`${api_url}?id=${id}`, {
			method: "DELETE",
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({id : id})
		})
		.then((response) => response.json())
		.then((data) => {
			console.log(data); 
			// window.location.href = "index.html";
		})
	}
	// window.location.href = "index.html";	


<<<<<<< HEAD:templates/script .js
	
function addCollege(){
=======

function addCollege(){
	// var college_id=document.getElementsById("collegeID").value
>>>>>>> main:static/script .js
	var name= document.getElementById("name").value;
    var address= document.getElementById("address").value;
    var placementRatio= document.getElementById("pr").value;
    var aveargePackage= document.getElementById("ap").value;
    var cutoff= document.getElementById("cutoff").value;
    var url= document.getElementById("url").value;
    var autonomous= document.getElementById("autonomous").value;
<<<<<<< HEAD:templates/script .js
    var ranking= document.getElementById("ranking").value;
    var rating= document.getElementById("rating").value;
	let data = {
		college_id:college_id,
=======
    var ranking= 10;

	let data = {
		college_id:26,
>>>>>>> main:static/script .js
        name: name,
        address: address,
        placement_ratio: placementRatio,
        average_package: aveargePackage,
        cut_off: cutoff,
<<<<<<< HEAD:templates/script .js
        website: site,
        autonomous: autonomous,
        ranking: ranking,
        rating: rating
    };
	
	fetch(api_url, {
=======
        website: url,
        autonomous: autonomous,
        ranking: ranking
    };
	console.log(data)
	
	fetch(`${api_url}colleges`, {
>>>>>>> main:static/script .js
		method: "POST",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.log(data); 
		// window.location.href = "index.html";
	})

}

<<<<<<< HEAD:templates/script .js

function editCollege(id){
=======
function editCollege(id){
	// we need to pass id to edit perticuler college
>>>>>>> main:static/script .js
    var name= document.getElementById("name").value;
    var address= document.getElementById("address").value;
    var placementRatio= document.getElementById("pr").value;
    var aveargePackage= document.getElementById("ap").value;
    var cutoff= document.getElementById("cutoff").value;
    var url= document.getElementById("url").value;
    var autonomous= document.getElementById("autonomous").value;
    var ranking= document.getElementById("ranking").value;
<<<<<<< HEAD:templates/script .js
    var rating= document.getElementById("rating").value;
=======
>>>>>>> main:static/script .js

	let data = {
		college_id:id,
        name: name,
        address: address,
        placement_ratio: placementRatio,
        average_package: aveargePackage,
        cut_off: cutoff,
        website: url,
        autonomous: autonomous,
<<<<<<< HEAD:templates/script .js
        ranking: ranking,
        rating: rating
=======
        ranking: ranking
>>>>>>> main:static/script .js
    };

	fetch(api_url, {
		method: "PUT",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.table(data);
		// window.location.href = "index.html";
	})
	
}


<<<<<<< HEAD:templates/script .js

=======
>>>>>>> main:static/script .js
