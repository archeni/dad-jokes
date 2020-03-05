import { jokesData } from "./jokesDataProvider.js";
import { jokesString } from "./jokesHTML.js";

const HTMLTarget = document.querySelector('.tellJokes')

export const jokesMaker = () => {
  const jokesArr = jokesData();
  
  for (const jokesObject of jokesArr) {
    const stringDom = jokesString(jokesObject);
    HTMLTarget.innerHTML += stringDom;
  }
}