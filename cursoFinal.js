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

    return listaDeAulasNaSemana

}


let alunosDaSegunda = [10, -5, 3, 0];
let alunosDaTerca = [10, -5, 3, 4];
let alunosDaQuarta = [10, -5, 3, 0];

aberturas([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 2)




//expected 1 to deeply equal [ true, false, true ]