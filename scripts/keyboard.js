

// Event listener to detect arrow key presses
window.addEventListener('keydown', function (event) {
    if (event.key == "Enter")

    document.getElementById("myText").value = document.getElementById("myText").value + event.key;

});