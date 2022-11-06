const amountContainer = document.querySelector("#amount");
const resultText = document.querySelector(".ticket__form--result--text");
const option = document.querySelector("#category");
const price = 200;

export function priceCalculator (e){
    
    let category = option.value;
    let amount = amountContainer.value;
    let total = price * amount;
    switch (category) {
        case "Sin-categoria" : resultText.innerHTML = `Total a pagar: $ ${total}`;
        break;
        case "Estudiante" : resultText.innerHTML = `Total a pagar: $ ${total - (total *(80 / 100) )}`;
        break;
        case "Trainee" : resultText.innerHTML = `Total a pagar: ${total - (total *(50 / 100) )}`;
        break;
        case "Junior" : resultText.innerHTML = `Total a pagar: $ ${total - (total *(15 / 100) )}`;
    }
    e.preventDefault()
}