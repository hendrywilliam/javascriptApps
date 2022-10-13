const input = document.getElementById("input");
const search = document.getElementById("search");
const noun = document.getElementById("noun");
const verb = document.getElementById("verb");
const adjective = document.getElementById("adjective");

function fetchApi(word) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(response => response.json()).then(result => data(result, word)).catch((err)=> console.log(err));
}

function data(result, word) {
    if(result.title) {
        console.log(`We cant find the definition of ${word}`);
    } else {
        const getNoun = result[0].meanings[0].definitions[0].definition;
        const getVerb = result[0].meanings[1].definitions[0].definition;
        const getAdjective = result[0].meanings[2].definitions[0].definition;
        noun.innerText = getNoun;
        verb.innerText = getVerb;
        adjective.innerText = getAdjective;
    }
}

search.addEventListener("click", () => {
    fetchApi(input.value);
})