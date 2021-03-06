/*
*this is the driving function for the auto creation of the calendar
*/
function calendar(){
	/*
	*declares and initializes a date object
	*/
	var date = new Date();
	/*
	*creates an array that holds the string names for each month
	*/
	var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	/*
	*returns 0 - 11 for current month
	*/
	var month = date.getMonth();
	/*
	*returns current day as an int
	*/
	var day = date.getDate();
	/*
	*returns full year as an integer
	*/
	var year = date.getFullYear();
	/*
	*creates a curent date in string format as month day year
	*example March 1 2017
	*/
	var firstDate = monthName[month] + " " + 1 + " " + year;
	/*
	*sets variable to new date that is equal to first_date
	*turns the date object to a date string
	*returns Wed March 1 2017
	*/
	var tmp = new Date(firstDate).toDateString();
	/*
	*uses substring on tmp variable to obtain just the day name of the first day
	*returns Wed
	*/
	var firstDay = tmp.substring(0, 3);
	/*
	*creates an array that houses the days of the week in the same orientation as the calendar will display them
	*/
	var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	/*
	*uses the dayName array and saves the index number 0-6 of the first day variable as an integer
	*/
	var dayNumber = dayName.indexOf(firstDay);
	/*
	*get max number of days
	*sets days = to new date using current year variable, current month variable
	*using Date(year, month, day) if day is set to 0 Date returns exaple
	*'Fri March 31 2017 00:00:00 GMT-0400 (Eastern Standard Time)'
	*get date method returns the day value within the date
	*/
	var days = new Date(year, month+1, 0).getDate();
	console.log(days);
	/*
	*creates a variable to save the calandar table to
	*/
	var calendar = getCalendar(dayNumber, days, day);

	/*
	*searches the HTML for the first tag with the id = "calendar-month-year"
	*it sets the text inside the HTML tag to the month name and year
	*/
	document.getElementById("calendar-month-year").innerHTML = monthName[month] + " " + year;
	/*
	*searches the HTML for the first tag with the id = "calendar-dates"
	*then sets the last child element of the element found to the calandar varibale which is an HTML table object
	*/	
	document.getElementById("calendar-dates").append(calendar);
}

//full arg get calendar
function customCalendar(month, year){
	/*
	*creates an array that holds the string names for each month
	*/
	var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	/*
	*creates a curent date in string format as month day year
	*example March 1 2017
	*/
	var firstDate = month + " " + 1 + " " + year;
	/*
	*get month number for later 
	*/
	var monthNum;
	for (var i = 0; i < monthName.length; i++) {
		if(monthName[i].toUpperCase() === month.toUpperCase()){
			monthNum = i;
		}
	}
	/*
	*set Day to 0 wont matter for this
	*/
	var day = 0;
	/*
	*sets variable to new date that is equal to first_date
	*turns the date object to a date string
	*returns Wed March 1 2017
	*/
	var tmp = new Date(firstDate).toDateString();
	/*
	*uses substring on tmp variable to obtain just the day name of the first day
	*returns Wed
	*/
	var firstDay = tmp.substring(0, 3);
	/*
	*creates an array that houses the days of the week in the same orientation as the calendar will display them
	*/
	var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	/*
	*uses the dayName array and saves the index number 0-6 of the first day variable as an integer
	*/
	var dayNumber = dayName.indexOf(firstDay);
	/*
	*get max number of days
	*sets days = to new date using current year variable, current month variable
	*using Date(year, month, day) if day is set to 0 Date returns exaple
	*'Fri March 31 2017 00:00:00 GMT-0400 (Eastern Standard Time)'
	*get date method returns the day value within the date
	*/
	var days = new Date(year, monthNum+1, 0).getDate();
	console.log(days);
	/*
	*creates a variable to save the calandar table to
	*/
	var calendar = getCalendar(dayNumber, days, day);

	/*
	*searches the HTML for the first tag with the id = "calendar-month-year"
	*it sets the text inside the HTML tag to the month name and year
	*/
	document.getElementById("calendar-month-year").innerHTML = month + " " + year;
	/*
	*searches the HTML for the first tag with the id = "calendar-dates"
	*then sets the last child element of the element found to the calandar varibale which is an HTML table object
	*/	
	document.getElementById("calendar-dates").append(calendar);

}

//gets query string and returns it or if none 
//new calling function
//calendar() is default 
//make calandar with full args
//check for valid month and year up to 2 years form now if query invalid or more than two years show alert and use default
function getQueryString(){

	//get url
	var queryString = window.location.search;
	console.log(queryString);
	if(queryString.toString() === ""){
		calendar();
	} else {
		var removeQuestionMark = queryString.replace(/\?/, "");
		console.log(removeQuestionMark);
		var keyValPair = removeQuestionMark.split("&");
		var key, value, pair, obj = {};
		for (var i = 0; i < keyValPair.length; i++){
			pair = keyValPair[i].split("=");
			key = pair[0];
			val = pair[1];
	        obj[key] = val;
			console.log(obj);
		}

		var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		
		var monthStr = obj["month"];
		var monthNum;
		for(var i = 0; i < monthName.length; i++){
			if (monthStr.toUpperCase() === monthName[i].toUpperCase()){
				monthNum = i;
			}
		}
		var year = obj["year"];

		var currentDate = new Date();
		var currentMonth = currentDate.getMonth();
		var currentMonthStr = monthName[currentMonth];
		var currentYear = currentDate.getFullYear();

		if(monthStr.toUpperCase() === currentMonthStr.toUpperCase() && year == currentYear){
			calendar();
		} else {
			
			customCalendar(monthName[monthNum], year);
		}
	}
}



/*
*getCalendar functiion
*takes parameter day start as an integer. This integer is the day number that the first day of the month falls on this is in order smtwtfs where sunday s is 0 and saturday s is 6
*takes parameter days as integer. This is the total number of days in the current month
*takes parameter day as integer. Ths is the number for todays curent day can be anywhere from 1 to the max number of days for the current month
*/ 
function getCalendar(dayStart, days, day){
	//console.log("in function");
	/*
	*create table HTML element
	*/
	var table = document.createElement('table');
	/*
	*create tr HTML element
	*/
	var tr = document.createElement('tr');

	/*
	*creates 7 columns in one row containing  the letters S M T W T F S for the days of the week
	*/
	for(var i=0; i<=6;i++){
		var td = document.createElement('td');
		/*
		*putting '[i]' after a string  returns the char from position i as an integer
		*/
		td.innerHTML = "SMTWTFS"[i];
		tr.appendChild(td);
	}
	table.appendChild(tr);

	/*
	*create first row of numbers 
	*first for loop stops when the position in the table is equal to the dayStart
	*recall dayStart is the first day in the month(sun, mon, tuse, wed...) represented as an integer from 0 to 6
	*/
	tr = document.createElement('tr');
	var c;
	for (c=0;c<=6;c++){
		if(c == dayStart){
			break;
		}
		var td = document.createElement('td');
		td.innerHTML = "";
		tr.appendChild(td);
	}
	/*
	*keeps track of how may days are outputed
	*/
	var count = 1;
	/*
	*this for loop continues from the exact location the previous for loop broke from and starts printing the days in the month starting at 1
	*
	*/
	for(;c<=6;c++){
		var td = document.createElement('td');
		/*
		*checks to see if the outputted day is the same as the current day
		*if so it sets the td elements ID to "today" for CSS styling
		*/
		if(day == count){
			td.id = "today";
		}
		td.innerHTML = count;
		count++;
		tr.appendChild(td);
	}
	table.appendChild(tr);

	/*
	*prints rows from whatever day it is on(controled by count) to the maximum number of days for that month
	*/
	for(var r=3; r<=7; r++){
		tr = document.createElement('tr');
		for (var c =0; c<=6; c++) {
			var td = document.createElement('td');
			/*
			*checks to see if the outputted day is the same as the current day
			*if so it sets the td elements ID to "today" for CSS styling
			*/
			if(day == count){
			td.id = "today";
			}
			td.innerHTML = count;
			count++;
			tr.appendChild(td);

			/*
			*cheks to see if count is at maximum days if so exit the loop
			*/
			if(count > days){
				table.appendChild(tr);
				//console.log("returnbg object");
				return table;
			} else{
				table.appendChild(tr);
			}
		}
		
	}


}

function eventDateData(){
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
			var month = item.month;
			var day = item.day;
			var year = item.year;

			
		 });
	});
}