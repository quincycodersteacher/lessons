function calculate() {
    let answer = 0;
    let n1 = parseInt(inputValue[N1]);
    let n2 = parseInt(inputValue[N2]);
    switch (inputValue[OPERATOR]) {
        case '+':
            answer = n1 + n2;
            break;
        case '-':
            answer = n1 - n2;
            break;
        case '*':
            answer = n1 * n2;
            break;
        case '/':
            answer = n1 / n2;
            break;
    }
    reset();
    return answer;
}

const N1 = 0, OPERATOR = 1, N2 = 2;
let currInputIndex;
let inputValue = [];

function btnClick(clicked_id) {
    let display = clicked_id;
    switch (clicked_id) {
        case '+':
            setOperator(clicked_id);
            break;
        case '-':
            setOperator(clicked_id);
            break;
        case '*':
            setOperator(clicked_id);
            break;
        case '/':
            setOperator(clicked_id);
            break;
        case '=':
            display = calculate();
            break;
        default:
            inputValue[currInputIndex]+=clicked_id;
            display = inputValue[currInputIndex];
            break;
    }
    
    document.getElementById("screen").value = display;
}

function setOperator(operator) {
    inputValue[OPERATOR] = operator;
    currInputIndex = N2;
}

function reset() {
    currInputIndex = 0;
    inputValue[N1] = '';
    inputValue[N2] = '';
    inputValue[OPERATOR] = '';
}

reset();