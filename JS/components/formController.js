import {campos} from './validations.js';

const resultText = document.querySelector(".ticket__form--result--text");
const ticketForm = document.querySelector('#formTicket');

export function resetForm(){
    ticketForm.reset();
    resultText.innerHTML = "Total a pagar:";
    campos['name'] = false;
    campos['surname'] = false;
    campos['email'] = false;
};