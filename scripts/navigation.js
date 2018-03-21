/*
*NavData gets json object through jquery
*/
function NavData(){
	/*
	*jquery get json function
	*
	*refrence  https://www.youtube.com/watch?v=j-S5MBs4y0Q
	*
	*inner function gets elements array of objects within the json
	*for each object it gets a name and link variable
	*uses these variables in the print data function
	*/
	$.getJSON('json/navigation.json', function(data){
		 $(data.elements).each(function(index, value){
		 	//console.log(value);
		 	var name = value.name;
		 	//regex to remove spaces
		 	var id = name.replace(/\s/g, '');
		 	var link = value.link;

		 	printNav(name, id, link);
		 });
	});
}

/*
*creates a link with id, href and inner contents from parameters
*/
function printNav(name, id, link){

	var links = document.createElement('a');
	links.setAttribute("id", id);
	links.setAttribute("href", link)
	links.innerHTML = name

	/*
	*searches the HTML for the first tag with the id = "nav-links"
	*then sets the last child element of the element to the HTML a object
	*/	
	document.getElementById("nav-links").appendChild(links);
}