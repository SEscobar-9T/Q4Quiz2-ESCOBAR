function getAverage () {
var sub1 = parseInt(document.getElementById('sci').value);
var sub2 = parseInt(document.getElementById('eng').value);
var sub3 = parseInt(document.getElementById('mathymathyks').value);

var avg = (sub1 + sub2 + sub3) / 3;

var foundAvg = Math.round(avg);

	if (foundAvg >= 75 && foundAvg <= 79.99) { 
		window.alert("Your average is " + foundAvg + ". You NEED IMPROVEMENT from this quarter."); 
	}
	
	else if (foundAvg >= 80 && foundAvg <= 86.99) { 
		window.alert("Your average is" + foundAvg + ". You have SATISFACTORY marks in this quarter.") 
	}

	else if (foundAvg >= 87 && foundAvg <= 93.99) { 
		window.alert("Your average is" + foundAvg + ". You have ABOVE SATISFACTORY marks in this quarter.") 
	}

	else if (foundAvg >= 94) { 
		window.alert("Your average is" + foundAvg + ". You have EXCELLENT marks in this quarter, well done.") 
	}

	else { 
		window.alert("Your average is " + foundAvg + ". You have FAILED this quarter, please do better in the next quarter.") 
	}
	}
	