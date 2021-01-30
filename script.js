
const bookNow = document.getElementById("bookNow");
bookNow.addEventListener("click", function () {

    const firstClass = document.getElementById("firstClass");
    const primaryClass = document.getElementById("primaryClass")
    if (firstClass.value == 0 && primaryClass.value == 0) {
        alert("Hey Sir!!! Did you miss something? You are not BOOKING any number of Ticket. Plz BOOKING TICKET FIRST......\n\n Happy Journey.... ")
    }
    else if ((firstClass.value > 0 || primaryClass.value > 0)) {
        const main = document.getElementById("main");
        main.style.display = "none"
        const congo = document.getElementById("congo");
        congo.style.display = "block"
    }

})
const againBook = document.getElementById("AgainBook");
againBook.addEventListener("click", function () {
    const main = document.getElementById("main");
    main.style.display = "block"
    const congo = document.getElementById("congo");
    congo.style.display = "none";
})
const fstClassIn = document.getElementById("increaseFstClass");
fstClassIn.addEventListener("click", function () {
    fstTicket(true);

})

const fstClassDe = document.getElementById("decreaseFstClass");
fstClassDe.addEventListener("click", function () {
    fstTicket(false);
})

const pryClassIn = document.getElementById("increasePryClass");
pryClassIn.addEventListener('click', function () {
    pryTicket(true);
})

const pryClassDe = document.getElementById("decreasePryClass");
pryClassDe.addEventListener('click', function () {
    pryTicket(false);
})

function fstTicket(increment) {
    const fstClassTicketInput = document.getElementById("firstClass");
    const fstClassTicketAmount = parseInt(fstClassTicketInput.value);
    let fstTicket = fstClassTicketAmount;
    if (increment == true) {
        fstTicket = fstClassTicketAmount + 1;
    }
    else if (increment == false && fstClassTicketAmount > 0) {
        fstTicket = fstClassTicketAmount - 1;
    }
    fstClassTicketInput.value = fstTicket;
    const fstClassTotal = fstTicket * 150;
    document.getElementById("ticketValue").innerHTML = "$" + fstClassTotal;
    calculate();
}
function pryTicket(increment) {
    const pryClassTicketInput = document.getElementById("primaryClass");
    const pryClassTicketAmount = parseInt(pryClassTicketInput.value);
    let pryTicket = pryClassTicketAmount;
    if (increment == true) {
        pryTicket = pryClassTicketAmount + 1;
    }
    else if (increment == false && pryClassTicketAmount > 0) {
        pryTicket = pryClassTicketAmount - 1;
    }
    pryClassTicketInput.value = pryTicket;
    const pryClassTotal = fstTicket * 100;
    document.getElementById("ticketValue").innerHTML = "$" + pryClassTotal;
    calculate();
}

function calculate() {
    const fstClassInput = document.getElementById("firstClass");
    const fstClassCount = parseInt(fstClassInput.value);
    const pryClassInput = document.getElementById("primaryClass");
    const pryClassCount = parseInt(pryClassInput.value);
    const subTotal = fstClassCount * 150 + pryClassCount * 100;
    const vat = parseInt(subTotal * 0.1);
    const total = subTotal + vat;
    document.getElementById("ticketValue").innerHTML = "$" + subTotal;
    document.getElementById("fstClassVat").innerHTML = "$" + vat;
    document.getElementById("total").innerHTML = "$" + total;

}





