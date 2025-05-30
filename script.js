const Name = document.getElementById("Name");
const climate = document.getElementById("climate");
const gravity = document.getElementById("gravity");
const rotation_period = document.getElementById("rotation_period");
const diameter = document.getElementById("diameter");
const button = document.querySelector(".btn");
button.addEventListener('click' ,(e) => {
    e.preventDefault();
    const randomVar = Math.ceil(Math.random() * 50);
    fetch(`https://www.swapi.tech/api/planets/${randomVar}/`)
       .then(response => response.json())
       .then(data => {
        Name.innerHTML = data.result.properties['name'];
        climate.innerHTML = data.result.properties['climate'];
        gravity.innerHTML = data.result.properties['gravity'];
        rotation_period.innerHTML = data.result.properties['rotation_period'];
        diameter.innerHTML = data.result.properties['diameter'];
       })
        .catch(error => {
            console.error('Error fetching planet:', error);
        });
})