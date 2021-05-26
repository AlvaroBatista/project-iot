// var firebaseRef = firebase.database().ref("sala/distancia");
// document.querySelector('#send').addEventListener('click', () => {
//     distancia = document.getElementById('number').value;
//     firebaseRef.set(2);
//     console.log(1);
// });


/** Recebendo dados do firebase */
firebase.database().ref('sala/distancia').on('value', snapshot => {
    var distancia = '';
    distancia = snapshot.val();
    console.log('distancia >>', distancia)
    document.getElementById('distanciaValue').innerText = distancia;
});

firebase.database().ref('sala/temperatura').on('value', snapshot => {
    var temperatura = '';
    temperatura = snapshot.val();
    console.log('temperatura >>', temperatura)
    document.getElementById('temperaturaValue').innerText = temperatura + ' C°';
});

firebase.database().ref('sala/luminosidade').on('value', snapshot => {
    var luminosidade = '';
    luminosidade = snapshot.val();
    console.log('luminosidade >>', luminosidade)
    document.getElementById('luminosidadeValue').innerText = luminosidade;
});

firebase.database().ref('sala/umidade').on('value', snapshot => {
    var umidade = '';
    umidade = snapshot.val();
    console.log('umidade >>', umidade)
    document.getElementById('umidadeValue').innerText = umidade;
});

firebase.database().ref('sala/porta').on('value', snapshot => {
    let porta = document.querySelector('#porta');
    var portaValue = '';
    portaValue = snapshot.val();
    console.log('porta >>', portaValue);
    if (portaValue == '1') {
        porta.src = 'porta_fechada.jpg';
        document.getElementById('porta-title').innerText = 'Porta Fechada';
    } else {
        porta.src = 'porta_aberta.jpg';
        document.getElementById('porta-title').innerText = 'Porta Aberta';
    }
});

firebase.database().ref('sala/presenca').on('value', snapshot => {
    let presenca = document.querySelector('#presenca');
    var presencaValue = '';
    presencaValue = snapshot.val();
    console.log('presenca >>', presencaValue);
    if (presencaValue == '1') {
        presenca.src = 'presenca_detectada.jpg';
        document.getElementById('presenca-title').innerText = 'Presença Detectada';
    } else {
        presenca.src = 'presenca_nao_detectada.jpg';
        document.getElementById('presenca-title').innerText = 'Presença Não Detectada';
    }
});