/*
*NewsfeedData gets json object through jquery
*/
function NewsfeedData(){
	/*
	*jquery get json function
	*/
	$.getJSON('json/newsfeed.json', function(data){
		 $(data.elements).each(function(index, value){
		 	console.log(value);
			var title = value.Title;
		 	var date = value.Date;
		 	var description = value.Description;
		 	printNewsFeed(title, date, description);
		 });
	});
}

/*
 Generates formatted text and appends it to the HTML section with id="newsfeed-content"
*/
function printNewsFeed(title, date, description){

	//var meetingText = document.createTextNode(title + "<br>" + date + "<br>" + description + "<br>");
	/*
	*searches the HTML for the first tag with the id = "newsfeed-content"
	*then sets the last child element of the element to formatted text
	*/	
	document.getElementById("newsfeed-content").appendChild(document.createTextNode(title));
	document.getElementById("newsfeed-content").appendChild(document.createElement("br"));
	document.getElementById("newsfeed-content").appendChild(document.createTextNode(date));
	document.getElementById("newsfeed-content").appendChild(document.createElement("br"));
	document.getElementById("newsfeed-content").appendChild(document.createElement("br"));
	document.getElementById("newsfeed-content").appendChild(document.createTextNode(description));
	document.getElementById("newsfeed-content").appendChild(document.createElement("br"));
	document.getElementById("newsfeed-content").appendChild(document.createElement("br"));
	document.getElementById("newsfeed-content").appendChild(document.createElement("br"));
}