const url = "data.json";

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener('DOMContentLoaded', async (e) => {
    const data = await getData(url);
    const productsElement = document.querySelector('.products');

    data.forEach(element => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        productsElement.appendChild(itemElement);

        const imgElement = document.createElement('img');
        imgElement.src = element.img;
        itemElement.appendChild(imgElement);

        const buttonElement = document.createElement('button');
        buttonElement.classList.add('item__button');
        itemElement.appendChild(buttonElement);

        const crossElement = document.createElement('svg');
        crossElement.classList.add('item__cross');
        crossElement.setAttribute('width', element.svg_width);
        crossElement.setAttribute('height', element.svg_height);
        crossElement.setAttribute('viewBox', element.svg_viewBox);
        crossElement.setAttribute('fill', element.svg_fill);
        crossElement.setAttribute('xmlns', element.svg_xmlns);
        
        
        const pathOfCrossElement = document.createElement('path');
        crossElement.appendChild(pathOfCrossElement);
        pathOfCrossElement.setAttribute('d', element.path);
        pathOfCrossElement.setAttribute('fill', element.path_fill);
        buttonElement.appendChild(crossElement);

        const descElement = document.createElement('div');
        descElement.classList.add('item__desc');
        itemElement.appendChild(descElement);

        const descTitulElement = document.createElement('p');
        descTitulElement.classList.add('item__desc_titul');
        descTitulElement.textContent = element.name;
        descElement.appendChild(descTitulElement);

        const descDownElement = document.createElement('div');
        descDownElement.classList.add('item__desc_down');
        descElement.appendChild(descDownElement);

        const descText1El = document.createElement('p');
        descText1El.textContent = "Price: ";
        const descText2El = document.createElement('p');
        descText2El.textContent = "Color: ";
        const descText3El = document.createElement('p');
        descText3El.textContent = "Size: ";
        const descText4El = document.createElement('p');
        descText4El.textContent = "Quantity: ";

        descText1El.classList.add('item__desc_text');
        descText2El.classList.add('item__desc_text');
        descText3El.classList.add('item__desc_text');
        descText4El.classList.add('item__desc_text');

        const spanElement = document.createElement('span');
        spanElement.classList.add('item__desc_price');
        spanElement.textContent = element.price;
        descText1El.appendChild(spanElement); 

        const spanElement2 = document.createElement('span');
        spanElement2.classList.add('item__desc_color');
        spanElement2.textContent = element.color;
        descText2El.appendChild(spanElement2); 

        const spanElement3 = document.createElement('span');
        spanElement3.classList.add('item__desc_color');
        spanElement3.textContent = element.size;
        descText3El.appendChild(spanElement3); 

        const spanElement4 = document.createElement('span');
        descText4El.appendChild(spanElement4); 

        const inputElement = document.createElement('input');
        inputElement.classList.add('item__desc_input');
        inputElement.setAttribute('type', 'number');
        inputElement.setAttribute('value', element.quantity);
        spanElement4.appendChild(inputElement);

        descDownElement.appendChild(descText1El);
        descDownElement.appendChild(descText2El);
        descDownElement.appendChild(descText3El);
        descDownElement.appendChild(descText4El);
    });
});