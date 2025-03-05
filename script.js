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
        <div class="card-content">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <h4>Itinerary:</h4>
            <ul>
                ${destination.details.itinerary.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <button class="book-button" data-id="${destination.id}">Book Now</button>
        </div>
    `;

        card.addEventListener('click', function () {
            localStorage.setItem('selectedDestination', JSON.stringify(destination));
            window.location.href = "index.html";
        });

        container.appendChild(card);
    });
}