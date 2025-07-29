function createGameBoard () {
    let boardList = ["", "", "","", "", "","", "", ""];
    let turn = 0;
    let playerTurn = "X";

    const nextTurn = function () {
        turn++;
        if (playerTurn == "X"){
            playerTurn = "O";
        }
        else {
            playerTurn = "X";
        }
    }

    const checkWin = function () {
        //check rows
        if (boardList[0] == boardList[1] && boardList[1] == boardList[2]){
            return boardList[0];
        }
        else if (boardList[3] == boardList[4] && boardList[4] == boardList[5]){
            return boardList[3];
        }
        else if (boardList[6] == boardList[7] && boardList[7] == boardList[8]){
            return boardList[6];
        }
        
        //check cols
        else if (boardList[0] == boardList[3] && boardList[3] == boardList[6]){
            return boardList[0];
        }
        else if (boardList[1] == boardList[4] && boardList[4] == boardList[7]){
            return boardList[0];
        }
        else if (boardList[2] == boardList[5] && boardList[5] == boardList[8]){
            return boardList[0];
        }

        //check diagonals
        else if (boardList[0] == boardList[4] && boardList[4] == boardList[8]){
            return boardList[0];
        }
        else if (boardList[2] == boardList[4] && boardList[4] == boardList[6]) {
            return boardList[2];
        }

        //check if tied
        else if (turn == 9){
            return "tie";
        }
        else {
            return "";
        }
    }
    return { boardList, playerTurn, nextTurn, checkWin };
}