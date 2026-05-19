const producto = document.getElementById('producto');
const plazo = document.getElementById('plazo');
const extras = document.querySelectorAll('.extra');
const total = document.getElementById('total');

function calcular(){

let precio = parseInt(producto.value);

extras.forEach(extra => {
if(extra.checked){
precio += parseInt(extra.value);
}
});

if(plazo.value >= 30){
precio *= 0.9;
}

total.value = precio.toFixed(2) + ' €';

}

producto.addEventListener('change', calcular);
plazo.addEventListener('input', calcular);

extras.forEach(extra => {
extra.addEventListener('change', calcular);
});

calcular();

document.getElementById('formulario').addEventListener('submit', function(e){

const nombre = document.getElementById('nombre').value;
const apellidos = document.getElementById('apellidos').value;
const telefono = document.getElementById('telefono').value;
const email = document.getElementById('email').value;
const condiciones = document.getElementById('condiciones').checked;

const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,15}$/;
const regexApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,40}$/;
const regexTelefono = /^[0-9]{9}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!regexNombre.test(nombre) ||
!regexApellidos.test(apellidos) ||
!regexTelefono.test(telefono) ||
!regexEmail.test(email) ||
!condiciones){

alert('Revisa los datos del formulario');
e.preventDefault();

}else{

alert('Formulario enviado');

}

});