export const jokesString = (jokesObject) => {
  return `
    <h4>Q: ${jokesObject.question}</h4>
    <h4>A: ${jokesObject.answer}</h4>
  `
}