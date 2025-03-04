document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => showDestinations(data))
        .catch(error => console.error('Error:', error));
})

function showDestinations(destinations) {
    const container = document.getElementById('destinations-container');

    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.classList.add('destination-card');

        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
        `;

        card.addEventListener('click', function () {
            localStorage.setItem('selectedDestination', JSON.stringify(destination));
            window.location.href = "index.html";
        });

        container.appendChild(card);
    });
}