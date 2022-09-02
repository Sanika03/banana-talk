var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getUrl(input){
    return (serverUrl + "?" + "text=" + input);
}

function errorHandling(error){
    console.log("Error occured : " + error);
    alert("There was an error with the server. Try again later");
}

function clickHandler() {
    var textInput = txtInput.value;

    fetch(getUrl(textInput))
        .then(response => response.json())
        .then(json => {
            var outputText = json.contents.translated;
            outputDiv.innerText = outputText;
        })
        .catch(errorHandling);
}

btnTranslate.addEventListener("click", clickHandler);