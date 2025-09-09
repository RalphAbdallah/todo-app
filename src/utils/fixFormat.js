export const fixFormat = (text) => {
  let arrayText = Array.from(text)
  return arrayText[0].toUpperCase() + arrayText.slice(1).join('').toLowerCase()
}

export const initialsOnly = (word) => {
  const wordArray = Array.from(word)
  return wordArray.slice(0,3) 
}

