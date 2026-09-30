let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#reset");

let turnx = true; // true = X, false = O

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

const resetGame = () => {

    turnx = true;

    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
};

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        console.log("box was clicked");

        if (turnx) {
            box.innerText = "X";
            turnx = false;
        }
        else {
            box.innerText = "O";
            turnx = true;
        }

        box.disabled = true;

        checkWinner();
    });

});

const disable = () => {

    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {

    console.log("Congratulations, winner is", winner);

    disable();
};

const checkWinner = () => {

    for (let pattern of winpattern) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (
            pos1Val != "" &&
            pos2Val != "" &&
            pos3Val != ""
        ) {

            if (
                pos1Val === pos2Val &&
                pos2Val === pos3Val
            ) {

                console.log("winner", pos1Val);

                showWinner(pos1Val);
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);