const image = document.getElementById('imageToMove');
let topPosition = 50;
let leftPosition = 50;

// Event listener to detect arrow key presses
window.addEventListener('keydown', function (event) {
  const step = 10; // Number of pixels to move the image

  switch (event.key) {
    case 'ArrowUp':
      topPosition -= step;
      break;
    case 'ArrowDown':
      topPosition += step;
      break;
    case 'ArrowLeft':
      leftPosition -= step;
      break;
    case 'ArrowRight':
      leftPosition += step;
      break;
  }

  // Update the position of the image
  image.style.top = `${topPosition}px`;
  image.style.left = `${leftPosition}px`;
});