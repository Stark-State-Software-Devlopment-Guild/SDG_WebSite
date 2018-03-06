/*
*eventData is the driving funcion for EventInfo
*/
function NavData(){
	/*
	*calls the HTTP request for the jason file
	*sends a function as the callback argument
	*/
	loadJSON(function(response) {
  	/*
  	*parse JSON string into object
    */
    var actual_JSON = JSON.parse(response);

//used for debug ... outputs event data objects to the console log 
 	//actual_JSON.events.forEach(function(element)
	//{
	//	console.log(element);
	//});

	/*
	*for each loop to step through every object with in the first key value of "events"
	*in the json file "events" is an array housing multiple objects containing keys with values
	*item.x searches the current object within the elements arry for what ever key value x is
		if x was name it would search for the key name.
	*the key is found item.x returns the value of the key  
	*/
	actual_JSON.elements.forEach(function(item)
	{
		var name = item.name;
		var link = item.link;
		// //regular expression to remove spaces and capitals
		// var re = new RegExp('[^a-z]');
		// var newName = re.exec(name);
		var id = "nav-" + name;

		printNav(name, id, link);
	});
	});
}

/*
*creates a new HTTP request for the json file to be parsed
*/
function loadJSON(callback) {   
var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
xobj.open('GET', 'json/navigation.json', true);
xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
};
xobj.send(null);  
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
	*then sets the last child element of the element to the table HTML object
	*/	
	document.getElementById("nav-links").appendChild(links);
}