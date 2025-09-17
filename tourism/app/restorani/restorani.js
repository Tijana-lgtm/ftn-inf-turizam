class Restoran{
  constructor(naziv, kuhinja, opis){
    this.naziv = naziv
    this.kuhinja = kuhinja
    this.opis = opis
  }
}

function ucitajRestorane(){
  let restorani=[
    new Restoran("Italijansi kutak", "Italijanska", "Autenticni ukusi italije u centru grada."),
    new Restoran("Azijski raj", "Azijska, Indonezanska", "Jedinstveni ukusi Azije."),
    new Restoran("Gurmanova oaza", "Srpska, Balkanska", "Narodna srpska kuhinja.")
  ]
  dodajRestoranUTabelu(restorani)
}

function dodajRestoranUTabelu(restorani){
  let tabela = document.querySelector('#tabela')
  tabela.innerHTML = ''

  for(let i = 0; i < restorani.length; i++){
    let tr = document.createElement("tr")

    let tdNaziv = document.createElement("td")
    tdNaziv.textContent = restorani[i].naziv

    let tdKuhinja = document.createElement("td")
    tdKuhinja.textContent = restorani[i].kuhinja

    tr.appendChild(tdNaziv)
    tr.appendChild(tdKuhinja)

    tr.addEventListener('click', function(){
      prikaziDetaljeRestorana(restorani[i])
    })

    tabela.appendChild(tr)
  }
}

function prikaziDetaljeRestorana(restoran){
  let p = document.createElement("p")

  p.innerHTML = "Naziv: " + restoran.naziv + "<br>" + "Tip kuhinje: " + restoran.kuhinja + "<br>" + "Opis: " + restoran.opis

  let detaljiRestorana = document.querySelector("#detaljiRestorana")

  detaljiRestorana.innerHTML = ''

  detaljiRestorana.appendChild(p)
}
document.addEventListener("DOMContentLoaded", ucitajRestorane)