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
    const CardsEl = document.getElementById('product-list');

    data.forEach(element => {
        if (CardsEl) {
            CardsEl.insertAdjacentHTML('beforeend', `
                <li>
                    <img src="${element.img}" alt="${element.title} "width="150" height="150">
                    <h2>${element.title}</h2>
                    <p>${element.desc}</p>
                    <p>Price: ${element.price}</p>
                    <button class="add-to-cart"
                    data-id="${element.id}">Add to Cart</button>
                </li>

            `)
        }
    });

    // 3. В файле script.js добавьте функциональность для добавления товара в
    // корзину при клике на кнопку "Add to Cart".
    function addToCart() {
        const dataIdEl = document.querySelectorAll('[data-id]');
        const cartListEl = document.getElementById('cart-list');

        dataIdEl.forEach(element => {

            element.addEventListener('click', function (e) {
                
                const target = e.target;
                data.forEach(dataEl => {
                    if (target.dataset.id == dataEl.id) {
                        cartListEl.insertAdjacentHTML('beforeend', `
                            <li class="li_el" data-element = "${dataEl.id}">
                                <img src="${dataEl.img}" alt="${dataEl.title} "width="150" height="150">

                                <button class="cross_el" data-prod="${dataEl.id}">
                                    X
                                </button>

                                <h2>${dataEl.title}</h2>
                                <p>${dataEl.desc}</p>
                                <p>Price: ${dataEl.price}</p>
                            </li>
                
                        `)
                    };  

                    // 4. Реализуйте функциональность для удаления товаров из корзины при нажатии
                    // на кнопку "X".
                    const liElement = cartListEl.querySelectorAll('.li_el');
                    const dataIdElement = document.querySelectorAll('[data-prod]');
                    
                    dataIdElement.forEach(element => {
                        element.addEventListener('click', function (e) {
                            const target = e.target;
                            liElement.forEach(li => {
                                if (target.dataset.prod === li.dataset.element) {
                                    cartListEl.removeChild(li);
                                }
                            });
                        });
                    });
                });
            });
        });
    };

    addToCart();

    // function deteleCart() {
    //     const cartList = document.querySelector('cart-list');
    //     if (cartList.children) {
    //         const deleteButton = cartList.querySelector('[data-id]'); 
    //         console.log(deleteButton);
    //     }
    // }

    // deteleCart();
});
