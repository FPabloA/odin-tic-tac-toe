const gameWrapper = document.querySelector('#game-display');
const gameHeader = document.querySelector('#game-header');

function createGameBoard () {
    let boardList = ["", "", "","", "", "","", "", ""];
    let turn = 0;
    let playerTurn = "X";

    const nextTurn = function () {
        turn++;
        if (this.playerTurn == "X"){
            this.playerTurn = "O";
        }
        else {
            this.playerTurn = "X";
        }
        gameHeader.innerHTML = this.playerTurn + " Player's Turn"
        fillDisplay(this);
        checkWin();
    }

    const checkWin = function () {
        //check rows
        if (boardList[0] != "" && boardList[0] == boardList[1] && boardList[1] == boardList[2]){
            gameHeader.innerHTML =  boardList[0] + " Player Wins!";
            displayWin(this.boardList);
        }
        else if (boardList[3] != "" && boardList[3] == boardList[4] && boardList[4] == boardList[5]){
            gameHeader.innerHTML =  boardList[3] + " Player Wins!";
            displayWin(this.boardList);
        }
        else if (boardList[6] != "" && boardList[6] == boardList[7] && boardList[7] == boardList[8]){
            gameHeader.innerHTML =  boardList[6] + " Player Wins!";
            displayWin(this.boardList);
        }
        
        //check cols
        else if (boardList[0] != "" && boardList[0] == boardList[3] && boardList[3] == boardList[6]){
            gameHeader.innerHTML =  boardList[0] + " Player Wins!";
            displayWin(this.boardList);
        }
        else if (boardList[1] != "" && boardList[1] == boardList[4] && boardList[4] == boardList[7]){
            gameHeader.innerHTML =  boardList[1] + " Player Wins!";
            displayWin(this.boardList);
        }
        else if (boardList[2] != "" && boardList[2] == boardList[5] && boardList[5] == boardList[8]){
            gameHeader.innerHTML =  boardList[2] + " Player Wins!";
            displayWin(this.boardList);
        }

        //check diagonals
        else if (boardList[0] != "" && boardList[0] == boardList[4] && boardList[4] == boardList[8]){
            gameHeader.innerHTML =  boardList[0] + " Player Wins!";
            displayWin(this.boardList);
        }
        else if (boardList[2] != "" && boardList[2] == boardList[4] && boardList[4] == boardList[6]) {
            gameHeader.innerHTML =  boardList[2] + " Player Wins!";
            displayWin(this.boardList);
        }

        //check if tied
        else if (turn == 9){
            gameHeader.innerHTML =  "Tied!";
        }
    }

    return { boardList, playerTurn, nextTurn};
}

function fillDisplay (board) {
    while (gameWrapper.firstChild) {
        gameWrapper.removeChild(gameWrapper.firstChild);
    }

    for (i = 0; i < board.boardList.length; i++){
        const newSpace = document.createElement("div");
        newSpace.id = i;
        newSpace.className = "game-space"
        newSpace.innerHTML = board.boardList[i];

        if (board.boardList[i] == ""){
            newSpace.onclick = spaceClick;
        }
        
        gameWrapper.appendChild(newSpace);
    }
}

function displayWin (boardList) {
    while (gameWrapper.firstChild) {
        gameWrapper.removeChild(gameWrapper.firstChild);
    }

    for (i = 0; i < board.boardList.length; i++){
        const newSpace = document.createElement("div");
        newSpace.id = i;
        newSpace.className = "game-space"
        newSpace.innerHTML = board.boardList[i];
        
        gameWrapper.appendChild(newSpace);
    }
}

function spaceClick () {
    // console.log(this.id);
    // console.log(board.playerTurn);
    board.boardList[this.id] = board.playerTurn;
    board.nextTurn()
}

let board = createGameBoard();
fillDisplay(board);