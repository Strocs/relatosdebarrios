const body = document.querySelector('body')

const nav = document.querySelector('.nav')
const navContainer = document.querySelector('.nav__container')    
const navMenu = document.querySelector('.nav__menu')
const navList = document.querySelectorAll('.nav__menu-section')
const navLogo = document.querySelector('.nav__logo-img')
const navBtn = document.querySelector('.nav__toggle-btn')
const navBtnDisplay = window.getComputedStyle(navBtn).display

const headerVideo = document.querySelector('.header__video')
const headerText = document.querySelector('.header__title')

const box = document.querySelectorAll('.box')
const gallery = document.querySelector('.gallery')
const galleryContainer = document.querySelector('.gallery div')
const closeGalleryBtn = document.querySelector('.gallery span')

export {
    body,

    nav,
    navContainer,
    navMenu,
    navList,
    navLogo,
    navBtn,
    navBtnDisplay,
    
    headerVideo,
    headerText,
        
    box,
    closeGalleryBtn,
    galleryContainer,
    gallery,
}

