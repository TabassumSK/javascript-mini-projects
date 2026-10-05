const darkMode = document.getElementById('dark-mode-toggle');
const body = document.body;
const calculator = document.querySelector('.calculator');
const button = document.querySelectorAll('button');
const display = document.querySelector('.display');

darkMode.addEventListener('click', () => {
    body.style.backgroundColor = body.style.backgroundColor === 'black' ? 'white' : 'black';
    calculator.style.backgroundColor = calculator.style.backgroundColor === 'white' ? 'black' : 'white';
    button.forEach((btn) => {
        btn.style.backgroundColor = btn.style.backgroundColor === 'black' ? '#f0f0f0' : 'black';
        btn.style.color = btn.style.color === 'white' ? 'black' : 'white';
    });
});

let firstNum = "";
let secondNum = "";
let operator = "";

button.forEach((btn) => {
    btn.addEventListener('click', () => {

        const value = btn.innerText;

        if(value == 'C') {
            firstNum = '';
            secondNum = '';
            operator = '';
            display.value = '';
        }

        else if(value >= '0' && value <= '9') {
            display.value += value;
        }

        else if(value == '.') {
            display.value += value;
        }

        else if(value == '+' || value == '-' || value == '*' || value == '/' || value == '%') {
            firstNum = Number(display.value);
            operator = value;
            display.value = '';
        }

        else if(value == '=') {
            secondNum = Number(display.value);

            let result;
            if(operator == '+') {
                result = firstNum + secondNum; 
            }

            else if(operator == '-') {
                result = firstNum - secondNum; 
            }

            else if(operator == '*') {
                result = firstNum * secondNum; 
            }

            else if(operator == '/') {
                result = firstNum / secondNum; 
            }

            else if(operator == '%') {
                console.log(operator);
                console.log(firstNum);
                console.log(secondNum);
                result = firstNum % secondNum; 
            }

            display.value = result;
        }

        else if(value == '←') {
            display.value = display.value.slice(0, -1);
        }
    })
});




// // 1. Maintain the state of the calculator
// let state = {
//     currentValue: '0',     // The string currently being typed/displayed
//     previousValue: null,   // The first number stored when an operator is pressed
//     operator: null,        // The active math operation (+, -, *, /)
//     resetDisplay: false    // Flag to clear display when a number follows an operator
// };

// const display = document.getElementById("display");

// // 2. Helper function to update the DOM UI
// function updateDisplay() {
//     display.textContent = state.currentValue;
// }

// // 3. Handle when a number button (0-9) is pressed
// function inputNumber(num) {
//     if (state.resetDisplay) {
//         state.currentValue = num;
//         state.resetDisplay = false;
//     } else {
//         // Prevent multiple leading zeros, but allow trailing decimals (e.g., "0.005")
//         state.currentValue = state.currentValue === '0' ? num : state.currentValue + num;
//     }
//     updateDisplay();
// }

// // 4. Handle when the decimal point button (.) is pressed
// function inputDecimal() {
//     if (state.resetDisplay) {
//         state.currentValue = '0.';
//         state.resetDisplay = false;
//         updateDisplay();
//         return;
//     }
    
//     // Prevent adding multiple decimal points to a single number
//     if (!state.currentValue.includes('.')) {
//         state.currentValue += '.';
//     }
//     updateDisplay();
// }

// // 5. Handle when an operator button (+, -, *, /) is pressed
// function handleOperator(nextOperator) {
//     const { currentValue, previousValue, operator } = state;
//     const inputValue = parseFloat(currentValue);

//     // If an operator is pressed but a previous calculation is pending
//     if (operator && state.resetDisplay) {
//         state.operator = nextOperator; // Swap operator if user changes mind
//         return;
//     }

//     if (previousValue === null && !isNaN(inputValue)) {
//         state.previousValue = inputValue;
//     } else if (operator) {
//         const result = performCalculation(previousValue, inputValue, operator);
//         state.currentValue = String(result);
//         state.previousValue = result;
//         updateDisplay();
//     }

//     state.resetDisplay = true;
//     state.operator = nextOperator;
// }

// // 6. Perform the actual math safely without eval()
// function performCalculation(firstOperand, secondOperand, operator) {
//     switch (operator) {
//         case '+': return firstOperand + secondOperand;
//         case '-': return firstOperand - secondOperand;
//         case '*': return firstOperand * secondOperand;
//         case '/': 
//             if (secondOperand === 0) return 'Error'; // Division by zero safety
//             return firstOperand / secondOperand;
//         default: return secondOperand;
//     }
// }

// // 7. Handle when the equals (=) button is pressed
// function handleEquals() {
//     const { currentValue, previousValue, operator } = state;
//     if (!operator || previousValue === null) return;

//     const inputValue = parseFloat(currentValue);
//     const result = performCalculation(previousValue, inputValue, operator);

//     state.currentValue = String(result);
//     state.previousValue = null;
//     state.operator = null;
//     state.resetDisplay = true; // Next number press starts fresh
//     updateDisplay();
// }

// // 8. Handle Clear (AC) functionality
// function clearAll() {
//     state.currentValue = '0';
//     state.previousValue = null;
//     state.operator = null;
//     state.resetDisplay = false;
//     updateDisplay();
// }
