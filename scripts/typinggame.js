
const WORDLIST = [
    "apple", "banana", "cherry", "dog", "elephant", "frog", "guitar", "house", "ice", "jacket",
    "kangaroo", "lemon", "mountain", "notebook", "orange", "piano", "queen", "rabbit", "sunflower", "tree",
    "umbrella", "violet", "watermelon", "xylophone", "yarn", "zebra", "airplane", "ball", "cat", "door",
    "ear", "fire", "giraffe", "hat", "island", "jungle", "kite", "lighthouse", "moon", "noodles",
    "octopus", "parrot", "queen", "rose", "star", "tiger", "ufo", "vulture", "whale", "xenon",
    "yellow", "zoo", "ant", "bike", "car", "drum", "elephant", "fish", "goose", "honey", "insect",
    "jackal", "kiwi", "leaf", "mango", "noodle", "owl", "peacock", "quilt", "raven", "snow",
    "tree", "unicorn", "violet", "windmill", "xylophone", "yogurt", "zucchini", "apricot", "berry", "cactus",
    "dolphin", "eagle", "flame", "grape", "hiker", "iris", "jam", "kelp", "lemonade", "mountain",
    "night", "owl", "penguin", "quince", "rainbow", "salt", "tulip", "underwater", "vase", "whale",
    "x-ray", "yellow", "zinc", "antelope", "bridge", "cloud", "daisy", "edge", "firefly", "guitar"
];
const TIME_LIMIT = 10;
let gameRunning = false;
let seconds = 0;
let currentWord = '';
let currentInputWord = '';
let score = 0;

function startGame() {
    //reset typed text
    score = 0;
    document.getElementById("score").innerText = score;
    currentInputWord = '';
    displayRandomWord();
    startTimer();
    myText.value = '';
    myText.focus();
}

function startTimer() {
    seconds = TIME_LIMIT;
    gameRunning = true;
    timer();
}

function timer() {
    if (gameRunning) {
        if (--seconds < 1) {
            gameRunning = false;
            alert('Game Over');
        } else {
            setTimeout(timer, 1000);
        }
        document.getElementById("timer").innerText = seconds;
    }
}

function displayRandomWord() {
    let r = Math.floor(Math.random() * WORDLIST.length);
    currentWord = WORDLIST[r];
    document.getElementById("currentword").innerText = currentWord;
}

// Event listener to detect key presses
window.addEventListener('keydown', function (event) {
    event.preventDefault();
    if (gameRunning) {
        if (event.key == "Enter") {
            //do nothing
            return;
        }
        else if (event.key == 'Backspace') {
            //user wants to delete last character
            currentInputWord = currentInputWord.slice(0, -1);
        } else {
            currentInputWord = currentInputWord + event.key;
            if (currentWord == currentInputWord) {
                //user got the word correct, so increase score
                score++;
                document.getElementById("score").innerText = score;
                currentInputWord = '';
                displayRandomWord();
            }
        }
        document.getElementById("myText").value = currentInputWord;
    }
});

