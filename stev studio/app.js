const navbar = document.querySelector(".navbar").querySelectorAll("a")
navbar.forEach(element =>{
    element.addEventListener("click", function(){
        navbar.forEach(nav=>nav.classList.remove("active"))
        this.classList.add("active")
        console.log(navbar)
    })
});
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu .nav-item .nav-link');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

