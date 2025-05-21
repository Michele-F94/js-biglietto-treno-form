console.log("biglietto treno")

const KilometriScelti = document.getElementById("KilometriScelti");
const Sconto = document.getElementById("Sconto");
const CalcolaPrezzobBtn = document.getElementById("CalcolaPrezzo");
const prezzoFinale = document.getElementById("prezzoFinale");
console.log(KilometriScelti, Sconto,CalcolaPrezzobBtn, prezzoFinale);

CalcolaPrezzobBtn.addEventListener("click", function () {

    const km = KilometriScelti.value;
    console.log(km);

    const prezzoBiglietto = km * 0.21;
    console.log(prezzoBiglietto.toFixed(2));
    prezzoBiglietto.innerHTML = `Il prezzo del biglietto è di ${prezzoBiglietto.toFixed(2)}€`;
    let scontoApplicato = 0;

    if (Sconto.value === "Under18") {
        scontoApplicato = prezzoBiglietto * 0.2;
        console.log(scontoApplicato);
        prezzoFinale.innerHTML = `Il prezzo finale del biglietto è di ${(prezzoBiglietto - scontoApplicato).toFixed(2)}€`;
    } else if (Sconto.value === "Over65") {
        scontoApplicato = prezzoBiglietto * 0.4;
        console.log(scontoApplicato);
        prezzoFinale.innerHTML = `Il prezzo finale del biglietto è di ${(prezzoBiglietto - scontoApplicato).toFixed(2)}€`;
    } else 
        prezzoFinale.innerHTML = `Il prezzo finale del biglietto è di ${prezzoBiglietto.toFixed(2)}€`;
    
        
    console.log(prezzoFinale);
    

});



