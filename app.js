var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var errorDiv = document.querySelector("#error-div")

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getUrl(input){
    return (serverUrl + "?" + "text=" + input)
}

function errorHandling(error){
    console.log("Error occured : " + error);
    alert("There was an error with the server. Try again later")
}

function clickHandler() {
    if(txtInput.value != ""){
        errorDiv.style.display = "none";
        var textInput = txtInput.value;

        fetch(getUrl(textInput))
            .then(response => response.json())
            .then(json => {
                var outputText = json.contents.translated;
                outputDiv.innerText = outputText;
            })
            .catch(errorHandling)
    }
    else{
        errorDiv.innerText = "Please enter sentence or a word"
    }
};

btnTranslate.addEventListener("click", clickHandler)