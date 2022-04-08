const api_url = ""

function loadData(records = []) {
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
		table_data += `<td>${records[i][9]}</td>`;
		
		table_data += `<td>`;
		table_data += `<a href="edit.html?id=${records[i][0]}"><button class="btn btn-primary">Edit</button></a>`;
		table_data += '&nbsp;&nbsp;';
		table_data += `<button class="btn btn-danger" onclick=deleteData('${records[i][0]}')>Delete</button>`;
		table_data += `</td>`;
		table_data += `</tr>`;
	}
	console.log(table_data);
	document.getElementById("tbody").innerHTML = table_data;
}

function getColleges(sortBy,sortType) {
	data={
		sortBy: sortBy,
		sortType: sortType
	}
	console.log(`Json: ${JSON.stringify(data)}`)
	fetch(api_url, {
		method: "GET",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	})
}


function getCollegesById(id) {
	console.log(id)
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
    var name= document.getElementById("name").value;
    var address= document.getElementById("address").value;
    var placementRatio= document.getElementById("pr").value;
    var aveargePackage= document.getElementById("ap").value;
    var cutoff= document.getElementById("cutoff").value;
    var url= document.getElementById("url").value;
    var autonomous= document.getElementById("autonomous").value;
    var ranking= document.getElementById("ranking").value;
    var rating= document.getElementById("rating").value;
	
	data = {
        name: name,
        address: address,
        placementRatio: placementRatio,
        aveargePackage: aveargePackage,
        cutoff: cutoff,
        websiteUrl: url,
        autonomous: autonomous,
        ranking: ranking,
        rating: rating
    };
	
	fetch(url, {
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
		window.location.href = "index.html";
	})

}


function editCollege(id){
    var name= document.getElementById("name").value;
    var address= document.getElementById("address").value;
    var placementRatio= document.getElementById("pr").value;
    var aveargePackage= document.getElementById("ap").value;
    var cutoff= document.getElementById("cutoff").value;
    var url= document.getElementById("url").value;
    var autonomous= document.getElementById("autonomous").value;
    var ranking= document.getElementById("ranking").value;
    var rating= document.getElementById("rating").value;
	
	data = {
        name: name,
        address: address,
        placementRatio: placementRatio,
        aveargePackage: aveargePackage,
        cutoff: cutoff,
        websiteUrl: url,
        autonomous: autonomous,
        ranking: ranking,
        rating: rating
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
		window.location.href = "index.html";
	})
	
}

function deleteData(id) {
	user_input = confirm(`Are you sure you want to delete this record?`);
	if(user_input) {
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
			window.location.href = "index.html";
		})
	}
	window.location.href = "index.html";	
}