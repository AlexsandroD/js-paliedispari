

const numeroPari = document.getElementById('pari');
const numeroDispari = document.getElementById('dispari');


numeroPari.addEventListener('click', function(){
    let numero = parseInt(prompt('scegliere un numero da 1 a 5'))
    while(numero < 0 || numero > 5){
        numero = parseInt(prompt('scegliere un numero da 1 a 5'))
    }
    console.log(numero)
    const computer = random(1,5);
    console.log(computer);
    const somma = sum(numero,computer) ;
    console.log(verificaPari(somma))
})

numeroDispari.addEventListener('click', function(){
    let numero = parseInt(prompt('scegliere un numero da 1 a 5'))
    while(numero < 0 || numero > 5){
        numero = parseInt(prompt('scegliere un numero da 1 a 5'))
    }
    console.log(numero)
    const computer = random(1,5);
    console.log(computer);
    const somma = sum(numero,computer) ;
    console.log(verificaDispari(somma));
})





function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function sum(num1, num2){
    num1 + num2;
}

function verificaDispari(valore){
    if(valore % 2 !== 0){
        return 'giocatore 1 vince';
    }
    return 'computer vince';
}

function verificaPari(valore){
    if(valore % 2 == 0){
        return 'giocatore 1 vince';
    }
    return 'computer vince';
}