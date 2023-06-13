let array = [
    "pena.png",
    "cur.png",
    "nbl.png",
    "baltic.png",
    "admir.png",
    "rrt.png",
    "mosc.png",
    "grow.jpg",
    "sam.jpg",
    "tec.jpg",
    "kuch.png",
    "pie.jpg",
    "pec.jpg",
    "spz.png",
    "lei.png",
    "a.jpg",
    "abm.png",
    "yag.png",
    "bfa.png",
    "ram.png",
    "rek.png",
    "csa.jpg",
    "ibs.png",
    "ebank.png",
    "sap.jpg",
    "park.jpg"
]

let current_slide = 0;

function nextslide() {

    current_slide += 1

    if (current_slide > array.length - 1) {
        current_slide = 0
        document.getElementById('slider-img').innerHTML = `<img src="img/` + array[current_slide] + `">`

    } else {
        document.getElementById('slider-img').innerHTML = `<img src="img/` + array[current_slide] + `">`
    }
}

function prevslide() {

    current_slide -= 1

    if (current_slide < 0) {
        current_slide = array.length - 1
        document.getElementById('slider-img').innerHTML = `<img src="img/` + array[current_slide] + `">`

    } else {
        document.getElementById('slider-img').innerHTML = `<img src="img/` + array[current_slide] + `">`
    }
}

//функция чтобы открыть и спрятать меню
function toggleMenu() {

    document.getElementById('sidebar').classList.toggle('sidebar-active')
    document.getElementById('lines').classList.toggle('lines-active');
    document.querySelector('body').classList.toggle('opacity');
}

if (window.innerWidth < 800) {
    document.querySelector('#navigation').innerHTML = `
        <img id="lines" src="img/lines.png" onclick="toggleMenu()">
        <div id="sidebar">
            <div class="item">
                <img src="img/home.png"/>
                <a class="nav-item" href="#Home" onclick="toggleMenu()">Главная</a>
            </div>
            <div class="item">
                <img src="img/about.png"/>
                <a class="nav-item" href="#AboutCompany" onclick="toggleMenu()">О Нас</a>
            </div>
            <div class="item">
                <img src="img/services.png"/>
                <a class="nav-item" href="#Services" onclick="toggleMenu()">Услуги</a>
            </div>
            <div class="item">
                <img src="img/projects.png"/>
                <a class="nav-item" href="#Projects" onclick="toggleMenu()">Проекты</a>
            </div>
            <div class="item">
                <img src="img/clients.png"/>
                <a class="nav-item" href="#Partners" onclick="toggleMenu()">Клиенты</a>
            </div>
            <div class="item">
                <img src="img/contacts.png"/>
                <a class="nav-item" href="#Contact" onclick="toggleMenu()">Контакты</a>
            </div>
        </div>`;
}

function showMoreServ(tmpl_id) {
    document.querySelector('body').classList.toggle('opacity');
    document.getElementById("tmpl_serv" + tmpl_id).classList.toggle('projects-list')
}

function closeList(tmpl_id) {
    document.querySelector('body').classList.toggle('opacity');
    document.getElementById("tmpl_serv" + tmpl_id).classList.toggle('projects-list')
}