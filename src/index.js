const Capitalize = (word = "") =>
  word.slice(0, 1).toUpperCase() + word.slice(1);

const reverseString = (word = "") => {
  let funWord = word;
  let reversed = "";
  while (funWord.length >= 1) {
    reversed += funWord.at(funWord.length - 1);
    funWord = funWord.substring(0, funWord.length - 1);
  }
  return reversed;
};

const calculator = {
  add: (num1, num2) => num1 + num2,

  subtract: (num1, num2) => num1 - num2,

  divide: (num1, num2) => num1 / num2,

  multiply: (num1, num2) => num1 * num2,
};

const ceaserCipher = (shift, string = "") => {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  let encrypted = "";
  for (let i = 0; i < string.length; i += 1) {
    if (string.at(i) === " ") encrypted += " ";
    else {
      let index = abc.indexOf(string.at(i).toLowerCase()) + shift;
      if (index > 25) index -= 26;
      if (index < 0) index += 26;
      encrypted += abc.at(index);
    }
  }
  return encrypted.toLowerCase();
};

const analyzeArray = (array = []) => {
  const object = {
    average:
      array.reduce((accumulator, currentValue) => accumulator + currentValue) /
      array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
  return object;
};

export { Capitalize, reverseString, calculator, ceaserCipher, analyzeArray };
