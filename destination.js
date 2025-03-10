document.addEventListener("DOMContentLoaded", function () {
    const destinationString = localStorage.getItem('selectedDestination');

    if (destinationString) {
        const destination = JSON.parse(destinationString);

        document.getElementById('destination-name').textContent = destination.name;
        document.getElementById('destination-image').src = destination.image;
        document.getElementById('destination-description').textContent = destination.description;

        const itineraryList = document.getElementById('destination-itinerary');
        itineraryList.innerHTML = "";
        destination.details.itinerary.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            itineraryList.appendChild(listItem);
        });
    }
});

function goBack() {
    window.location.href = "index.html";
}
