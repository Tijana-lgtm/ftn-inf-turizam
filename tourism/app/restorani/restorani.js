class Restoran{
  constructor(naziv, kuhinja, opis){
    this.naziv = naziv
    this.kuhinja = kuhinja
    this.opis = opis
  }
}

let restorani = []

function ucitajRestorane(){
  restorani = restoraniSaLokalnog()

  if(restorani.length === 0){
    restorani=[
    new Restoran("Italijansi kutak", "Italijanska", "Autenticni ukusi italije u centru grada."),
    new Restoran("Azijski raj", "Azijska, Indonezanska", "Jedinstveni ukusi Azije."),
    new Restoran("Gurmanova oaza", "Srpska, Balkanska", "Narodna srpska kuhinja.")
  ]
  restoraniNaLokalni(restorani)
  }
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


function dodajNoviRestoran(restorani){

  let btn = document.querySelector("#dugme")
  btn.addEventListener('click', function(reload){
    reload.preventDefault();

    const forma = document.querySelector("#formaRestoran")

  const formData = new FormData(forma)

  const naziv = formData.get("naziv")
  const kuhinja = formData.get("kuhinja")
  const opis = formData.get("opis")

  const noviRestoran = new Restoran(naziv, kuhinja, opis)

  restorani.push(noviRestoran)
  
  restoraniNaLokalni(restorani)

  dodajRestoranUTabelu(restorani)



  })
}

function restoraniSaLokalnog(){
  let data = localStorage.getItem("restorani")
  if(data){
    return JSON.parse(data)
  }
  return []
}

function restoraniNaLokalni(restorani){
  localStorage.setItem("restorani", JSON.stringify(restorani))
}

function prikaziDetaljeRestorana(restoran){
  let p = document.createElement("p")

  p.innerHTML = "Naziv: " + restoran.naziv + "<br>" + "Tip kuhinje: " + restoran.kuhinja + "<br>" + "Opis: " + restoran.opis

  let detaljiRestorana = document.querySelector("#detaljiRestorana")

  detaljiRestorana.innerHTML = ''

  detaljiRestorana.appendChild(p)
}
document.addEventListener("DOMContentLoaded", ucitajRestorane)
ucitajRestorane()
dodajNoviRestoran(restorani)