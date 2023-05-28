// функция получает один аргумент (массив целых чисел)
// возвращает сумму положительных элементов
function summator_positive_elements(someArray){
    let sum = 0;
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] > 0) {
            sum += someArray[i];
        }
    }
    return sum;
}

// функция которая получает один аргумент (массив целых чисел)
// возвращает наибольшее число из массива.
function max_number(someArray){
    let number = 0;
    for(let i = 0; i < someArray.length; i++){
        if (someArray[i] > number) {
            number = someArray[i];
        }
    }
    return number;
}

// функция которая вычисляет площадь окружности.
function circle_area(radius){
    return Math.PI * radius ** 2;
}