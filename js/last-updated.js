try {
    let updated = new Date(document.lastModified);
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let dateUpdated = updated.toLocaleDateString("en-US", options);
    document.getElementById("lastUpdated").textContent = dateUpdated;
} catch (e) {
    alert("Error with code or your browser does not support Locale.")
}