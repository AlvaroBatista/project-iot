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


var luminosidade;
var temperatura;
var porta;
var multimidia;
var ligado = "#ffc107";
var desligado = "black";

firebase.database().ref('sala/set_luminosidade').on('value', snapshot => {
    luminosidade = snapshot.val();
    console.log("set_luminosidade>>", luminosidade);
    if (luminosidade === 0) {
        document.getElementById('icon_light').style.color = desligado;
    } else if (luminosidade === 1) {
        document.getElementById('icon_light').style.color = ligado;
    }
});

firebase.database().ref('sala/set_ar').on('value', snapshot => {
    temperatura = snapshot.val();
    console.log("set_temperatura>>", temperatura);
    if (temperatura === 0) {
        document.getElementById('icon_thermostat').style.color = desligado;
    } else if (temperatura === 1) {
        document.getElementById('icon_thermostat').style.color = ligado;
    }
});

firebase.database().ref('sala/set_porta').on('value', snapshot => {
    porta = snapshot.val();
    console.log("set_porta>>", porta);
    if (porta === 0) {
        document.getElementById('icon_sensor-door').style.color = desligado;
    } else if (porta=== 1) {
        document.getElementById('icon_sensor-door').style.color = ligado;
    }
});

firebase.database().ref('sala/set_multimidia').on('value', snapshot => {
    multimidia = snapshot.val();
    console.log("set_multimidia>>", multimidia);
    if (multimidia === 0) {
        document.getElementById('icon_theaters').style.color = desligado;
    } else if (multimidia === 1) {
        document.getElementById('icon_theaters').style.color = ligado;
    }
});


/** Enviando dados ao firebase */
var db = firebase.database();

var lampRef = db.ref('sala/set_luminosidade');
var setPortaRef = db.ref('sala/set_porta');
var setArRef = db.ref('sala/set_ar');
var setMultimidiaRef = db.ref('sala/set_multimidia');



window.addEventListener("load", function () {
    document.querySelector('#btn-light').addEventListener('click', () => {
        
        if (luminosidade === 0) {
            lampRef.set(1);
        } else if (luminosidade === 1) {
            lampRef.set(0);
        }
    });

    document.querySelector('#btn_thermostat').addEventListener('click', () => {
        
        if (temperatura === 0) {
            setArRef.set(1);
        } else if (temperatura === 1) {
            setArRef.set(0);
        }
    });

    document.querySelector('#btn_theaters').addEventListener('click', () => {
        
        if (multimidia === 0) {
            setMultimidiaRef.set(1);
        } else if (multimidia === 1) {
            setMultimidiaRef.set(0);
        }
    });

    document.querySelector('#btn_icon_sensor-door').addEventListener('click', () => {
        
        if (porta === 0) {
            setPortaRef.set(1);
        } else if (porta === 1) {
            setPortaRef.set(0);
        }
    });
});