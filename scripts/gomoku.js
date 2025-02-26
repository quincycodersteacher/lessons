const GoMoku = {

    ROWS:19,
    COLS:19,

    // Initialize the game
    init() {
        this.initBoard();
        document
            .getElementById("reset")
            .addEventListener("click", () => this.reset());
    },

    initBoard() {
        board = document.getElementById("board");
        board.innerHTML = ""; // Clear previous board
        console.log('initboard');
        for (i=0; i < this.ROWS*this.COLS; i++) {
            console.log('in loop'+i);
            cell = document.createElement("div");
            cell.classList.add("cell");
            //cell.dataset.index = i;
            board.appendChild(cell);
        }
        board.addEventListener("click", (e) => this.handleClick(e)); // Handle clicks on the board
    },

    reset() {
        alert('reset');
    }
}


// Start the game
GoMoku.init();