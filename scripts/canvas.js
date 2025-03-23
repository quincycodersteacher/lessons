
let canvas = document.querySelector("canvas");
let drawingSurface = canvas.getContext("2d");

const cat = {
    x: 100,
    y: 100,
    width: 64,
    height: 64
};

const image = new Image();
image.addEventListener("load", update, false);
image.src = "images/cat.jpg";

const speed = 3;
let xSpeed = speed;
let ySpeed = speed;
let text = "Bouncy cat";

function update() {
    cat.x += xSpeed;
    cat.y += ySpeed;
    if (cat.width + cat.x > canvas.width) {
        xSpeed = -speed;
        text = "Going Left";
    }
    else if (cat.x < 1) {
        xSpeed = speed;
        text = "Going Right";
    }
    else if (cat.height + cat.y > canvas.height) {
        ySpeed = -speed;
        text = "Going Up";
    }
    else if (cat.y < 1) {
        ySpeed = speed;
        text = "Going Down"
    }
    render();
    window.requestAnimationFrame(update, canvas);
}

function render() {
    drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
    drawingSurface.drawImage
        (
            image,
            cat.x, cat.y,
            cat.height, cat.width
        );
    drawingSurface.font = "bold 20px Arial";
    drawingSurface.fillText(text, 10, 30, 200);
}