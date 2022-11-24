// 1. Даны два целых числа x и n, напишите функцию для вычисления x^n
//      решение 1 - рекурсивно O(n)
//      решение 2 - улучшить решение 1 до O(lon n)

//      решение 1 
function pow(x, n) {
    if (n === 0) return 1;
    return n == 1 ? x : x * pow(x, n - 1)
}
console.log(pow(2, 3));

//      решение 2
function power(x, n) {
    if (n === 0) return 1;

    if (n % 2 === 0) {
        return power(x * x, n / 2)
    } else {
        return x * power(x * x, (n - 1) / 2)
    }
}
console.log(power(2, 6));
console.log(power(2, 1));



//2. Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, 
//который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.

let arr1 = [100, 112, 256, 349, 770];
let arr2 = [72, 86, 113, 119, 265, 445, 892];

// вариант 1
function getElement(arr1, arr2, k) {

    let res = []
    let m = arr1.length,
        n = arr2.length,
        i = 0,
        j = 0,
        c = 0

    if (k > m + n - 1) return `введите число от 0 до ${m + n - 1}`

    while (i < m && j < n) {
        res[c++] = (arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++]
    }

    while (i < m) {
        res[c++] = arr1[i++]
    }

    while (j < n) {
        res[c++] = arr2[j++]
    }
    return res[k];
}

console.log(getElement(arr1, arr2, 7));

// вариант 2
function getElement1(arr1, arr2, k) {
    let res = arr1.concat(arr2);
    let len = res.length

    if (k > len - 1) return `введите число от 0 до ${len - 1}`

    for (let i = 0; i < len; i++) {
        let indexMin = i
        for (let j = i + 1; j < len; j++) {
            if (res[j] < res[indexMin]) {
                indexMin = j
            }
        }
        let tmp = res[i]
        res[i] = res[indexMin]
        res[indexMin] = tmp
    }
    return res[k];
}
console.log(getElement1(arr1, arr2, 7));




// Имея отсортированный массив arr[] и число x, напишите функцию, которая подсчитывает вхождения x в arr[].
// Ожидаемая временная сложность O(Log n)
let arr = [1, 1, 2, 2, 2, 2, 3]
// x = 2
// Вывод: 4 раза

// 1) найти индекс 1-ого совпадения (left)
// 2) найти индекс последнего совпадения (right)
// 3) найти разницу left - right + 1 

// 1. поисх левого индекса 

function leftIndex(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let res;

    while (left <= right) {
        let mid = Math.round((left + right) / 2)
        if (arr[mid] === x) {
            res = mid
            right = mid - 1
        } else if (arr[mid] > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return res;
}

// 2. поисх правого индекса 

function rightIndex(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let res;

    while (left <= right) {
        let mid = Math.round((left + right) / 2)
        if (arr[mid] === x) {
            res = mid
            left = mid + 1
        } else if (arr[mid] > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return res;
}

// 3. расчет количества элементов 

function countElem(arr, x) {
    const right = rightIndex(arr, x);
    const left = leftIndex(arr, x);

    const res = right - left + 1;

    return isNaN(res) ? 0 : res
}

// проверка

console.log(countElem(arr, 1));     //2
console.log(countElem(arr, 2));     //4
console.log(countElem(arr, 3));     //1
console.log(countElem(arr, 4));     //0














