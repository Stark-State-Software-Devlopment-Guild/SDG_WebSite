/*
*eventData is the driving funcion for EventInfo
*/
function eventData(){
/*
	*jquery get json function
	*
	*refrence  https://www.youtube.com/watch?v=j-S5MBs4y0Q
	*
	*inner function gets elements array of objects within the json
	*for each object it gets a name and link variable
	*uses these variables in the print data function
	*/
	$.getJSON('json/eventinfo.json', function(data){
		 $(data.events).each(function(index, item){
		 	//console.log(item);
		 	var name = item.name;
			var month = item.month;
			var day = item.day;
			var year = item.year;
			var description = item.description;

			printEventData(name, month, day, year, description);
		 });
	});
}

/*
*creates a HTML table of 3 rows containing a name header, a smaller date header, and a description
*/
function printEventData(name, month, day, year, description){
	//create <table></table>
	var table = document.createElement('table');
	//create <tr></tr>
	var tr = document.createElement('tr');
	//create <td></td>
	var td = document.createElement('td');
	//.innerHTML sets the HTML within the tags
	td.innerHTML = "<h3>"+name+"</h3>";
	//defines that td is the last item within tr
	tr.appendChild(td);
	//defines that tr is the last child element of table
	table.appendChild(tr); 

	//similar to above
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = "<h6>"+month+" "+day+" "+year+"</h6>";
	tr.appendChild(td);
	table.appendChild(tr);
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = description;
	tr.appendChild(td);
	table.appendChild(tr);

	/*
	*searches the HTML for the first tag with the id = "container-events"
	*then sets the last child element of the element to the table HTML object
	*/	
	document.getElementById("container-events").appendChild(table);
}