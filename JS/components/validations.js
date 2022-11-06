import { priceCalculator } from "./calculator.js";

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
    surname: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const form = document.getElementById('formTicket');
const inputs = document.querySelectorAll('#formTicket input');


export const campos = {
    name: false,
    surname: false,
    email: false,
}

const validateForm = (e)=>{
    switch (e.target.name){
        case 'name':
                validarCampo(expresiones.nombre, e.target, 'name');
            break;

        case 'surname':
            validarCampo(expresiones.surname, e.target, 'surname');
            break;

        case 'email':
            validarCampo(expresiones.correo, e.target, 'email');
            break;

    }
}

// ```````````````         

const validarCampo = (expresion, input, campo)=>{
    if (expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('border-danger');
        document.getElementById(`${campo}`).classList.add('border-success');
        document.querySelector(`.invalid-feedback-${campo}`).classList.remove('d-flex');
        campos[campo] = true;
    }else{
        document.getElementById(`${campo}`).classList.add('border-danger');
        document.querySelector(`.invalid-feedback-${campo}`).classList.add('d-flex');
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.name && campos.surname && campos.email){
        priceCalculator();
    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'Debes completar el formulario',
            icon: 'error',
            confirmButtonText: 'Ok!'
})
    }
});