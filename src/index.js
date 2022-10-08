// Функция repeatWord(word, count) принимает слово и количество раз для его повторения. 
// Например, если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3" на одной строке.

export function repeatWord(word, count) {
    if (typeof word != "string") { // Если передать функции 1-м аргументом не строку, преобразовать этот тип данных к строке
        word = String(word);
    };

    if ((typeof count != "number") || count < 0) { // Если передать функции 2-м аргументом не число или отрицательное число, - выйти из функции
        return;     
    }; 
    
    let words = "";
    for (let i = 1; i <= count; i++) {
        words += word + i + ",";
    };
    return words;    
}   



        
       
   