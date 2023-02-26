
var selectedDoor = "You have selected Door ";
var stayText = "Would you like to stay with your original door? ";
var change = "Choose one of the two doors avaliable.";
var lose = "Sorry. You lost the car...";
var win = "Hooray! You won the car!"

var eliminate = Math.floor(Math.random() * 3);
var prize;
let selected = false;

// Originally called openDoor MUST CHANGE
function openDoor(i) {

    if (selected == false) {

        prize = Math.floor(Math.random() * 3);

        while (eliminate == i || eliminate == prize) {
            eliminate = Math.floor(Math.random() * 3);
        }

        document.images[eliminate].src = "images/tooBad.png"

        document.getElementById("selected").innerHTML = selectedDoor + (i + 1);
        document.getElementById("switch").innerHTML = stayText + change;
        selected = true;
    }
    else {
        if (i == eliminate) {
            alert("This door has been removed!")
        }
        else if (i == prize) {
            document.images[i].src = "images/mhcar.png";
            document.getElementById("result").innerHTML = win;
        }
        else {
            document.images[i].src = "images/tooBad.png";
            document.getElementById("result").innerHTML = lose;
        }
    }
}
