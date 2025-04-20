let turn = "x";

let title = document.getElementById("title");
let logo = document.getElementById("logo1");
let squares = [];

// this function check who is winner
function winner() {

    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }
    // check who is winner by all condition 
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        title.innerHTML = `${squares[1]} is winner `;
        document.getElementById("item" + 1).style.background = "red";
        document.getElementById('item' + 2).style.background = "red";
        document.getElementById('item' + 3).style.background = "red";
        setInterval(function () { title.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != "") {
        title.innerHTML = `${squares[4]} is winner `;
        document.getElementById("item" + 4).style.background = "red";
        document.getElementById('item' + 5).style.background = "red";
        document.getElementById('item' + 6).style.background = "red";
        setInterval(function () { title.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != "") {
        title.innerHTML = `${squares[8]} is winner `;
        document.getElementById("item" + 7).style.background = "red";
        document.getElementById('item' + 8).style.background = "red";
        document.getElementById('item' + 9).style.background = "red";
        setInterval(function () { title.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "") {
        title.innerHTML = `${squares[1]} is winner `;
        document.getElementById("item" + 1).style.background = "red";
        document.getElementById('item' + 4).style.background = "red";
        document.getElementById('item' + 7).style.background = "red";
        setInterval(function () { title.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != "") {
        title.innerHTML = `${squares[5]} is winner `;
        document.getElementById("item" + 2).style.background = "red";
        document.getElementById('item' + 5).style.background = "red";
        document.getElementById('item' + 8).style.background = "red";
        setInterval(function () { title.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != "") {
        title.innerHTML = `${squares[6]} is winner `;
        document.getElementById("item" + 3).style.background = "red";
        document.getElementById('item' + 6).style.background = "red";
        document.getElementById('item' + 9).style.background = "red";
        setInterval(function () { title.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != "") {
        title.innerHTML = `${squares[5]} is winner `;
        document.getElementById("item" + 1).style.background = "red";
        document.getElementById('item' + 5).style.background = "red";
        document.getElementById('item' + 9).style.background = "red";
        setInterval(function () { title.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != "") {
        title.innerHTML = `${squares[5]} is winner `;
        document.getElementById("item" + 3).style.background = "red";

        document.getElementById('item' + 5).style.background = "red";
        document.getElementById('item' + 7).style.background = "red";
        setInterval(function () { title.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }
}

// onclick square write X - 0
function game(id) {
    let element = document.getElementById(id);
    if (turn === "x" && element.innerHTML == "") {
        element.innerHTML = "X";
        title.innerHTML = "O";
        title.style.color = "white";
        logo.classList.add("hidden");
        turn = "o";
    }
    else if (turn === "o" && element.innerHTML == "") {
        element.innerHTML = "O";
        title.innerHTML = "X";
        turn = "x";
    }
    winner(); // التحقق من الفائز بعد كل حركة
}
