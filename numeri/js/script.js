

// const numeroPari = document.getElementById('pari');
// const numeroDispari = document.getElementById('dispari');


// numeroPari.addEventListener('click', function(){
//     let numero = parseInt(prompt('scegliere un numero da 1 a 5'))
//     while(numero < 0 || numero > 5){
//         numero = parseInt(prompt('scegliere un numero da 1 a 5'))
//     }
//     console.log(numero)
//     const computer = random(1,5);
//     console.log(computer);
//     const somma = sum(numero,computer) ;
//     document.getElementById('result').innerHTML = somma + verificaDispari(somma);
// })

// numeroDispari.addEventListener('click', function(){
//     let numero = parseInt(prompt('scegliere un numero da 1 a 5'))
//     while(numero < 0 || numero > 5){
//         numero = parseInt(prompt('scegliere un numero da 1 a 5'))
//     }
//     console.log(numero)
//     const computer = random(1,5);
//     console.log(computer);
//     const somma = sum(numero,computer) ;
//     document.getElementById('result').innerHTML = somma  + verificaDispari(somma);
// })


const scelta = prompt('scegli tra pari e dispari');
// const array = ['pari','dispari']
// while(scelta !== array[0] || scelta !== array[1]){
//     console.log(errore)
// }

if(scelta == 'pari'){

    let numero = parseInt(prompt('scegliere un numero da 1 a 5'))
    while(numero < 0 || numero > 5){      numero = parseInt(prompt('scegliere un numero da 1 a 5'))    }
    console.log(numero)
    const computer = random(1,5);
    console.log(computer);
    const somma = sum(numero,computer) ;
    document.getElementById('result').innerHTML = somma + verificaDispari(somma);

}else if(scelta == 'dispari'){
        let numero = parseInt(prompt('scegliere un numero da 1 a 5'))
    while(numero < 0 || numero > 5){
        numero = parseInt(prompt('scegliere un numero da 1 a 5'))
    }
    console.log(numero)
    const computer = random(1,5);
    console.log(computer);
    const somma = sum(numero,computer) ;
    document.getElementById('result').innerHTML = somma  + verificaDispari(somma);
}else{
    alert('non hai inserito un valore corretto')
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function sum(num1, num2){
    return num1 + num2;
}

function verificaDispari(valoreDisp){
    if(valoreDisp % 2 !== 0){
        return ' giocatore 1 Dispari  vince';
    }
    return ' computer Pari vince';
}

function verificaPari(valorePari){
    if(valorePari % 2 == 0){
        return 'giocatore 1 Pari  vince';
    }
    return 'computer Dispari vince';
}