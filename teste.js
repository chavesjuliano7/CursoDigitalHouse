
function aberturas (listaPai, minimoDeAlunosPresentes) {

    let quaisDiasTiveramAula = [];

    for ( let indexPai = 0; indexPai < listaPai.length; indexPai++ ){

        let listaFilho = listaPai[indexPai];
        let contadorDeAlunosAtrasado = 0;
        let contadorDeAlunosPontuais = 0;
        let temAula = false

        for(let indexFilho = 0; indexFilho < listaFilho.length; indexFilho++ ){

            let horarioDeChegado = listaFilho[indexFilho]

            let alunosAtrasado = (horarioDeChegado > 0);
            let alunosPontuais = (horarioDeChegado <= 0);

            if (alunosAtrasado) {

                contadorDeAlunosAtrasado = contadorDeAlunosAtrasado + 1;
            }

            if (alunosPontuais) {

                contadorDeAlunosPontuais = contadorDeAlunosPontuais + 1;
            }

        }

        temAula = (contadorDeAlunosPontuais == minimoDeAlunosPresentes)
        quaisDiasTiveramAula.push(temAula);
       
    }

    console.log(quaisDiasTiveramAula)
    return quaisDiasTiveramAula

}
let alunosDaSegunda = [10, -5, 3, 0];
let alunosDaTerca = [10, -5, 3, 4];
let alunosDaQuarta = [10, -5, 3, 0];

aberturas([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 1)

//verificar a igualdade do minimoDeAlunosPresentes












// Para Usain Bolt calcular sua dieta é preciso o uso de um simulador, que de acordo com o número de voltas diga quantas calorias é preciso consumir, para poder realizar um exercício de trote.

// As calorias são calculadas da seguinte maneira: calorias (que consome a cada volta), ou seja 5 multiplicado (*) pelo número da volta atual, já que cada vez as voltas consomem mais e mais calorias.

// Sabendo isso, crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida.

// Por exemplo:

//  caloriasDeTrote(2)
// Deveria devolver 15 onde 5 calorias são da primeira volta (5 * 1) mais 10 calorias da segunda (5 * 2).


function fatorial (numeroNatural) {
    let resultado= [];
    let escala = 1;

    for (let i = 1; i<= numeroNatural; i++) {
        escala = escala * i
        resultado.push(escala)
        console.log("fatorial -> resultado", resultado)
    }
  console.log(resultado);
  console.log("fatorial -> resultado", resultado)
    console.log("fatorial -> resultado", resultado)
    return resultado
    
}



function fatorial1 (numeroNatural) {
    let resultado= [];
    console.log("resultado", resultado)
    let escala = 1;
    
    for (let i = 0; i<= numeroNatural; i++) {

        const ehZero = (i === 0)

        if (ehZero) {
            resultado.push(1)
            console.log("resultado", resultado)
        }
        if (!ehZero) {
            escala = escala * i
            resultado.push(escala)
            console.log("resultado", resultado)
        }
       
    }
console.log(resultado);
console.log("resultado", resultado)
    console.log("resultado", resultado)
    return resultado
    
}



function fatorial1 (numeroNatural) {
    let resultado= [];
    console.log("resultado", resultado)
    let escala = 1;
    
    for (let i = 0; i<= numeroNatural; i++) {

        const ehZero = (i === 0)

        if (ehZero) {
            resultado.push(1)
            console.log("resultado", resultado)
        }
        if (!ehZero) {
            escala = escala * i
            resultado.push(escala)
            console.log("resultado", resultado)
        }
       
    }
    console.log(resultado);
    console.log("resultado", resultado)
    return escala
    
}


function produto ( lista ) {
    
    let listaMultiplicada = [];
    let multiplicador = 1;
    let listaItem = 0;
    for ( let i = 0; i < lista.length ; i ++) {
       
        listaItem = lista[i] * multiplicador
        multiplicador = lista[i]
        
    }

    listaMultiplicada.push(listaItem)
    console.log(listaItem)

}

function produto ( lista ) {
    
    let multiplicador = 1;
    listaItem = 0;
    for ( let i = 0; i < lista.length ; i ++) {
       
        listaItem = lista[ i ] * multiplicador;
        multiplicador = listaItem;

    }
    console.log( listaItem );
    return listaItem
}


function maisMenos(lista) {

    let itemPositivo = 0;
    let itemZero = 0;
    let itemNegativo = 0;

    let listaItem = [];

    let listaItemUm = 0;
    let listaItemDois = 0;
    let listaItemTres = 0

    for (let i = 0; i < lista.length; i++ ) {

        let validaPositivo = (lista[i] > 0);
        let validaZero = (lista[i] === 0);
        let validaNegativo = ( lista[i] < 0 );

        if (validaPositivo) {
            itemPositivo++
            listaItemUm   = (itemPositivo / lista.length);
      
        }

        if ( validaZero) {
            itemZero++
            listaItemDois = ( itemZero / lista.length);
        }

        if ( validaNegativo){
           
            itemNegativo++
            listaItemTres = ( itemNegativo / lista.length)
        }
        
    }
    listaItem.push(listaItemUm);
    listaItem.push(listaItemDois);
    listaItem.push(listaItemTres);
    console.log(listaItem)
    
}



function escada (alturaDaArvore) {  

    let degrau = '#';
    let espaco = ' ';

    let lista = []
    for (let i = 1; i <= alturaDaArvore; i++) {

        montagem =   espaco.repeat(alturaDaArvore - i) + degrau.repeat(i)
        lista.push(montagem)

    }

    return lista
}




function alturaArvoreUtopica (ciclos) {

    let = contadorDePeriodo = 4;
    let inverno = 0;
    let primavera = 1;
    let verao = 2;
    let outono = 3;

    let tamanhoDaArvore = 1;
    let array = [];
    
    

    for (let i = 0; i < ciclos; i++) {
     
        if (inverno === i ) {
            array.push(inverno)
            // console.log ('inverno',i)
            inverno += 4 ;
            
        }
        if (primavera === i) {
            array.push(primavera)
            // console.log ('primavera', i )
            tamanhoDaArvore = tamanhoDaArvore * 2;
            primavera += 4 ;
            
        }

        if (verao === i){
            array.push(verao)
            //  console.log('verao', i)
            tamanhoDaArvore = tamanhoDaArvore + 1
            verao += 4 ;
            
        }

        if (outono === i ) {
            array.push(outono)
            //console.log ('outono', i)
            outono += 4 ;
            
        }
        

    }

    console.log(array)

    console.log(tamanhoDaArvore)

    
}




function alturaArvoreUtopica ( ciclos ) {
    let primavera = 1;
    let verao = 0;
    let tamanho = 1;
    let crescimento = [];

    for ( let i = 1; i <= ciclos ; i ++ ){


        // if ( i == 0){
        //     console.log ( 'entrou')
        // }

        if ( primavera === (i % 2) ){
            
            tamanho = tamanho * 2;
        }
        
        if (verao === (i % 2)){
           
            tamanho = tamanho + 1;
        }

       

    }
    
    console.log(tamanho)
    return( tamanho)

}







function alturaArvoreUtopica ( ciclos ) {
    let primavera = 1;
    let verao = 0;
    let tamanho = 1;

    for ( let i = 1; i <= ciclos ; i ++ ){

        if ( primavera === (i % 2) ){
            
            tamanho = tamanho * 2;
        }
        
        if (verao === (i % 2)){
           
            tamanho = tamanho + 1;
        }

    }
    
    console.log(tamanho)
    return( tamanho)

}

function acontece (listaDeHorarioDeEntrada, minimoDeAlunosPresentes ) {

    let alunosAtrasado = 0;
    let alunosPontuais = 0;
    let temAula = false;

    for ( let i = 0; i < listaDeHorarioDeEntrada.length; i++){

        let atrasado = (listaDeHorarioDeEntrada[i] > 0 );
        let pontual = (listaDeHorarioDeEntrada[i] <= 0 );

        if (atrasado) {
            alunosAtrasado = alunosAtrasado + 1;
        }

        if (pontual) {
            alunosPontuais = alunosPontuais + 1;
        }

    }
   
    temAula = (alunosPontuais >= minimoDeAlunosPresentes)
    console.log("acontece" + temAula)
    return temAula;

}




function aberturas (listasDaSemana, minimoDeAlunosPresentes ) {

    let temAula = false;
    let listaDeAulasNaSemana = []

    for( let i = 0; i < listasDaSemana.length; i++) {

       temAula =  acontece (listasDaSemana[i], minimoDeAlunosPresentes);

       listaDeAulasNaSemana.push(temAula)
    }

    console.log( listaDeAulasNaSemana)

}


let alunosDaSegunda = [10, -5, 3, 0];
let alunosDaTerca = [10, -5, 3, 4];
let alunosDaQuarta = [10, -5, 3, 20];

aberturas([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 2)