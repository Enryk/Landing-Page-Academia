const form = document.querySelector('#formulario'); // capturou o formulario

form.addEventListener('submit', function (event) { // adicionou um evento no formulario 
    event.preventDefault(); // nao vai deixar o formulario ser enviado
    const inputPeso = event.target.querySelector('#peso'); // captorou os dados do input
    const inputAltura = event.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value); //converteu os inputs para Numeros
    const altura = Number(inputAltura.value);

    if (!peso) { //se informar uma outra coisa que não seja numero, retorna os if
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false)
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)

    const msg = 'Seu IMC é ' + imc + ' (' + nivelImc + ').';

    setResultado(msg, true)

});

function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 
                   'Sobrepeso', 'Obesidade grau 1', 
                   'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    
    if (imc >= 34.9) return nivel[4];
    
    if (imc >= 29.9) return nivel[3];
    
    if (imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];
    
    if (imc < 18.5) return nivel[0];
    
}

function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}