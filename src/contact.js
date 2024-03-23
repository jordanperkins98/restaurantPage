import './style.css';

import {addImageToDiv, createDivWithClass, createImageWithSrc, createParagraphWithClass} from "./htmlmaker";

// Main function to create the content for the contact page

function contact() {

    const content = document.getElementById('content');


    const contactMessage = createParagraphWithClass('contact-message', `If you have any questions about the pub we would love to hear from you. You can get in <br> touch by filling out the form below for any general enquiries.`);

    contactMessage.classList.add('contact-message')
    content.appendChild(contactMessage);

    const contactContainer = createDivWithClass('contact-container');


    const pubiFrame = createDivWithClass('pub-iframe');
    const pubMap = document.createElement('iframe');
    pubMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.073292073073!2d-0.1413126842292927!3d51.50136657963469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b0b0f0e1e7%3A0x7b3b1b3b1b3b1b3b!2sThe%20Churchill%20Arms!5e0!3m2!1sen!2suk!4v1629783660003!5m2!1sen!2suk";

    pubiFrame.appendChild(pubMap)

    contactContainer.appendChild(pubiFrame);


    const contact = createDivWithClass('contact');

    // Title for contact form
    const contactHeader = document.createElement('h2');
    contactHeader.classList.add('contact-header');
    contactHeader.innerHTML = 'Contact Form'
    contact.appendChild(contactHeader);

    // Form for contact

    const contactForm = document.createElement('form');
    contactForm.action = ""
    contactForm.method = "post";
    contactForm.classList.add('contact-form');

    // Name input
    const nameDiv = createDivWithClass('name-div');

    const nameInput = document.createElement('input');

    nameDiv.classList.add('form-item');
    nameInput.classList.add('form-input');

    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.placeholder = 'YOUR NAME'
    nameInput.required = true;

    nameDiv.appendChild(nameInput);


    // Email input
    const emailDiv = createDivWithClass('email-div');
    const emailInput = document.createElement('input');

    emailDiv.classList.add('form-item');
    emailInput.classList.add('form-input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'YOUR EMAIL';
    emailInput.required = true;


    emailDiv.appendChild(emailInput);

    // Message input
    const messageDiv = createDivWithClass('message-div');

    const messageInput = document.createElement('textarea');

    messageDiv.classList.add('form-item');
    messageInput.classList.add('form-input');
    messageInput.id = 'message';
    messageInput.name = 'message';

    messageInput.placeholder = 'YOUR MESSAGE';
    messageInput.required = true;


    messageDiv.appendChild(messageInput);

    // Submit button

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerHTML = 'Send';
    submitButton.classList.add('submit-button');

    contactForm.appendChild(nameDiv);
    contactForm.appendChild(emailDiv);
    contactForm.appendChild(messageDiv);
    contactForm.appendChild(submitButton);
    contact.appendChild(contactForm);

    contactContainer.appendChild(contact);
    content.appendChild(contactContainer);
}

export default contact;



