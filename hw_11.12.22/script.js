/* 
Написать реализацию динамического массива в js, которая поддерживает 
добавление и удаление элементов по индексу со сдвигом (все элементы, начиная 
с переданного индекса до конца, сдвигаются либо на 1 вниз, либо на 1 вверх)
*/

let array = [1, 2, 3, 4, 5]

let size = array.length


function addAt(array, index, value) {

    for (let i = size - 1; i >= index; i--) {
        array[i + 1] = array[i];
    }

    array[index] = value;

}

addAt(array, 2, 0);
console.log(array);


function removeAt(array, index) {
    for (let i = index; i < size; i++) {
        array[i] = array[i + 1];
    }
    array.length--
}
removeAt(array, 4)
console.log(array);


