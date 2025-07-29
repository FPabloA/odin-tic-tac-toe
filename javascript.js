const gameWrapper = document.querySelector('#game-display');
const gameHeader = document.querySelector('#game-header');

function createGameBoard (name1, name2) {
    let boardList = ["", "", "","", "", "","", "", ""];
    let turn = 0;
    let playerTurn = "X";
    const xPlayer = name1;
    const oPlayer = name2;

    const nextTurn = function () {
        console.log(this);
        turn++;
        if (this.playerTurn == "X"){
            this.playerTurn = "O";
            gameHeader.innerHTML = this.oPlayer + "'s Turn"
        }
        else {
            this.playerTurn = "X";
            gameHeader.innerHTML = this.xPlayer + "'s Turn"
        }
        
        fillDisplay(this);
        checkWin();
    }

    const checkWin = function () {
        //check rows
        console.log(this);
        if (boardList[0] != "" && boardList[0] == boardList[1] && boardList[1] == boardList[2]){
            if (boardList[0] == "X") {
                gameHeader.innerHTML =  xPlayer + " Wins!";
            }
            else {
                gameHeader.innerHTML =  oPlayer + " Wins!";
            }
            displayWin(this.boardList);
        }
        else if (boardList[3] != "" && boardList[3] == boardList[4] && boardList[4] == boardList[5]){
            if (boardList[3] == "X") {
                gameHeader.innerHTML =  xPlayer + " Wins!";
            }
            else {
                gameHeader.innerHTML =  oPlayer + " Wins!";
            }
            displayWin(this.boardList);
        }
        else if (boardList[6] != "" && boardList[6] == boardList[7] && boardList[7] == boardList[8]){
            if (boardList[6] == "X") {
                gameHeader.innerHTML =  xPlayer + " Wins!";
            }
            else {
                gameHeader.innerHTML =  oPlayer + " Wins!";
            }
            displayWin(this.boardList);
        }
        
        //check cols
        else if (boardList[0] != "" && boardList[0] == boardList[3] && boardList[3] == boardList[6]){
            if (boardList[0] == "X") {
                gameHeader.innerHTML =  xPlayer + " Wins!";
            }
            else {
                gameHeader.innerHTML =  oPlayer + " Wins!";
            }
            displayWin(this.boardList);
        }
        else if (boardList[1] != "" && boardList[1] == boardList[4] && boardList[4] == boardList[7]){
            if (boardList[1] == "X") {
                gameHeader.innerHTML =  xPlayer + " Wins!";
            }
            else {
                gameHeader.innerHTML =  oPlayer + " Wins!";
            }
            displayWin(this.boardList);
        }
        else if (boardList[2] != "" && boardList[2] == boardList[5] && boardList[5] == boardList[8]){
            if (boardList[2] == "X") {
                gameHeader.innerHTML =  xPlayer + " Wins!";
            }
            else {
                gameHeader.innerHTML =  oPlayer + " Wins!";
            }
            displayWin(this.boardList);
        }

        //check diagonals
        else if (boardList[0] != "" && boardList[0] == boardList[4] && boardList[4] == boardList[8]){
            if (boardList[0] == "X") {
                gameHeader.innerHTML =  xPlayer + " Wins!";
            }
            else {
                gameHeader.innerHTML =  oPlayer + " Wins!";
            }
            displayWin(this.boardList);
        }
        else if (boardList[2] != "" && boardList[2] == boardList[4] && boardList[4] == boardList[6]) {
            if (boardList[2] == "X") {
                gameHeader.innerHTML =  xPlayer + " Wins!";
            }
            else {
                gameHeader.innerHTML =  oPlayer + " Wins!";
            }
            displayWin(this.boardList);
        }

        //check if tied
        else if (turn == 9){
            gameHeader.innerHTML =  "Tied!";
        }
    }

    return { boardList, playerTurn, xPlayer, oPlayer, nextTurn};
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

let board;

function startGame () {
    const xName = document.querySelector("#x-player").value;
    const oName = document.querySelector("#o-player").value;
    board = createGameBoard(xName, oName);
    fillDisplay(board);
    document.querySelector("#game-prompt").style.display = 'none';
    gameWrapper.style.display = "grid"
    gameHeader.innerHTML = xName + "'s Turn"
    gameHeader.style.display = "block"
    document.querySelector("#restart-btn").style.display = "block";
    document.querySelector("#x-player").value = "";
    document.querySelector("#o-player").value = "";
}

function restartGame () {
    board = createGameBoard(board.xPlayer, board.oPlayer);
    fillDisplay(board);
    gameHeader.innerHTML = board.xPlayer + "'s Turn"
}
//let board = createGameBoard();
//fillDisplay(board);