const apiKey = "4d8fb5b93d4af21d66a2948710284366";

let cityInput = document.querySelector("#cityInput");

let submitBtn = document.querySelector('#submitBtn');

let msg = document.querySelector('.msg');

let list = document.querySelector('.cities');

cityInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        getData();
    }
});

submitBtn.addEventListener("click", getData);

function getData() {
    if (cityInput.value === "") {
        alert("before submit add name of city")
    }
    else {
        let inputValue = cityInput.value;

        let cityName = inputValue.toLowerCase();

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => { 
                
                msg.textContent = "";

                const li = document.createElement("li");
                li.classList.add("city");

                const imgSrc = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`;

                const markup = `
                    <h2 class="city-name" data-name="${data.name},${data.sys.country}">
                    <span>${data.name}</span>
                    <sup>${data.sys.country}</sup>
                    </h2>
                    <div class="city-temp">${Math.round(data.main.temp)}<sup>°C</sup></div>
                    <figure>
                    <img class="city-icon" src="${imgSrc}" alt="weather image illustration">
                    <figcaption>${data.weather[0].description}</figcaption>
                    </figure>
                `;

                li.innerHTML = markup;
                list.appendChild(li);

            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                msg.textContent = "Plz search for a valid city";
            });
    }
};