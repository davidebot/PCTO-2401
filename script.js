let myPC = {
    'Case': false,
    'Scheda Madre': false,
    'CPU': false,
    "GPU": false,
    "Alimentatore": false,
    "Dissipitore": false,
    "RAM": false,
    'HDD/SSD': false,
    "Ventole": false
}
let container = document.getElementsByClassName('container')[0]
let rowCase = document.getElementById("row-case")
let schedaMadre = document.getElementById("row-sm")
let processore = document.getElementById("row-cpu")
let schedaVideo = document.getElementById("row-gpu")
let alimentatore = document.getElementById("row-ali")
let ram = document.getElementById("row-ram")
let storage = document.getElementById("row-storage")
let dissipatore = document.getElementById("row-dissipatore")
let ventole = document.getElementById("row-ventole")

let rowsComponenti = {
    'Case': rowCase,
    'Scheda Madre': schedaMadre,
    'CPU': processore,
    "GPU": schedaVideo,
    "Alimentatore": alimentatore,
    "Dissipitore": dissipatore,
    "RAM": ram,
    'HDD/SSD': storage,
    "Ventole": ventole
}

let prodotti = JSON.parse(localStorage.getItem("prodotti") ?? "[]");



function myComponent(element, componentKey, nomeComponente) {
    if (myPC[componentKey] == false) {
        id = element.getAttribute('id');
        if (!element.classList.contains("ingrandito")) {
            element.classList.add("ingrandito");
            myPC[componentKey] = true;
        }
    } else {
        if (!element.classList.contains("ingrandito")) {
            alert(`Deseleziona la ${nomeComponente} selezionata`);
        }
        if (element.classList.contains("ingrandito")) {
            element.classList.remove("ingrandito");
            myPC[componentKey] = false;
        }

    }
}


function createCard(product) {
    divCol = document.createElement('div').classList.add('col-md-3')
    divCard = document.createElement('div')
    divCard.classList.add('card');
    divCard.classList.add('my-3');
    img = document.createElement('img')
    img.src = product['image']
    divCardBody = document.createElement('div')
    divCardBody.classList.add('card-body')

    h5Title = document.createElement('h5')
    h5Title.classList.add('card-title')
    h5Title.innerHTML = product['ttolo']

    pDesc = document.createElement('p')
    pDesc.classList.add('card-text')
    pDesc.innerHTML = product['descrizione']

    divCardBody.appendChild(h5Title)
    divCardBody.appendChild(pDesc)

    divCard.appendChild(img)
    divCard.appendChild(divCardBody)

    divCold.appendChild(divCard)


    return divCol



}

function addCard() {
    prodotti.forEach(product => {
        card = createCard(product)
        card.addEventListener('click', (e) => {
            myComponent(e, product['categoria']) // manca un parametro
        })
        rowsComponenti[product['categoria']].appendChild(card)
    });

}

addCard()