import '../assets/style.scss'

fetch("https://corsi-uni.herokuapp.com/tabella?t=Triennale&t=Magistrale%20a%20Ciclo%20Unico&&a=No")
    .then((response) => response.text())
    .then((html) => {
        document.querySelector('#body').innerHTML = html
    });

document.querySelector('#filtro').addEventListener('keydown', filtro);
document.querySelector('#checkCittà').addEventListener('change', function() {
    if (this.checked) {
        filtraCitta = true;
    } else {
        filtraCitta = false;
    }
});

var corsi = [];
var filtraCitta = false;

function filtro() {

    var corso = document.querySelector('#filtro').value;

    corso = new RegExp(corso, 'i')

    if (corsi.length == 0) {
        corsi = document.querySelector('#body').querySelectorAll('tr');
    }

    var tbody = document.querySelector('#body').cloneNode(false);

    document.querySelector('#body').remove();

    if (!filtraCitta) {
        corsi.forEach((el) => {
            if (el.firstChild.innerText.match(corso)) {
                tbody.appendChild(el)
            }
        })
    } else {
        corsi.forEach((el) => {
            if (el.children[1].innerText.match(corso)) {
                tbody.appendChild(el)
            }
        })
    }

    document.querySelector('table').appendChild(tbody);

}

document.querySelector('#città').addEventListener('click', sortCitta)
document.querySelector('#università').addEventListener('click', sortUni)
document.querySelector('#nome').addEventListener('click', sortNome)
document.querySelector('#citta').addEventListener('click', nascondiCitta)

var mostraCitta = false;

function nascondiCitta() {
    console.log('ciao')
    if (mostraCitta) {
        document.querySelector('#linkCitta').setAttribute('class', 'navbar-dropdown is-hidden')
        mostraCitta = false;
    } else {
        document.querySelector('#linkCitta').setAttribute('class', 'navbar-dropdown')
        mostraCitta = true;
    }
}

function sortCitta() {
    sortColonna(1)
}


function sortUni() {
    sortColonna(2)
}

function sortNome() {
    sortColonna(0)
}

function sortColonna(colonna) {

    var righe = [...document.querySelector('#body').children]

    var items = righe.map(x => x.children[colonna].innerText)

    var unique = [...new Set(items)]

    unique.sort()

    var unsorted = document.querySelector('#body').querySelectorAll('tr');

    var tbody = document.querySelector('#body').cloneNode(false);

    document.querySelector('#body').remove();

    unique.forEach((el) => {
        unsorted.forEach((corso) => {
            if (el == corso.children[colonna].innerText) {
                tbody.appendChild(corso)
            }
        })
    })

    document.querySelector('table').appendChild(tbody);

}

document.querySelector('.navbar-burger').addEventListener('click', attiva)

var active = false;

function attiva() {
    if (active) {
        document.querySelector('.navbar-burger').setAttribute('class', 'navbar-burger')
        document.querySelector('.navbar-menu').setAttribute('class', 'navbar-menu')
        active = false;
    } else {
        document.querySelector('.navbar-burger').setAttribute('class', 'navbar-burger is-active')
        document.querySelector('.navbar-menu').setAttribute('class', 'navbar-menu is-active')
        active = true;
    }
}

window.setTimeout(() => { document.querySelector('.modal').setAttribute('class', 'modal is-active') }, 60000)

document.querySelector('#chiudi-modal').addEventListener('click', chiudiModal)
document.querySelector('#delete').addEventListener('click', chiudiModal)

function chiudiModal() {
    document.querySelector('.modal').setAttribute('class', 'modal')
}

function nascondiPanel() {
    document.querySelector('#panelLivello').setAttribute('class', 'is-hidden')
    document.querySelector('#panelClassifica').setAttribute('class', 'is-hidden')
    document.querySelector('#panelInter').setAttribute('class', 'is-hidden')
    document.querySelector('#linkLivello').setAttribute('class', 'has-text-danger')
    document.querySelector('#linkClassifica').setAttribute('class', 'has-text-danger')
    document.querySelector('#linkInter').setAttribute('class', 'has-text-danger')
}

document.querySelector('#linkLivello').addEventListener('click', mostraLivello)
document.querySelector('#linkClassifica').addEventListener('click', mostraClassifica)
document.querySelector('#linkInter').addEventListener('click', mostraInter)

function mostraLivello() {
    nascondiPanel()
    document.querySelector('#panelLivello').setAttribute('class', '')
    document.querySelector('#linkLivello').setAttribute('class', 'is-active')
}

function mostraClassifica() {
    nascondiPanel()
    document.querySelector('#panelClassifica').setAttribute('class', '')
    document.querySelector('#linkClassifica').setAttribute('class', 'is-active')
}

function mostraInter() {
    nascondiPanel()
    document.querySelector('#panelInter').setAttribute('class', '')
    document.querySelector('#linkInter').setAttribute('class', 'is-active')
}

window.dataLayer = window.dataLayer || [];

function gtag() { window.dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-WSK0D83FEJ');