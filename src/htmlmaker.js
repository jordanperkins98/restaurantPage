// Function to create a div with a class
function createDivWithClass(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

// Function to create a paragraph with a class and text
function createParagraphWithClass(className, text) {
    const p = document.createElement('p');
    p.classList.add(className);
    p.innerHTML = text;
    return p;
}

// Function to create an image with a source
function createImageWithSrc(src) {
    const img = new Image();
    img.src = src;
    return img;
}

// Function to add an image to a div
function addImageToDiv(div, imagePath) {
    const img = createImageWithSrc(imagePath);
    div.appendChild(img);
}

export { createDivWithClass, createParagraphWithClass, createImageWithSrc, addImageToDiv };