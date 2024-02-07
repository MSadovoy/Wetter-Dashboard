// Ersetzen Sie 'IHR_API_SCHLÜSSEL' mit Ihrem tatsächlichen API-Schlüssel von OpenWeather
const apiKey = 'd4a08281bb35f5e7852850bc61df9ee2';

document.getElementById('sucheButton').addEventListener('click', function() {
    const stadtName = document.getElementById('sucheStadt').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${stadtName}&appid=${apiKey}&units=metric&lang=de`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Wetterdaten nicht gefunden');
            }
            return response.json();
        })
        .then(data => {
            anzeigenWetter(data);
        })
        .catch(error => {
            console.error("Fehler bei der API-Anfrage: ", error);
        });
});

function anzeigenWetter(data) {
    const wetterDetails = document.getElementById('wetterDetails');
    wetterDetails.innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperatur: ${data.main.temp}°C</p>
        <p>Wetter: ${data.weather[0].description}</p>
        <p>Luftfeuchtigkeit: ${data.main.humidity}%</p>
    `;
    wetterDetails.style.display = 'block';
}
