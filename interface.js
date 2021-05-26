// var firebaseRef = firebase.database().ref("sala/distancia");
// document.querySelector('#send').addEventListener('click', () => {
//     distancia = document.getElementById('number').value;
//     firebaseRef.set(2);
//     console.log(1);
// });
firebase.database().ref('sala/distancia').on('value', snapshot =>{
    let l = snapshot.val();
    console.log('>>', l)
});