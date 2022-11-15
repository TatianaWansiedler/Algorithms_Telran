//Задача заключается в следующем. Имеется три стержня — левый, средний и правый. 
//На левом стержне находятся n дисков, диаметры которых различны. Диски упорядочены 
//по размеру диаметра, сверху лежит наименьший, снизу — наибольший. Требуется перенести
// диски с левого стержня на правый, используя средний стержень как вспомогательный.
// Головоломка имеет следующие два правила:
//       1. Вы не можете поместить больший диск на меньший диск.
//       2. За один раз можно перемещать только один диск.

// Рекурсивно :

function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return
    } else {
        towerOfHanoi(n - 1, fromRod, usingRod, toRod)
        console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
        towerOfHanoi(n - 1, usingRod, toRod, fromRod)
    }
}
towerOfHanoi(3, 'Left-rod', 'Right-rod', 'Middle-rod')

// Итеративно : -