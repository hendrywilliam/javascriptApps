import fetch from "node-fetch";

const fetchApi = async() => {
    const result = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/fun');
    const data = await result.json();
    console.log(data);
}

fetchApi();