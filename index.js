//    Task 1
function myFunction (a,b) {
    let result
    if (a%2 == 0) {
        result = a*b;
    } else {
       result = a+b;
    }
    console.log('Ваш результат: ' + result);
}
 
myFunction (5,2);


//Task2(a)
 
function findQuarter (x,y) {
    let result = (x < 0) ? (y > 0) ? console.log('Точка принадлежит 1-й четверти') : console.log('Точка принадлежит 3-й четверти') :
                (x > 0) ? (y > 0) ? console.log('Точка принадлежит 2-й четверти') : console.log('Точка принадлежит 4-й четверти') :
                console.log('Точка принадлежит оси координат');
}
 
findQuarter (-1,-1)