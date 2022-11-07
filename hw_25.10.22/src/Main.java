
public class Main {
    //   todo:
    //     1. Linear Search
    //        Given an array arr[] of N elements, the challenge is to write a function to find a given element x in arr[] .
    //    Линейный поиск используется для поиска ключевого элемента среди нескольких элементов.
    //    Линейный поиск сегодня используется меньше, потому что он медленнее, чем бинарный поиск и хеширование.
    //    Алгоритм:
    //    Шаг 1: Обход массива
    //    Шаг 2: Сопоставьте ключевой элемент с элементом массива
    //    Шаг 3: Если ключевой элемент найден, верните позицию индекса элемента массива.
    //    Шаг 4: Если ключевой элемент не найден, верните -1
    public static int indexOf(int arr[], int x) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == x) {
                return i;
            }
        }
        return -1;
    }
    // todo:
    //    2. Find the element that appears once in a sorted array
    //    Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.
    //    Простое решение состоит в обходе массива слева направо. Поскольку массив отсортирован, мы легко можем найти нужный элемент.
    //    Алгоритм:
    //    Шаг 1: Обход массива через один элемент
    //    Шаг 2: Если элемент отличается от первого то мы нашли не задублированный элемент
    //    Шаг 3: Вернем элемент или позицию в массиве
    //    Шаг 4: Если ключевой элемент не найден, верните -1 или что то еще :)
    //            …
    //    Шаг 5: Исправить ошибку ArrayIndexOutOfBoundsException

    public static int findElement(int arr[]) {
        int l = arr.length;

        if (l == 1) return arr[0];

        if (arr[l-2] != arr[l-1]) return arr[l-1];

        for (int i = 0; i < l - 1; i += 2) {
            if (arr[i] != arr[i + 1]) {
                return arr[i];
            }
        }
        return -1;
    }

    // вывод результатов
    public static void main(String[] args) {
        //Задача 1
        int[] arr = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println(indexOf(arr, 5));  //результат -> 4

        //Задача 2
        int[] arr1 = new int[]{1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10}; //массив с незадублированным элементом
        int[] arr2 = new int[]{1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10}; //массив с незадублированным последним элементом
        int[] arr3 = new int[]{1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10}; //массив только с задублированными элементами
        int[] arr4 = new int[]{1}; //массив с 1 элементом
        System.out.println(findElement(arr1)); // результат -> 7
        System.out.println(findElement(arr2)); // результат -> 10
        System.out.println(findElement(arr3)); // результат -> -1
        System.out.println(findElement(arr4)); // результат -> 1

    }

}