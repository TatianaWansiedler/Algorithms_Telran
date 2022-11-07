public class Main {

//    доп 1
    void method (int a, int b) {
        while (a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
    }
    //1.В лучшем случае  одна операция сравнения (если числа равны)
    //2. В худшем случае бесконечное выполнение цикла (если одно из чисел отрицательно, оба отрицательные или одно из чисел 0) 


//    доп 2
    void method(int n) {
        for (int i = 0; i < n / 2; i++) {                 // 1-й for сложность N/2
            for (int j = 1; j + n / 2 <= n; j++) {        // 2-й for сложность N/2
                for (int k = 1; k <= n; k = k * 2) {      // 3-й for сложность приблизительно LogN (при n = 1_000 - 10 итераций (Log_1000 = 9,9))
                    System.out.println("I am expert!");                                     //(при n = 1_000_000 - 20 итераций (Log_1_000_000 = 19,9))
                }
            }
        }
    }
    // константы не учитываем
    // В худшем случае O(N*N*LogN) или O(N^2 * LogN)


//    доп 3 
    void method3(int n) {
        for (int i = 1; i <= 100; i++) {                    // 1-й for сложность N
            for (int j = 1; j <= 100; j = j + i) {           // 2-й for сложность ???
                System.out.println("I am expert!");
            }
        }
    }

}
