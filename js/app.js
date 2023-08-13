// ENIGMA - Ejercicio 1
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = "";
var transformedText = "";

var writeText = (boxId) => {
    text = document.getElementById(boxId).value;
    text = text.toLowerCase();
};

var writeTextA =() => writeText("text-box-a");
var writeTextB = () => writeText("text-box-b");


var transformText = (text, alphabetA, alphabetB) => {

    for (letter of text) {
        var indexLetter = alphabetA.indexOf(letter);
            if (indexLetter === -1){
                var transformedLetter = letter;
            } else {
                var transformedLetter = alphabetB [indexLetter];
            };

        transformedText += transformedLetter;
    };
};

var encrypt = () => {

    transformText (text, plainAlphabet, encryptedAlphabet);
    document.getElementById("text-box-b").innerHTML = transformedText;
};

var decrypt = () => {

    transformText (text, encryptedAlphabet, plainAlphabet);
    document.getElementById("text-box-a").innerHTML = transformedText;
};

// Registro de eventos
document.getElementById("button-encrypt").addEventListener("click", encrypt);
document.getElementById("button-decrypt").addEventListener("click", decrypt);

document.getElementById("text-box-a").addEventListener("change", writeTextA);
document.getElementById("text-box-b").addEventListener("change", writeTextB);



// GENERADOR ALETORIO - Ejercicio 2

var randomPick = (n, min, max) => {

    var numbersList = [];

    var range = max - min + 1;

    var getRandom = () => {
        newNumber = Math.floor (Math.random() * range) + min;
    };

    var checkNumber = () => {
        var indexOfNewNumber = numbersList.indexOf(newNumber);

        if (indexOfNewNumber == -1) {
            numbersList.push(newNumber);
        } else {
            getRandom();
            checkNumber();
        };
    };

    if (n <= range) {
        for(i = 0; i < n; i++) {
            if (numbersList.length == 0) {
                getRandom ();
                numbersList.push(newNumber);
            } else {
                    getRandom();
                    checkNumber();
            }
        };
        return console.log("Listado de números: " + numbersList);

    } else {
        console.log("¡ERROR! - La cantidad de números que deseas es mayor que la cantidad de números disponibles.")
    };
};

randomPick (4, 5, 10);

