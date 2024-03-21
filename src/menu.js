import './style.css';

import {addImageToDiv, createDivWithClass, createImageWithSrc, createParagraphWithClass} from "./htmlmaker";

// Main function to create the content for the menu page

let menuItems = [
    {
        name: 'Burger',
        price: '$10',
        description: 'A delicious burger with all the fixings'
    },
    {
        name: 'Fries',
        price: '$5',
        description: 'Crispy fries with a side of ketchup'
    },
    {
        name: 'Soda',
        price: '$2',
        description: 'A refreshing soda to wash it all down'
    },
    {
        name: 'Sticky Toffee Pudding',
        price: '$4',
        description: 'A sweet treat to end your meal'
    },
];


function menu() {
    const content = document.getElementById('content');

    const menuContainer = createDivWithClass('menu-container');

    const menu = createDivWithClass('menu');

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');

    menuTitle.innerHTML = 'Our Menu';
    menu.appendChild(menuTitle);

    menuItems.forEach(item => {
        const menuItem = createDivWithClass('menu-item');

        const itemName = createParagraphWithClass('menu-item-name', item.name);
        const itemDescription = createParagraphWithClass('menu-item-description', item.description);
        const itemPrice = createParagraphWithClass('menu-item-price', item.price);

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);
        menu.appendChild(menuItem);
    })

    menuContainer.appendChild(menu);
    content.appendChild(menuContainer);

}

export default menu;

