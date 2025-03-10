document.addEventListener("DOMContentLoaded", function () {
    const destinationString = localStorage.getItem('selectedDestination');

    if (destinationString) {
        const destination = JSON.parse(destinationString);

        document.getElementById('destination-name').textContent = destination.name;
        document.getElementById('destination-largeImage').src = destination.details.largeImage;
        document.getElementById('destination-description').textContent = destination.description;

        const itineraryList = document.getElementById('destination-itinerary');
        itineraryList.innerHTML = "";

        destination.details.itinerary.forEach(item => {
            const listItem = document.createElement('ul');
            listItem.textContent = item;
            itineraryList.appendChild(listItem);
        });

        document.getElementById('destination-map').src = destination.details.map;

        const destinationInput = document.getElementById('destination');
        if (destinationInput) {
            destinationInput.value = destination.name;
        }
    } else {
        document.body.innerHTML = "<p>No destination selected.</p>";
    }

    document.getElementById("booking-form").addEventListener("submit", function (event) {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const travelers = document.getElementById("travelers").value;
        const travelDate = document.getElementById("travel-date").value;

        if (!name || !email || !travelers || !travelDate) {
            alert("All fields must be filled.");
            return;
        }
        const today = new Date();
        today.setDate(today.getDate() - 1);
        today.setHours(0, 0, 0, 0);
        if (new Date(travelDate) < today) {
            alert("Travel date cannot be in the past. Please select a new date.");
            return;
        }

        if (travelers < 1) {
            alert("Number of travelers must be at least 1.");
            return;
        }
        else {
            alert("Tour Booked!");
            return;
        }
    });
});

function goBack() {
    location.replace("index.html");
}
