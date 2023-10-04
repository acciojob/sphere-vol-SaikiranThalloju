function volume_sphere() {
    const radiusInput = document.getElementById("radius");
    const radius = parseFloat(radiusInput.value);

    if (!isNaN(radius)){
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);

        const volumeInput = document.getElementById("volume");
        volumeInput.value = volume.toFixed(2); 
		// volumeInput.innerText = volumeInput.value;
    } else {
        // Handle the case where the radius is not a valid number
        // alert("Please enter a valid radius.");
    }
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
