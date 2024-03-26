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
      if(index < 0) index += 26;
      encrypted += abc.at(index);
    }
  }
  return encrypted.toLowerCase();
};

function findAverage(array = []){
    let final = 0;
    array.forEach((x)=>{final+=x})
    final /=array.length;
    return final;
}
function findMin(array = []){
    let min = array[0];
    array.forEach(x=> {if(x<min) min = x})
    return min
}
function findMax(array = []){
    let max = array[0]
    array.forEach(x => {if(x>max) max = x})
    return max
}
const analyzeArray = (array = [])=>{
    const object = {};
    object.average = findAverage(array);
    object.min = findMin(array);
    object.max = findMax(array);
    object.length = array.length;
    return object
}


export { Capitalize, reverseString, calculator, ceaserCipher, analyzeArray};
