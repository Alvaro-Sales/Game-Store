class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    // criando animação para o link, estilo link fade
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
              ? (link.style.animation = "")
              : (link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`);
        });
    }

    // criando captura de click para abrir o menu
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    // criando captura de click no menu
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    // deixando o menu ativo
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();


// Criando rolagem lateral do slide dos produtos
let span = document.getElementsByTagName('span')
let product = document.getElementsByClassName('product')
let product_page = Math.ceil(product.length / 4)
let l = 0
let movePer = 25.34
let maxMove = 203

// Tablet View
let tablet_view = window.matchMedia("(max-width: 900px)")
if (tablet_view.matches) {
    movePer = 26.30
    maxMove = 220
}

// Mobile View
let mobile_view = window.matchMedia("(max-width: 768px)")
if (mobile_view.matches) {
    movePer = 50.36
    maxMove = 504
}

let rigth_mover = () => {
    l = l + movePer
    if (product == 1) {l = 0}
    for(const i of product) 
    {
        if (l > maxMove) {l = l - movePer}
        i.style.left = '-' + l + '%'
    }
}

let left_mover = () => {
    l = l - movePer
    if (l <= 0) {l = 0}
    for(const i of product) 
    {
        if (product_page > 1)
        i.style.left = '-' + l + '%'
    }
}

span[1].onclick = () => {rigth_mover()}
span[0].onclick = () => {left_mover()}