
let array = []
let images = document.querySelectorAll(".productImg")
let image = document.getElementById("mainProductImg")
let title = document.getElementById("titleDettaglio")[0]
let desc = document.getElementById("descDettaglio")[0]
let price = document.getElementById("itemPriceDettaglio")[0]
let btnRimuovi = document.getElementsByClassName('trashIcon')[0]
let remaining = document.getElementById("remainingItemDettaglio")
let btn = document.querySelector(".button-24")
let imagesObj = []
let product = getProductByUrl()



function redirect() {
    alert("Prodotto non trovato")
    document.location.replace("/index.html")
}
images.forEach((e) => {
    e.addEventListener('click', () => {
        changeBorder(e);
        changeImage(e)
    });
});

loadLocalStorage()
addProdotto()

changeButtonState()
loadImages()
modificaHTML()



function loadLocalStorage() {
    array = JSON.parse(localStorage.getItem("prodotti"))
    if(array === null){
        array = []

    }
}

function getIDFromUrl() {
    let _split = document.URL.split('?')
    if (_split.length !== 2) {
        redirect()
    }


    let id = parseInt(_split[1].replace("id=", ""))
    if (isNaN(id) || id === 0) {
        redirect()
    }

    return id


}

function getProductByUrl() {
    let id = getIDFromUrl()

    let prodotti = JSON.parse(localStorage.getItem("prodotti"))
    let prodotto = null
    prodotti.forEach((e, i) => {
        if (e['id'] == id) {
            prodotto = e
        }
    });
    if (prodotto === null) {
        redirect()
    }
    return prodotto

}

function modificaHTML() {
    changeImagePreview()
    image.src = product['image']
    titleDettaglio.innerHTML = product['titolo']
    descDettaglio.innerHTML = product['descrizione']
    itemPriceDettaglio.innerHTML = product['prezzo'] + "€"
    remaining.innerHTML=product['quantita'] + " rimanenti"
    
}

function changeBorder(element) {
    images.forEach((e) => {
        e.classList.remove('borderOn')
    });
    element.classList.add('borderOn')




}

function loadImages() {
    imagesObj.push(product['image'])
    for(let i = 1; i<=4; i++){
        imagesObj.push(`https://robohash.org/computer${Math.floor((Math.random() * 20) + 1)}?set=set4`)
    }

}

function changeImage(e) {
    let randomNumber = Math.floor((Math.random() * 100) + 1);
    image.src = e.src

}

changeRemaining()
function changeRemaining(){
    if (product['quantita'] == 0 || product['quantita'] > 10) {
        remaining.classList.add("hidden")
    } else {
        remaining.classList.remove("hidden")
    }
}

function changeButtonState() {
    if (product['quantita'] == 0) {
        btn.disabled = true
        btn.classList.remove("button-24")
        btn.classList.add('buyDisabled')
    }
}


function addProdotto() {
    array.push({
        "id": 15,
        "image": "https://m.media-amazon.com/images/I/71kB0cVIw0L.jpg",
        "titolo": "Card 2GB GDDR5 PCI Express 3.0 x16, Single Slot, 3x Mini-DisplayPort, 5K Support, Ultra-quiet active fan",
        "marchio": "PONY",
        "modello": "PNY Quadro P400 2 GB GDDR5",
        "descrizione": "LA QUADRO P400 ti consente di affrontare gli ultimi giochi utilizzando la potenza di Ampere, l'architettura RTX di seconda generazione di NVIDIA. Ottieni prestazioni incredibili con Ray Tracing Core e Tensor Core avanzati, nuovi multiprocessori in streaming e memoria G6 ad alta velocità.",
        "prezzo": 363,
        "categoria": "GPU",
        "quantita": 7
    })
    localStorage.setItem("prodotti", JSON.stringify(array))

}

function eliminaProdotto() {
    
    let index = array.findIndex((element) => {
        return element.id === product.id;
    });
    
    
    if (index !== -1) {
        array.splice(index, 1);  // Rimuove 1 elemento a partire dall'indice 'index'
        localStorage.setItem("prodotti", JSON.stringify(array));
    }
    alert("Prodotto rimosso con successo")
    redirect()
}

btnRimuovi.addEventListener('click', () => {
    eliminaProdotto()
})


function changeImagePreview() {
    images.forEach((image, index) => {
        image.src = imagesObj[index];
    });
}
