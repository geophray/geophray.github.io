let t = parseFloat(document.getElementById("high_temp").innerText);
let s = parseFloat(document.getElementById("wind_speed").innerText);

const windChillCalc = (t, s) => {
    let windChill = 'N/A';
    if (t <= 50 || s > 3.0) {
        windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
        return windChill.toFixed(1) + " &deg;F";
    } else {
        return windChill;
    }
}

document.getElementById("wind_chill").innerHTML = windChillCalc(t, s);