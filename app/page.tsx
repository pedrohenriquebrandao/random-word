
'use client'

import { useState } from "react";

export default function Home() {

  const jsonData = require("../json/words.json");
  const [word, setWord] = useState("");
  const [words, setWords] = useState<any[]>([]);

  let wordsJSON = JSON.parse(JSON.stringify(jsonData));

  const getWord = () => {
    setWords(wordsJSON);
    
    let random = Math.floor(Math.random() * words.length);
    setWord(words[random].toUpperCase());
    console.log(words);
    words.splice(words[random], 1);
    console.log(words);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-300">
      <button
        onClick={getWord}
        type="button"
        className="px-8 py-3 font-semibold rounded bg-gray-900 text-gray-100"
      >
        NOVA PALAVRA
      </button>

      <div className="flex min-h-screen flex-col items-center justify-between p-8 mt-8 text-gray-900 text-8xl">
        <h1>
          {word}
        </h1>
      </div>
    </main>
  )
}
