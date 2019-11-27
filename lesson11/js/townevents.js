const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function townLookup() {
    const pathName = window.location.pathname;
    const townSlugExtension = pathName.split("/")[2];
    const townSlug = townSlugExtension.split(".")[0];
    const townName = townSlug.replace('-',' ');
    return townName;
}


const currentTown = townLookup();

fetch(requestURL)
    .then((response) => response.json())
    .then((townDataObject) => {
        console.log(townDataObject);
        for (let i = 0;i < townDataObject.towns.length;i++) {
            let thisTown = townDataObject.towns[i].name.toLowerCase();
            if ( currentTown == thisTown) {
                let townEventsArray = townDataObject.towns[i].events;
                for (j = 0; j < townEventsArray.length; j++) {
                    let newEvent = document.createElement('li');
                    newEvent.innerText = townEventsArray[j];
                    document.getElementById('upcoming_event_list').appendChild(newEvent);
                }

            }

        }
    })