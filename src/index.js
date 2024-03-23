import homepage from "./homepage";
import menu from "./menu";
import contact from "./contact";

const navItems = Array.from(document.querySelectorAll('.tabs > a'));

navItems.forEach(item => {
    item.addEventListener('click', (e) =>{
        const itemWithActiveClass = document.querySelector('.active');
        itemWithActiveClass.classList.remove("active");
        e.srcElement.classList.add("active");
        const content = document.getElementById('content');
        content.innerHTML = '';
        switch (e.srcElement.id) {
            case 'home':
                console.log("loading homepage....")
                homepage();
                break;
            case 'menu':
                console.log("loading menu....")
                menu();
                break;
            case 'contact':
                console.log("loading contact....")
                contact();
                break;
        }

    })
})



homepage(); // This will call the homepage function when the page loads.




