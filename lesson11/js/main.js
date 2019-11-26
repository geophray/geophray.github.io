function toggleMenu() {
	document.getElementsByClassName("primary-nav")[0].classList.toggle("menu-open");
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
