var doms = {
    input: document.querySelector('#email'),
    btn: document.querySelector('#btn'),
}

function checkIfisEmpty() { 
    var input = doms.input.value;
    var inputs = doms.input;
    var error = document.querySelector('#error');
    clearTimeout(input);
    if (input === '') { 
        error.textContent = "Please enter your email address";
        error.style.color = "red";
        inputs.style.background = '#ff9494';
        setTimeout(() => { 
            error.textContent = '';
            inputs.style.background = '#fff';
        },4000)
    }
}

doms.btn.addEventListener('click', checkIfisEmpty);