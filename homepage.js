let container = document.getElementById('con4')
let offerte1 = document.getElementById('rowOfferte1')
let offerte2 = document.getElementById('rowOfferte2')
let offerte3 = document.getElementById('rowOfferte3')
let acquistati1 = document.getElementById('rowACQ1')
let acquistati2 = document.getElementById('rowACQ2')
let acquistati3 = document.getElementById('rowACQ3')
let prodotti = JSON.parse(localStorage.getItem("prodotti") ?? "[]");

addRowInContainer()

function addRowInContainer() {
    let row = document.createElement('div')
    row.classList.add('row')
    row.classList.add("p-3")

    prodotti.forEach(element => {
        const card = createCard(element)
        const col = document.createElement('div');
        col.classList.add('col');
        col.appendChild(card)
        row.appendChild(col)
    });

    prodotti.forEach(element => {
        if (element.id % 2 === 0 && offerte1.childElementCount < 3) {
            const card = createCard(element)
            const col = document.createElement('div');
            col.classList.add('col');
            col.appendChild(card)
            offerte1.appendChild(col)
        } else {
            if (element.id % 2 === 0 && offerte2.childElementCount < 3) {
                const card = createCard(element)
                const col = document.createElement('div');
                col.classList.add('col');
                col.appendChild(card)
                offerte2.appendChild(col)
            } else {
                if (element.id % 2 === 0 && offerte3.childElementCount < 3) {
                    const card = createCard(element)
                    const col = document.createElement('div');
                    col.classList.add('col');
                    col.appendChild(card)
                    offerte3.appendChild(col)
                }
            }
        }

    });
    prodotti.forEach(element => {
        if (element.id % 2 === 1 && acquistati1.childElementCount < 3) {
            const card = createCard(element)
            const col = document.createElement('div');
            col.classList.add('col');
            col.appendChild(card)
            acquistati1.appendChild(col)
        } else {
            if (element.id % 2 === 0 && acquistati2.childElementCount < 3) {
                const card = createCard(element)
                const col = document.createElement('div');
                col.classList.add('col');
                col.appendChild(card)
                acquistati2.appendChild(col)
            } else {
                if (element.id % 2 === 0 && acquistati3.childElementCount < 3) {
                    const card = createCard(element)
                    const col = document.createElement('div');
                    col.classList.add('col');
                    col.appendChild(card)
                    acquistati3.appendChild(col)
                }
            }
        }

    });


    container.appendChild(row)


}

function createCard(element) {
    // {
    //     "id": 0,
    //     "image": "",
    //     "titolo": "",
    //     "marchio": "",
    //     "modello": "",
    //     "descrizione": "",
    //     "prezzo": 0,
    //     "categoria": "",
    //     "quantita": 0
    // }

    //[{ "id": 1, "image": "", "titolo": "Titolo prodotto 1", "marchio": "", "modello": "", "descrizione": "Descrizione prodotto", "prezzo": 0, "categoria": "", "quantita": 0 }]

    let card = document.createElement('div')
    card.classList.add('card')
    let image = document.createElement('img')
    image.classList.add('card-img-top')
    image.src = element.image
    console.log(image)



    console.log(image)
    card.appendChild(image)
    let lastDivISwear = document.createElement("div")
    lastDivISwear.classList.add('card-body')
    console.log(lastDivISwear)

    let h5 = document.createElement('h5')
    h5.classList.add('card-title')
    h5.innerHTML = element.titolo
    lastDivISwear.appendChild(h5)

    let paragraph = document.createElement('p');
    paragraph.classList.add('card-text');
    paragraph.innerHTML = element.descrizione;
    lastDivISwear.appendChild(paragraph);

    let link = document.createElement('a');
    link.innerText = "Visualizza";
    link.classList.add('btn');
    link.classList.add('btn-primary');
    link.href = "dettaglio.html?id=" + element.id;
    lastDivISwear.appendChild(link);

    card.appendChild(lastDivISwear)
    console.log(card.childNodes[1].childNodes)

    return card
} 