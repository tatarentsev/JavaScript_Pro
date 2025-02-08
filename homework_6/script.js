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
    const CardsEl = document.querySelector('.cards__wrapper');

    data.forEach(element => {
        CardsEl.insertAdjacentHTML('beforeend', `
        <div class="cards__item">
            <div class="item-img" style="${element.img} ">
                <div class="item-img__hover">
                    <button class="item-img__hover-btn">Add to Cart</button>
                </div>
            </div>
            <div class="item-description">
                <h4 class="item-title">${element.title} </h4>
                <p class="item-text">
                    ${element.desc} 
                </p>
                <p class="item-price">${element.price} </p>
            </div>
        </div>
        `)
    });
});