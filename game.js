let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        if (!checkwinner()) {
            checkdraw();
        }
    });
});

const disabledboxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enabledboxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msgcontainer.classList.add("hide");
};

const showmessage = (message) => {
    msg.innerHTML = message;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 !== "" && p1 === p2 && p2 === p3) {
            showmessage(`Congratulations!! Winner is ${p1}`);
            return true;
        }
    }
    return false;
};

const checkdraw = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false;
        }
    }
    showmessage("It's a draw!");
    return true;
};

const resetgame = () => {
    turnO = true;
    enabledboxes();
};

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
