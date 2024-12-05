

// Event listener to detect arrow key presses
window.addEventListener('keydown', function (event) {

    document.getElementById("myText").value = document.getElementById("myText").value + event.key;

});