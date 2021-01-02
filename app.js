var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server! Try again later")
}
function clickHandler() {
    // outputDiv.innerText="asasasasasasasasasasas" + txtInput.value
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText)).then(response => response.json()).then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; 
        console.log(json.contents.translated)}
        ).catch(errorHandler) //to get the only required output.
};
btnTranslate.addEventListener("click", clickHandler);

