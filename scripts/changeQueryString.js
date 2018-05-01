/*
*creates an array that holds the string names for each month
*/
var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//get querystring
var queryString = window.location.search;
//vars for current month and year
var currentYear;
var currentMonth;

function nextMonth(){
	if(queryString.toString() === ""){
		getCurrentDate();
		if (currentMonth == 11){
			var newYear = parseInt(currentYear) + 1;
			var newMonth = monthName[0];
			document.location = "?month="+newMonth+"&year="+newYear;
		} else {
			var newMonth = monthName[currentMonth+1];
			document.location = "?month="+newMonth+"&year="+currentYear;
		}
	}
	else {
		//get month and year from querystring
		var removeQuestionMark = queryString.replace(/\?/, "");
		var keyValPair = removeQuestionMark.split("&");
		var key, value, pair, obj = {};
		for (var i = 0; i < keyValPair.length; i++){
			pair = keyValPair[i].split("=");
			key = pair[0];
			val = pair[1];
	        obj[key] = val;
	    }
	    //values in string
	    var monthStr = obj["month"];
	    var monthNum;
		for(var i = 0; i < monthName.length; i++){
			if (monthStr.toUpperCase() === monthName[i].toUpperCase()){
				monthNum = i;
			}
		}
		var year = obj["year"];

		if (monthNum == 11){
			var newYear = parseInt(year) + 1;
			var newMonth = monthName[0];
			document.location = "?month="+newMonth+"&year="+newYear;
		} else {
			var newMonth = monthName[monthNum+1];
			document.location = "?month="+newMonth+"&year="+year;
		}

	}

}

function lastMonth(){
	if(queryString.toString() === ""){
		getCurrentDate();
		if (currentMonth == 0){
			var newYear = parseInt(currentYear) - 1;
			var newMonth = monthName[11];
			document.location = "?month="+newMonth+"&year="+newYear;
		} else {
			var newMonth = monthName[currentMonth-1];
			document.location = "?month="+newMonth+"&year="+currentYear;
		}
	}
	else {
		//get month and year from querystring
		var removeQuestionMark = queryString.replace(/\?/, "");
		var keyValPair = removeQuestionMark.split("&");
		var key, value, pair, obj = {};
		for (var i = 0; i < keyValPair.length; i++){
			pair = keyValPair[i].split("=");
			key = pair[0];
			val = pair[1];
	        obj[key] = val;
	    }
	    //values in string
	    var monthStr = obj["month"];
	    var monthNum;
		for(var i = 0; i < monthName.length; i++){
			if (monthStr.toUpperCase() === monthName[i].toUpperCase()){
				monthNum = i;
			}
		}
		var year = obj["year"];

		if (monthNum == 0){
			var newYear = parseInt(year) - 1;
			var newMonth = monthName[11];
			document.location = "?month="+newMonth+"&year="+newYear;
		} else {
			var newMonth = monthName[monthNum-1];
			document.location = "?month="+newMonth+"&year="+year;
		}

	}
}

function getCurrentDate(){
	var currentDate = new Date();
	currentMonth = currentDate.getMonth();
	currentYear = currentDate.getFullYear();
}