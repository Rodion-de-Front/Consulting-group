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

document.getElementById('content').classList.add('visible');

window.addEventListener('scroll', function () {
    var element = document.getElementById('content');
    const scrollPosition = window.scrollY;
    if (scrollPosition == 0) {
        element.classList.add('visible');
    } else if (scrollPosition > window.innerHeight){
        element.classList.remove('visible');
    }
  });