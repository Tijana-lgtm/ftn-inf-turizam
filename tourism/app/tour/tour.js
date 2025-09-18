
class Tour {
    constructor (naziv, duzina, opis, tagovi) {
        this.naziv=naziv
        this.duzina=duzina
        this.opis=opis
        this.tagovi=tagovi
    }
}

function saveTours(tours) {
    localStorage.setItem("tours", JSON.stringify(tours));
}

function loadTours() {
    let values = localStorage.getItem("tours");
    if (values) {
        return JSON.parse(values);
    }
    return [];
}

function handleFormSubmission(tours) {
    let submitBtn = document.querySelector("#dodajTuru");

    submitBtn.addEventListener('click', function () {
        const form = document.querySelector("#tourForm");
        const formData = new FormData(form);

        const naziv = formData.get("naziv");
        const duzina = formData.get("duzina");
        const opis = formData.get("opis");
        const tagoviText = formData.get("tagovi");
        const tagovi = tagoviText.split(',').map(t => t.trim());

        for (let i = 0; i < tours.length; i++) {
            if (naziv === tours[i].naziv) {
                return;
            }
        }

        const newTour = new Tour(naziv, duzina, opis, tagovi);
        tours.push(newTour);
        saveTours(tours);
        createTourRows(tours);

        form.reset();
    });
}


function createTourRows (tours) {
    let table = document.querySelector ("#tableDetails")

    table.innerHTML = ''

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


function initializeTours() {
    let tours = loadTours();

    if (tours.length === 0) {
        tours = [
            new Tour("Planinska", 5, "Kratka planinska šetnja.", ["planina", "priroda", "šetnja"]),
            new Tour("Istorijska", 3, "Obilazak istorijskih znamenitosti.", ["istorija", "kultura", "muzej"]),
            new Tour("Gradska", 2, "Lagana tura kroz centar grada.", ["grad", "šetnja", "zabava"])
        ];
        saveTours(tours);
    }

    createTourRows(tours);
    handleFormSubmission(tours);
}

document.addEventListener('DOMContentLoaded',initializeTours);