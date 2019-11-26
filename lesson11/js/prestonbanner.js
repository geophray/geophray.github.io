function displayBanner() {
	document.getElementById("event_notices").style.display = "block";
}

try {
	let currentDate = new Date;
	let currentDay = currentDate.getDay();
	if (currentDay === 5) {
		displayBanner();
	}
} catch (e) {
	alert("Error with code or your browser does not support Locale.")
}