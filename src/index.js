import homepage from "./homepage";
import menu from "./menu";

const navItems = Array.from(document.querySelectorAll('.tabs > a'));

navItems.forEach(item => {
    item.addEventListener('click', (e) =>{
        const itemWithActiveClass = document.querySelector('.active');
        itemWithActiveClass.classList.remove("active");
        e.srcElement.classList.add("active");
        const content = document.getElementById('content');
        content.innerHTML = '';
        if (e.srcElement.id === 'home') {
            console.log("loading homepage....")
            homepage();
        } else if (e.srcElement.id === 'menu') {
            console.log("loading menu....")
            menu();
        }
    })
})



homepage(); // This will call the homepage function when the page loads.




