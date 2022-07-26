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
    const nivel = ['Abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico.', 
                   'Peso normal. Parabéns, você está com o peso normal. Recomendo que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.', 
                   'Sobrepeso. Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.', 
                   'Obesidade grau 1. Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde.', 
                   'Obesidade grau 2. Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo.', 
                   'Obesidade grau 3. Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.'];

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
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}