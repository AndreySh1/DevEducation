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