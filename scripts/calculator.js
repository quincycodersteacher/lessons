function calculate() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let op = document.getElementById('operation').value;
    let stmt = num1 + op + num2;
    alert(eval(stmt));
}