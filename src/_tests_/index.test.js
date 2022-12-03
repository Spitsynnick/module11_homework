import { repeatWord } from "../index.js";

describe("tests for repeatWord function", () => {
    
    // тестирование передачи функции строки "apple" и целого числа 3
    it("should return word 'apple' 3 times", () => { 
        const result = repeatWord("apple", 3);
        expect(result).toBe("apple1,apple2,apple3,");
    }),

    // тестирование передачи функции строки "apple" и дробного числа 2.5
    it("should return word 'apple' 2 times", () => { 
        const result = repeatWord("apple", 2.5);
        expect(result).toBe("apple1,apple2,");
    }),

    // тестирование передачи функции строки "apple" и числа 0
    it("should return empty string", () => { 
        const result = repeatWord("apple", 0);
        expect(result).toBe("");
    }), 

    // тестирование передачи фунции невалидных данных: строки "apple" и отрицательного числа
    it("should return undefined", () => {
        const result = repeatWord("apple", -5); 
        expect(result).toBe(undefined);
    }),

    // тестирование передачи фунции невалидных данных: строки "apple" и  логического значения
    it("should return undefined", () => {
        const result = repeatWord("apple", false); 
        expect(result).toBe(undefined);
    }),

    // тестирование передачи фунции невалидных данных: логического значения и положительного числа
    it("should return boolean true converted to string 2 times", () => { 
        const result = repeatWord(true, 2); 
        expect(result).toBe("true1,true2,");
    }),

    // тестирование передачи фунции невалидных данных: 2-х положительных чисел
    it("should return number 10 converted to string 3 times", () => { 
        const result = repeatWord(10, 3); 
        expect(result).toBe("101,102,103,");
    }),

    // тестирование передачи фунции невалидных данных: массива данных и положительного числа
    it("should return array converted to string", () => { 
        const result = repeatWord([1, 2, 3], 1); 
        expect(result).toBe("1,2,31,");
    }),

    // тестирование передачи фунции невалидных данных: объекта и положительного числа
    it("should return object converted to string", () => {
        const result = repeatWord({a: 1, b: 2}, 1); 
        expect(result).toBe("[object Object]1,");
    }),

    // тестирование передачи фунции невалидных данных: функции и положительного числа
    it("should return function converted to string", () => {
        const result = repeatWord(function testFunction(){}, 1); 
        expect(result).toBe("function testFunction() {}1,");
    })
})


/*
    Результат: 
    Test Suites: 1 passed, 1 total
    Tests:       10 passed, 10 total
*/


