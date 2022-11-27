import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [word, setWords] = useState("");
  const [results, setResults] = useState([]);

  const searchWords = (word) => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        setResults(response.data[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div className="w-full h-screen text-center  justify-center">
        <div>
          <p className="text-white">Dictionary</p>
          <input
            type="text"
            className="text-black"
            onChange={(e) => setWords(e.target.value)}
          />
          <button
            onClick={() => {
              searchWords(word);
            }}
          >
            Search
          </button>
          <div>
            <p>{results.word}</p>
            {results.meanings?.map((meaning) => {
              return (
                <div>
                  <p className="text-red-600">{meaning.partOfSpeech}</p>
                  {meaning.definitions.map((definition) => {
                    return <p>{definition.definition}</p>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
