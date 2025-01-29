import { slide, slideDown, slideUp } from "./animation";
import "./assets/sass/main.scss";

const btnsMenu = <NodeList>document.querySelectorAll("#btn-menu");
const btnsContact = <NodeList>document.querySelectorAll("#btn-contact");
const menuEl = <HTMLElement>document.querySelector(".hero__menu");
const btnReservation = <NodeList>document.querySelectorAll("#btn-reservation");
const reservationEl = <HTMLElement>(
    document.querySelector(".container__hero__reservation")
);
const contactEl = <HTMLElement>document.querySelector(".hero__contact");
const btnNav = <HTMLButtonElement>document.querySelector(".hero__nav-menu");
const btnContact = <HTMLButtonElement>document.querySelector('.hero__nav-contact')
const menus = <NodeList>(
    document.querySelectorAll(".hero__menu--list-item span")
);
const contacts = <NodeList>(
    document.querySelectorAll(".hero__cintact--list-item span")
);

let openMenu = false;
let openContact = false;
let openReservation = false
let listMenu: string[] = [];
let listContact: string[] = [];

menus.forEach((menu) => {
    const className = "." + (menu as HTMLElement).className;
    listMenu.push(className)
});

contacts.forEach((contact) => {
    const className = "." + (contact as HTMLElement).className;
    listContact.push(className)
});


const animationNav = slideUp(".primary-menu",".secondary-menu");
btnNav.addEventListener("mouseenter", () => {
    
    animationNav.play()
});
btnNav.addEventListener("mouseleave", () => {
    animationNav.reverse()
});

const animationContact = slideUp(".primary-contact",".secondary-contact");
btnContact.addEventListener("mouseenter", () => {
    
    animationContact.play()
});
btnContact.addEventListener("mouseleave", () => {
    animationContact.reverse()
});





const menuSlide = slide(btnsMenu, openMenu, menuEl, 100, listMenu);
const contactSlide = slide(
    btnsContact,
    openContact,
    contactEl,
    -100,
    listContact
);

const animatedReservation = slideDown(reservationEl, 100)

btnReservation.forEach((btn)=>{

    btn.addEventListener("click", ()=>{
        if (openReservation === false) {
            animatedReservation.play()
            openReservation = true
        }else if (openReservation === true) {
            animatedReservation.reverse()
            openReservation = false
}
    })

})