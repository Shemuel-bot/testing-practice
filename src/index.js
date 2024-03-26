const Capitalize = (word = '') =>word.slice(0,1).toUpperCase() + word.slice(1)

const reverseString = ( word = '') =>{
    let funWord = word
    let reversed = '';
    while(funWord.length >=1) {
        reversed += funWord.at(funWord.length-1)
        funWord = funWord.substring(0, funWord.length-1)
    }
    return reversed;
}

const calculator = {
    add: (num1, num2)=>num1 + num2,
    
    subtract: (num1, num2)=>num1-num2,

    divide: (num1, num2)=> num1/num2,

    multiply: (num1, num2)=> num1*num2
}
export {Capitalize, reverseString, calculator};