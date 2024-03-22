import './style.css';

import {addImageToDiv, createDivWithClass, createImageWithSrc, createParagraphWithClass} from "./htmlmaker";

// Main function to create the content for the menu page

let menuItems = [
    {
        name: 'The Classic Burger',
        price: '£8',
        description: 'A juicy beef patty with lettuce, tomato, onion, and your choice of cheese, served on a toasted brioche bun.'
    },
    {
        name: 'Fish and Chips',
        price: '£12',
        description: 'Beer-battered cod fillets with thick-cut chips, served with tartar sauce and mushy peas.'
    },
    {
        name: 'Shepherd\'s Pie',
        price: '£10',
        description: 'A hearty dish of ground lamb and vegetables, topped with mashed potatoes and a crispy cheese crust.'
    },
    {
        name: 'Bangers and Mash',
        price: '£9',
        description: 'Grilled pork sausages served with creamy mashed potatoes, caramelized onion gravy, and a side of buttered peas.'
    },
    {
        name: 'Ploughman\'s Platter',
        price: '£11',
        description: 'A selection of cured meats, cheeses, pickled vegetables, crusty bread, and a tangy chutney.'
    },
    {
        name: 'Pint of Ale',
        price: '£4',
        description: 'A refreshing pint of our locally-brewed ale, perfect to enjoy with your meal.'
    },
    {
        name: 'Sticky Toffee Pudding',
        price: '£5',
        description: 'A warm, gooey date cake smothered in toffee sauce, served with a scoop of vanilla ice cream.'
    }










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

