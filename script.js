//Book now button//
const bookNow = document.getElementById("bookNow");
bookNow.addEventListener("click", function () {
    const firstClass = document.getElementById("firstClass");
    const primaryClass = document.getElementById("primaryClass")
    if (firstClass.value == 0 && primaryClass.value == 0) {
        //when user pickup 0(zero) ticket//
        alert("Hey Sir!!! Did you miss something? You are not BOOKING any number of Ticket. Plz BOOKING TICKET FIRST......\n\n Happy Journey.... ")
    }
    else if ((firstClass.value > 0 || primaryClass.value > 0)) {
        const main = document.getElementById("main");
        main.style.display = "none"
        const congo = document.getElementById("congo");
        congo.style.display = "block"
    }

})
 //confirmation page and return booking page//

const againBook = document.getElementById("AgainBook");
againBook.addEventListener("click", function () {
    const main = document.getElementById("main");
    main.style.display = "block"
    const congo = document.getElementById("congo");
    congo.style.display = "none";
})
 
//working plusButton from FirstClass user//

const fstClassIn = document.getElementById("increaseFstClass");
fstClassIn.addEventListener("click", function () {
    fstTicket(true);
})
//working minusButton from FirstClass user//

const fstClassDe = document.getElementById("decreaseFstClass");
fstClassDe.addEventListener("click", function () {
    fstTicket(false);
})
//working plusButton from EconomyClass user//
const pryClassIn = document.getElementById("increasePryClass");
pryClassIn.addEventListener('click', function () {
    pryTicket(true);
})
//working minusButton from EconomyClass user//
const pryClassDe = document.getElementById("decreasePryClass");
pryClassDe.addEventListener('click', function () {
    pryTicket(false);
})

//firsClass increment and decrement working function//

function fstTicket(firstClass) {
    const fstClassTicketInput = document.getElementById("firstClass");
    const fstClassTicketAmount = parseInt(fstClassTicketInput.value);
    let fstTicket = fstClassTicketAmount;
    if (firstClass == true) {
        fstTicket = fstClassTicketAmount + 1;
    }
    else if (firstClass == false && fstClassTicketAmount > 0) {
        fstTicket = fstClassTicketAmount - 1;
    }
    fstClassTicketInput.value = fstTicket;
    const fstClassTotal = fstTicket * 150;
    document.getElementById("ticketValue").innerHTML = "$" + fstClassTotal;
    calculate();
}
//EconomyClass increment and decrement working function//
function pryTicket(economyClass) {
    const pryClassTicketInput = document.getElementById("primaryClass");
    const pryClassTicketAmount = parseInt(pryClassTicketInput.value);
    let pryTicket = pryClassTicketAmount;
    if (economyClass == true) {
        pryTicket = pryClassTicketAmount + 1;
    }
    else if (economyClass == false && pryClassTicketAmount > 0) {
        pryTicket = pryClassTicketAmount - 1;
    }
    pryClassTicketInput.value = pryTicket;
    const pryClassTotal = fstTicket * 100;
    document.getElementById("ticketValue").innerHTML = "$" + pryClassTotal;
    calculate();
}
//calculation subtotal,vat,total //
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





