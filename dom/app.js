// ¿En tu páis de origen es normal dejar propina?, en Colombia no es obligatorio pero si es esperado dejar algo de propina.

document.querySelector(`#calculate`).addEventListener(`click`, function () {
    const bill = parseFloat(document.querySelector("#bill-amount").value);
    const percentage = parseFloat(document.querySelector("#percentage-tip").value);

    if (isNaN(bill) || isNaN(percentage)) {
        alert(`Por favor, introduce numeros validos en ambos campos. `);
        return;
    }

    const tip = bill * (percentage / 100);
    const total = bill + tip;

    document.querySelector(`#tip-amount`).value = tip.toFixed(2);
    document.querySelector(`#total`).value = total.toFixed(2);
});