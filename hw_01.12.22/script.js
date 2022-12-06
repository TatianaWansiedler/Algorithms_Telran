//1. Реализовать алгоритм пузырьковой сортировки bubble sort

let arr100 = new Array(100)            // массив на 100 элементов 
for (let i = 0; i < arr100.length; i++) {
    arr100[i] = Math.floor(Math.random() * 100)
}

let arr = new Array(1000)               // массив на 1000 элементов 
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100)
}


let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count++
        }
    }
    return array
}

bubbleSort(arr100)
console.log('bubbleSort-count : ', count);   // 4950 итераций для массива из 100 элементов

bubbleSort(arr)
console.log('bubbleSort-count : ', count);   // 499500 итераций для массива из 1000 элементов


// 2. Произвести замер количества итераций quick sort vs bubble sort(так же можно замерить merge sort, если есть такое желание).
// Для этого нужно создать счетчик и увеличвать его значение на 1 в каждой итерации. 
// (подсказка: для алгоритмов mergeSort и quickSort счетчик нужно увеличивать в функциях, которые осуществляют сортировку, 
// а не в функциях, которые выполняют деление массива)

// quickSort()
let count1 = 0;

function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = getPivotIndex(arr, low, high)
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
    }
}
function getPivotIndex(arr, low, high) {
    let pivot = arr[high]
    let pivotIndex = low - 1

    for (let i = low; i < high; i++) {
        if (pivot > arr[i]) {
            pivotIndex++

            let tmp = arr[pivotIndex]
            arr[pivotIndex] = arr[i]
            arr[i] = tmp
        }
        count1++
    }
    let tmp = arr[pivotIndex + 1]
    arr[pivotIndex + 1] = arr[high]
    arr[high] = tmp

    return pivotIndex + 1
}

quickSort(arr100, 0, arr100.length - 1)
console.log('quickSort-count: ', count1);   // 600 итераций для массива из 100 элементов

quickSort(arr, 0, arr.length - 1)
console.log('quickSort-count: ', count1);    // 13160 итераций для массива из 1000 элементов



//  mergeSort()

let count2 = 0;

function mergeSort(arr, left, right) {
    if (left < right) {
        let middle = Math.floor((left + right) / 2)
        mergeSort(arr, left, middle)
        mergeSort(arr, middle + 1, right)

        merge(arr, left, middle, right)
    }
}

function merge(arr, left, middle, right) {
    let size1 = middle - left + 1;
    let size2 = right - middle;

    let arrL = []
    let arrR = []

    for (let i = 0; i < size1; i++) {
        arrL[i] = arr[left + i]
    }
    for (let i = 0; i < size2; i++) {
        arrR[i] = arr[middle + 1 + i]
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < size1 && j < size2) {
        if (arrL[i] <= arrR[j]) {
            arr[k] = arrL[i]
            i++
        } else {
            arr[k] = arrR[j]
            j++
        }
        k++
        count2++
    }
    while (i < size1) {
        arr[k] = arrL[i]
        i++
        k++
        count2++
    }
    while (j < size2) {
        arr[k] = arrR[j]
        j++
        k++
        count2++
    }
}

mergeSort(arr100, 0, arr100.length - 1);
console.log('mergeSort-count : ', count2);   //672 итераций для массива из 100 элементов

mergeSort(arr, 0, arr.length - 1);
console.log('mergeSort-count : ', count2);   //10648 итераций для массива из 1000 элементов



//3. Используя функцию Date.now(), посчитать производительность в миллисекундах для алгоритмов 
//bubble sort и quick sort (опционально можно сделать проверку для merge sort). 

//массив на 100000 элементов
let array = new Array(100000)
for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 50)
}
// // 1 - производительность для bubbleSort()
let start = Date.now()
bubbleSort(array)
let finish = Date.now()
console.log(finish - start)             // 30693 мс

// 2 - производительность для quickSort()
let start1 = Date.now()
quickSort(array, 0, array.length - 1)
let finish1 = Date.now()
console.log(finish1 - start1)           // 170 мс

// // 2 - производительность для mergeSort()
let start2 = Date.now()
mergeSort(array, 0, array.length - 1)
let finish2 = Date.now()
console.log(finish2 - start2)           // 25 мс

// 4. Сделать выводы на основе полученных результатов 

// 1. Самым не эффективным алгоритмом сортировки в данном случае является bubbleSort(), его сложность составляет O(n^2)
// при измерении производительность в миллисекундах оказался самым медленным 

// 2. Результаты вычисления количества итераций для mergeSort() и quickSort() приблизительно одинаковые 
// и составляют O(n log n) - итераций. 
// Но в худшем случае сложность quickSort() может составлять O(n^2) и уже при увеличении количесва элементов массива до 1_000_000 
// функция  quickSort() превысила стек вызовов 'RangeError: Maximum call stack size exceeded'

// при измерении производительности в миллисекундах самым быстрым и эффективным оказался mergeSort()

