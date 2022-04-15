// import fetch from 'node-fetch'
const api_url = "http://127.0.0.1:5000/"

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
		table_data += ` <i class="fa fa-trash-o" style="font-size:28px;color:red" onclick="deleteCollege(${records[i][0]},${i})"></i>`;
		table_data += `</td>`;
		table_data += `</tr>`;
	}
	console.log("setting the tbody")
	document.getElementById("tbody").innerHTML = table_data;
}

function getColleges(sortBy,sortType) {
	console.log("function called")
	fetch(`${api_url}colleges/sorted?sortBy=${sortBy}&sortType=${sortType}`)
	.then((response) => response.json())
	.then((data) => {
		console.log("data recived: ")
		console.log(data)
		loadData(data)
	})		
}


function getCollegesById(id) {
	console.log(id)
	fetch(`${api_url}colleges?id=${id}`)
	.then((response) => response.json())
	.then((data) => { 
		console.log(data);
		document.getElementById("name_edit").value = data[0][1];
		document.getElementById("address_edit").value = data[0][2];
		document.getElementById("pr_edit").value = data[0][3];
		document.getElementById("ap_edit").value = data[0][4];
		document.getElementById("cutoff_edit").value = data[0][5];
		document.getElementById("url_edit").value = data[0][6];
		document.getElementById("autonomous_edit").value = data[0][7];
		document.getElementById("updatebtn").onclick= function(){ editCollege(data[0][0])}
	})


}

function deleteData(id) {
	if(confirm(`Are you sure you want to delete this record?`)){
		fetch(`${api_url}/colleges?id=${id}`, {
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
		})
		return true
	}else{
		return false
	}
}



function addCollege(){
	// var college_id=document.getElementsById("collegeID").value
	var name= document.getElementById("name").value;
    var address= document.getElementById("address").value;
    var placementRatio= document.getElementById("pr").value;
    var aveargePackage= document.getElementById("ap").value;
    var cutoff= document.getElementById("cutoff").value;
    var url= document.getElementById("url").value;
    var autonomous= document.getElementById("autonomous").value;
    var ranking= 10;

	let data = {
		college_id:26,
        name: name,
        address: address,
        placement_ratio: placementRatio,
        average_package: aveargePackage,
        cut_off: cutoff,
        website: url,
        autonomous: autonomous,
        ranking: ranking
    };
	console.log(data)
	
	fetch(`${api_url}colleges`, {
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
		redirectToTable()
	})

}

function editCollege(id){
	// we need to pass id to edit perticuler college
    var name= document.getElementById("name_edit").value;
    var address= document.getElementById("address_edit").value;
    var placementRatio= document.getElementById("pr_edit").value;
    var aveargePackage= document.getElementById("ap_edit").value;
    var cutoff= document.getElementById("cutoff_edit").value;
    var url= document.getElementById("url_edit").value;
    var autonomous= document.getElementById("autonomous_edit").value;

	let data = {
		college_id:id,
        name: name,
        address: address,
        placement_ratio: placementRatio,
        average_package: aveargePackage,
        cut_off: cutoff,
        website: url,
        autonomous: autonomous,
    };

	fetch(`${api_url}colleges`, {
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
		redirectToTable()
	})
	
}

