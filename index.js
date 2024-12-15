let operator = ''; 
function clickevent(op) {
    operator = op;
}       
function handleClick() {
    let x = document.getElementById('input1').value;
    let y = document.getElementById('input2').value;
    x = parseFloat(x);
    y = parseFloat(y);   
    console.log(x)

    if (operator === 'ADD') {
        document.getElementById('input3').value = x + y;
    }
    else if (operator === 'MIN') {
        document.getElementById('input3').value = x - y;
    }
    else if (operator === 'DIV') {
        if (y === 0) {
            alert('Cannot divide by zero!');
            return;
        }
        document.getElementById('input3').value = x / y;
    }
    else if (operator === 'MUL') {
        document.getElementById('input3').value = x * y;
    }
    else {
        alert('Please select a valid operator.');
    }
}

