document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModification').textContent = `Last Modification: ${document.lastModified}`;


function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

const temperature = 31; // °C
const windSpeed = 15;   // km/h

let windChillDisplay = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChillDisplay = `${calculateWindChill(temperature, windSpeed).toFixed(2)} °C`;
}

const windChillElement = Array.from(document.querySelectorAll('.weather p strong'))
  .find(el => el.textContent.trim().startsWith('Wind Chill:'));

if (windChillElement && windChillElement.parentElement) {
  const parent = windChillElement.parentElement;
  windChillElement.nextSibling.textContent = ` ${windChillDisplay}`;
}