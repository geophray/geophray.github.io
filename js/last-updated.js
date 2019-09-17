var updated = document.lastModified;
var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

document.getElementById("dateUpdated").textContent = updated().toLocaleDateString("en-US", options);