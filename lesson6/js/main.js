function toggleMenu() {
	document.getElementsByClassName("primary-nav")[0].classList.toggle("menu-open");
}

function displayBanner() {
	document.getElementById("event_notices").style.display = "block";
}

try {
	let currentDate = new Date;
	let options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	let formattedDate = currentDate.toLocaleDateString("en-GB", options);
	document.getElementById("todaysDate").textContent = formattedDate;
} catch (e) {
	alert("Error with code or your browser does not support Locale.")
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

let mapSRC = document.getElementById("map_iframe").getAttribute("data-src");

if (mapSRC) {
	document.getElementById("map_iframe").setAttribute("src", mapSRC);
}