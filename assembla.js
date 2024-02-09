function load() {
    let prodotti = JSON.parse(localStorage.getItem("prodotti") ?? "[]");
    prodotti.forEach(prodotto => {
        let prodottoCard = createCard(prodotto)
        switch (prodotto.categoria) {
            case "Case":
                let caseContainer = document.getElementById("container-case")
                caseContainer.appendChild(prodottoCard)
                break;
            case "Scheda Madre":
                let schedaMadre = document.getElementById("container-sm")
                schedaMadre.appendChild(prodottoCard)
                break;
            case "Processore":
                let processore = document.getElementById("container-processore")
                processore.appendChild(prodottoCard)
                break;
            case "GPU":
                let gpu = document.getElementById("container-gpu")
                gpu.appendChild(prodottoCard)
                break;
            case "Alimentatore":
                let alimentatore = document.getElementById("container-alimentatore")
                alimentatore.appendChild(prodottoCard)
                break;
            case "RAM":
                let ram = document.getElementById("container-ram")
                ram.appendChild(prodottoCard)
                break;
            case "Storage":
                let storage = document.getElementById("container-storage")
                storage.appendChild(prodottoCard)
                break;
            case "Dissipatore":
                let dissipatore = document.getElementById("container-dissipatore")
                dissipatore.appendChild(prodottoCard)
                break;
            case "Ventole":
                let ventole = document.getElementById("container-ventole")
                ventole.appendChild(prodottoCard)
                break;
        }
    })
}

load()

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

function onCardClick(event, product) {
    debugger
    const prodottiStessaCategoria = document.querySelectorAll("[data-categoria='" + product.categoria + "']");
    prodottiStessaCategoria.forEach(function (prodottoStessaCategoria) {
        if (prodottoStessaCategoria.children[0].classList.contains("ingrandito")) {
            prodottoStessaCategoria.children[0].classList.remove("ingrandito");
            const idSelezionato = prodottoStessaCategoria.id.replace("prodotto-", "prodotto-sel-")
            document.getElementById(idSelezionato).remove()
        }
    })

    if (event.currentTarget.children[0].classList.contains("ingrandito")) {
        event.currentTarget.children[0].classList.remove("ingrandito")
        document.getElementById("prodotto-sel-" + product.id).remove()
    } else {
        event.currentTarget.children[0].classList.add("ingrandito");
        const cardClonata = event.currentTarget.cloneNode(true);
        cardClonata.id = "prodotto-sel-" + product.id;
        cardClonata.dataset.categoria = "";
        cardClonata.addEventListener("click", function (e) {
            const idCardPrincipale = e.currentTarget.id.replace("-sel", "")
            document.getElementById(idCardPrincipale).children[0].classList.remove("ingrandito")
            e.currentTarget.remove()
        })
        document.getElementById("container-prodotti-selezionati").appendChild(cardClonata)
    }

}


function createCard(product) {
    const divCol = document.createElement('div')
    divCol.id = "prodotto-" + product.id;
    divCol.dataset.categoria = product.categoria;
    divCol.classList.add('col-md-3')
    const divCard = document.createElement('div')
    divCard.classList.add('card');
    divCard.classList.add('my-3');
    const img = document.createElement('img')
    img.src = product.image
    const divCardBody = document.createElement('div')
    divCardBody.classList.add('card-body')

    const h5Title = document.createElement('h5')
    h5Title.classList.add('card-title')
    h5Title.innerHTML = product.titolo

    const pDesc = document.createElement('p')
    pDesc.classList.add('card-text')
    pDesc.innerHTML = product.descrizione

    divCardBody.appendChild(h5Title)
    divCardBody.appendChild(pDesc)

    divCard.appendChild(img)
    divCard.appendChild(divCardBody)

    divCol.appendChild(divCard)

    divCol.addEventListener("click", function (e) { onCardClick(e, product) })

    return divCol;
}
