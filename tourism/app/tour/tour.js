
class Tour {
    constructor (naziv, duzina, opis, tagovi) {
        this.naziv=naziv
        this.duzina=duzina
        this.opis=opis
        this.tagovi=tagovi
    }
}

function createTourRows (tours) {
    let table = document.querySelector ("#tableDetails")

    for (let i=0; i<tours.length; i++){

            let tr = document.createElement ("tr")

            let naziv = document.createElement ("td")
            let duzina = document.createElement ("td")

            naziv.textContent = tours[i].naziv;
            duzina.textContent = tours[i].duzina;

            tr.appendChild (naziv);
            tr.appendChild(duzina);

            tr.addEventListener ('click', function () {
                displayTourDetails(tours[i])
            })

            table.appendChild(tr);

    }
}


function displayTourDetails (tour) {
    let p = document.createElement("p")

    p.innerHTML = "Naziv: " + tour.naziv + "<br>" + "Duzina: " + tour.duzina + "<br>" + "Opis: " + tour.opis + "<br>" + "Tagovi: " + tour.tagovi.join(", ");

    let tourDetails = document.querySelector("#tourDetails")

    if (tourDetails.firstChild) {
        tourDetails.firstChild.remove();
    }
    tourDetails.appendChild(p)
}


function initializeTours () {
    let tours= [
        new Tour("Planinska tura", 15, "Avantura za one koji vole prirodu i planinarenje.", ["priroda", "planinarenje", "avantura"]),
        new Tour("Istorijska tura", 10, "Otkrijte bogatu istoriju kroz muzeje i galerije.", ["istorija", "muzeji", "galerije"]),
        new Tour("Gradska tura", 8, "Upoznajte gradsku atmosferu i znamenitosti.", ["grad", "kultura", "setnja"])
    ];

    createTourRows (tours);
}

document.addEventListener('DOMContentLoaded',initializeTours);