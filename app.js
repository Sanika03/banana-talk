var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getUrl(input){
    return (serverUrl + "?" + "text=" + input);
}

function clickHandler() {
    outputDiv.innerText = "banana nana baba banana" + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);