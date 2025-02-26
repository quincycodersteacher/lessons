const WORDLIST = [
    "apple", "cherry", "dog", "elephant", "frog", "guitar", "house", "ice", "jacket",
    "kangaroo", "lemon", "mountain", "notebook", "orange", "piano", "queen", "rabbit", "sunflower", "tree",
    "umbrella", "violet", "watermelon", "xylophone", "yarn", "zebra", "airplane", "ball", "cat", "door",
    "ear", "fire", "giraffe", "hat", "island", "jungle", "kite", "lighthouse", "moon", "noodles",
    "octopus", "parrot", "queen", "rose", "star", "tiger", "ufo", "vulture", "whale", "xenon",
    "yellow", "zoo", "ant", "bike", "car", "drum", "elephant", "fish", "goose", "honey", "insect",
    "jackal", "kiwi", "leaf", "mango", "noodle", "owl", "peacock", "quilt", "raven", "snow",
    "tree", "unicorn", "violet", "windmill", "xylophone", "yogurt", "zucchini", "apricot", "berry", "cactus",
    "dolphin", "eagle", "flame", "grape", "hiker", "iris", "jam", "kelp", "lemonade", "mountain",
    "night", "owl", "penguin", "quince", "rainbow", "salt", "tulip", "underwater", "vase", "whale",
    "yellow", "zinc", "antelope", "bridge", "cloud", "daisy", "edge", "firefly", "guitar"
];

const MAX_TRIES = 7;
let currentHangmanImage = 1;
let currentWord = '';
let dashifiedWord = '';
let usedLetters = [];
let gameRunning = false;

function startGame() {
    currentWord = getRandomWord();
    dashifiedWord = dashifyWord(currentWord);
    showDashifiedWord(dashifiedWord);
    usedLetters.length = 0;
    document.getElementById("usedLetters").innerHTML = usedLetters;
    gameRunning = true;
    currentHangmanImage = 0;
    updateHangManImage();
}

function showDashifiedWord(dashifiedWord) {
    let dashifiedWordSpaces = dashifiedWord.split('').join(' ');
    document.getElementById("word").innerText = dashifiedWordSpaces;
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function replaceDashifiedLetters(dashifiedWord, currentWord, letter) {
    let dashifiedWordArray = dashifiedWord.split('');

    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == letter) {
            dashifiedWordArray[i] = letter;
        }
    }
    return dashifiedWordArray.join('');
}

// Event listener to detect key presses
window.addEventListener('keydown', function (event) {
    event.preventDefault();
    if (gameRunning) {
        if (isLetter(event.key)) {
            // letter detected
            if (currentWord.includes(event.key)) {
                dashifiedWord = replaceDashifiedLetters(dashifiedWord, currentWord, event.key);
                showDashifiedWord(dashifiedWord);
            } else {
                if (!usedLetters.some(item => item.includes(event.key))) {
                    updateHangManImage();
                    updateUsedLetters(event.key);
                } else {
                    this.alert('You guessed this before.');
                }

            }
        }
        //check if game is over - e.g. no more dashes in string
        if (!dashifiedWord.includes('_')) {
            gameRunning = false;
            this.alert("Game Over - You Won!");
        }
    }
});

function updateUsedLetters(letter) {
    usedLetters.push(letter);
    document.getElementById("usedLetters").innerHTML = usedLetters;
}

function updateHangManImage() {
    currentHangmanImage++;
    if (currentHangmanImage > MAX_TRIES) {
        gameRunning = false;
        alert('Game Over');
    } else {
        let hangManImageName = 'images/hangman/' + currentHangmanImage + ".png";
        document.getElementById("hangManImage").src = hangManImageName;
    }
}


function dashifyWord(word) {
    //replace a word with dashes
    return "_".repeat(word.length);
}


function getRandomWord() {
    let r = Math.floor(Math.random() * WORDLIST.length);
    return WORDLIST[r];
}