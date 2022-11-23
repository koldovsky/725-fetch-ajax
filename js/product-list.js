(() => {
    const products = [
        {
            id: "1",
            title: "Baby Yoda",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, ",
            price: 10.99,
            image: "img/baby-yoda.svg" 
        },
        {
            id: "2",
            title: "Banana",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, ",
            price: 9.99,
            image: "img/banana.svg" 
        },
        {
            id: "3",
            title: "Girl",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, ",
            price: 8.99,
            image: "img/girl.svg" 
        },
        {
            id: "4",
            title: "Viking",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, ",
            price: 7.99,
            image: "img/viking.svg" 
        },
        {
            id: "5",
            title: "Kitty",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, ",
            price: 12.99,
            image: "https://placekitten.com/408/287" 
        },
    ];

    function renderProducts(products) {
        const productsContainer = document.querySelector('.main-products__list');
        for (const product of products) {
            productsContainer.innerHTML += `
            <article class="product-card">
                <img class="product-card__image" src="${product.image}" alt="${product.title}" />
                <h3 class="product-card__h3">${product.title}</h3>
                <p class="product-card__description">${product.description}</p>
                <div class="product-card__buttons">
                    <button class="product-card__buttons-info button button-card">
                    Info
                    </button>
                    <button class="product-card__buttons-buy button button-card">
                    Buy - ${product.price}
                    </button>
                </div>
            </article>
            `;
        }
    }

    renderProducts(products);

})();