
'use client'

import { useEffect, useState } from "react";

export default function Home() {

  const jsonData = require("../json/words.json");
  const [word, setWord] = useState("");
  const [words, setWords] = useState<String[]>([]);
  const [empty, setEmpty] = useState(false);


  useEffect(() => {
    let wordsJSON = JSON.parse(JSON.stringify(jsonData));
    setWords(wordsJSON);
  }, []);

  const getWord = () => {
    console.log(words.length);
    if (words.length == 0) {
      setEmpty(true);
      setWord("as palavras acabaram");
    } else {
      let random = Math.floor(Math.random() * words.length);
      setWord(words[random].toUpperCase());
      words.splice(random, 1);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <button
        onClick={getWord}
        type="button"
        className="px-8 py-3 font-semibold rounded bg-gray-900 text-gray-100"
      >
        NOVA PALAVRA
      </button>

      <div className="flex container min-h-screen flex-col items-center justify-between p-8 mt-8 text-gray-900">
        {empty ? (
          <h1 className="lg:text-5xl text-4xl text-red-500 bg-red-100 border border-red-500 rounded-lg p-4">
            {word}
            <p className="lg:text-xl text-xl">atualize a página para recomeçar</p>
          </h1>
        ) : (
          <h1 className="lg:text-9xl text-5xl">
            {word}
          </h1>
        )}
      </div>
    </main>
  )
}
