const input = document.getElementById("input");
const search = document.getElementById("search");
const list = document.getElementById("container");
let audio;

async function fetchApi(word) {
    const api_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const response = await fetch(api_url);
    const json_data = await response.json();
    data(json_data, word);
}

function data(result, word) {
    if(result.title) {
        console.log(`We cant find the definition of ${word}`);
    } else {
        const {meanings} = result[0];
        meanings.forEach((meaning) => { 
            const {partOfSpeech, definitions} = meaning;
            const partOfSpeech_heading = document.createElement("h3");
            const definition_paragraph = document.createElement("p");
            partOfSpeech_heading.innerText = partOfSpeech;
            definition_paragraph.textContent = definitions[0].definition;
            list.append(partOfSpeech_heading, definition_paragraph);
            partOfSpeech_heading.classList.add("heading");
            console.log(definitions[0].definition);
        })
    };
};

search.addEventListener("click", () => {
    fetchApi(input.value);
    list.innerHTML =''
})