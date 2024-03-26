const Capitalize = (word = '') =>word.slice(0,1).toUpperCase() + word.slice(1)

const reverseString = ( word = '') =>{
    let funWord = word
    let reversed = '';
    for (let i = 0; i < word.length; i+=1) {
        reversed += funWord.at(funWord.length-1)
        funWord = funWord.substring(0, funWord.length-1)
    }
    return reversed;
}
export {Capitalize, reverseString};