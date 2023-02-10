var numberOfButtons, discount;
function verifynumberOfButtons() {
    numberOfButtons = document.getElementById("myNumber").value;
    if (numberOfButtons < 3 || numberOfButtons > 9) {
        alert("Please enter a number between 3 and 9.");
        document.getElementById("myNumber").value = '';
        return 0;
    }
    discount = numberOfButtons * 10;
    return 1;
}
var winNumber;
function getWinNumber() {
    winNumber = Math.floor(Math.random() * numberOfButtons + 1);
}
function createButtons() {
    if (verifynumberOfButtons() == 0) {
        return;
    }
    getWinNumber();
    for (let i = 1; i <= numberOfButtons; ++i) {
        let button = document.createElement("button");
        button.innerHTML = "Try me!";
        button.classList.add("btn-dark");
        button.id = i;
        document.getElementById("showbuttons").appendChild(button);
        button.addEventListener('click', function() {
            if (button.id == luckyButton) {
                document.getElementById("showbuttons").innerHTML = "Congratulations! You won a " + discount + "% discount code!";
            } else {
                document.getElementById("showbuttons").innerHTML = "Sorry! But we offer you a 5% discount code!";
            }
        })
    }
    document.getElementById("start").disabled = true;
}
