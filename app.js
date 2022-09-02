var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getUrl(input){
    return (serverUrl + "?" + "text=" + input);
}

function clickHandler() {
    var textInput = txtInput.value;

    fetch(getUrl(textInput))
        .then(response => response.json)
        .then(json => {
            var outputText = json.contents.translated;
            outputDiv.innerText = outputText;
        })
}

btnTranslate.addEventListener("click", clickHandler);