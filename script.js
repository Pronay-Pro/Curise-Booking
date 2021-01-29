const bookNow = document.getElementById("bookNow");
bookNow.addEventListener("click", function () {
    const main = document.getElementById("main");
    main.style.display = "none"
    const congo = document.getElementById("congo");
    congo.style.display = "block";
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









// const fstClassIn = document.getElementById("increaseFstClass");
// fstClassIn.addEventListener("click",function(){
//     const firstClassIn = document.getElementById("firstClass").value;
//     const fstClassInNumber = parseInt(firstClassIn);
//     const fstClassInCount =  fstClassInNumber +1;
//     document.getElementById("firstClass").value =fstClassInCount; 
//     const fstClassTicketAmount = fstClassInCount *150
//     document.getElementById("ticketValue").innerHTML ="$"+fstClassTicketAmount;
//     const fstClassTicketAmountVat = fstClassTicketAmount *0.1
//     document.getElementById("fstClassVat").innerHTML ="$"+fstClassTicketAmountVat;
//     const total = fstClassTicketAmount + fstClassTicketAmountVat;
//     document.getElementById("total").innerHTML ="$"+total;
// })

// const fstClassDe = document.getElementById("decreaseFstClass");
// fstClassDe.addEventListener('click',function(){
//     const firstClassDe = document.getElementById("firstClass").value;
//     const firstClassDeNumber = parseInt(firstClassDe);
//      const firstClassDeCount = firstClassDeNumber - 1;
//     if(firstClassDeCount>=0){
//         document.getElementById("firstClass").value =firstClassDeCount; 
//         const fstClassTicketAmount = firstClassDeCount *150
//         document.getElementById("ticketValue").innerHTML ="$"+fstClassTicketAmount;
//         const fstClassTicketAmountVat = fstClassTicketAmount *0.1
//         document.getElementById("fstClassVat").innerHTML ="$"+fstClassTicketAmountVat;
//         const total = fstClassTicketAmount - fstClassTicketAmountVat;
//         document.getElementById("total").innerHTML ="$"+total;
//     } 
// })

// const pryClassIn = document.getElementById("increasePryClass");
// pryClassIn.addEventListener('click',function(){
//     const pryClassIn = document.getElementById("primaryClass").value;
//     const pryClassInNumber = parseInt(pryClassIn);
//     const pryClassInCount = pryClassInNumber + 1;
//     document.getElementById("primaryClass").value = pryClassInCount;
//     const pryClassTicketAmount = pryClassInCount *100;
//     document.getElementById("ticketValue").innerHTML = "$"+pryClassTicketAmount;
//     const pryClassTicketAmountVat = pryClassTicketAmount * 0.1;
//     document.getElementById("fstClassVat").innerHTML = pryClassTicketAmountVat;
// })
// const pryClassDe = document.getElementById("decreasePryClass");
// pryClassDe.addEventListener('click',function(){
//     const pryClassDe = document.getElementById("primaryClass").value;
//     const pryClassDeNumber = parseInt(pryClassDe);
//     const pryClassDeCount = pryClassDeNumber - 1;
//    if(pryClassDeCount>=0){
//     document.getElementById("primaryClass").value = pryClassDeCount;
//     const pryClassTicketAmount = pryClassDeCount *100;
//     document.getElementById("ticketValue").innerHTML = "$"+pryClassTicketAmount;
//     const pryClassTicketAmountVat = pryClassTicketAmount * 0.1;
//     document.getElementById("fstClassVat").innerHTML = pryClassTicketAmountVat;
//    }
// })