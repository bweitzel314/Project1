document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => showDestinations(data))
        .catch(error => console.error('Error:', error));
})