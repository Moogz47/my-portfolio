const locationButton = document.getElementById("get-location-btn");

locationButton.addEventListener("click", getLocation);

function getLocation() {
    const locationElement = document.getElementById("location");
    if (navigator.geolocation) {
        locationElement.innerHTML = "Getting location...";

        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        locationElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const locationElement = document.getElementById("location");

    locationElement.innerHTML = `Latitude: ${position.coords.latitude}
    <br>
    Longitude: ${position.coords.longitude}`;
}

function showError(error) {
    const locationElement = document.getElementById("location");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationElement.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationElement.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            locationElement.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            locationElement.innerHTML = "An unknown error occurred.";
            break;
    }
}
