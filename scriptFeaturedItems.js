const featuredItems = JSON.parse(dataProducts)

const boxItem = document.querySelector('.box-items')

featuredItems.forEach(product => {

    const productItem = document.createElement('div')
    productItem.className = "product-item"

    const productItemLink = document.createElement('a')
    productItemLink.className = "product-item__link"
    productItemLink.href = "product.html"

    const itemImg = document.createElement('img')
    itemImg.className = "item-image"
    itemImg.src = product.image
    itemImg.alt = "product"

    const itemContent = document.createElement('div')
    itemContent.className = "item-content"

    const itemContentTitle = document.createElement('p')
    itemContentTitle.className = "item-content__title"
    itemContentTitle.textContent = product.brand

    const itemContentText = document.createElement('p')
    itemContentText.className = "item-content__text"
    itemContentText.textContent = product.description

    const itemContentPrice = document.createElement('p')
    itemContentPrice.className = "item-content__price"
    itemContentPrice.textContent = ` ${(product.currency === 'USD' ? '$' : '')}${product.price}`

    const addBox = document.createElement('div')
    addBox.className = "add-box"

    const addLink = document.createElement('a')
    addLink.className = "add-link"
    addLink.href = "#"
    addLink.innerHTML = `<svg class="add-link__svg-add-to-cart" width="25.987305" height="23.973267"
    viewBox="0 0 25.9873 23.9733" fill="none" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <path class="path-svg-add-to-cart"
        d="M21.3154 21.9733C21.3604 21.9619 21.3818 21.9409 21.3994 21.9199C21.4072 21.9108 21.415 21.9016 21.4229 21.8926C21.4595 21.8508 21.4626 21.7623 21.4619 21.7175C21.4487 21.6115 21.3579 21.5386 21.2808 21.5386C21.2769 21.5386 21.2729 21.5387 21.2708 21.5388C21.1926 21.5442 21.1047 21.6479 21.1113 21.7695C21.1206 21.8864 21.207 21.9733 21.2788 21.9733L21.3154 21.9733ZM7.65894 21.9669C7.7583 21.9669 7.83887 21.8726 7.83887 21.7566C7.83887 21.6411 7.7583 21.5471 7.65894 21.5471C7.55981 21.5471 7.47925 21.6411 7.47925 21.7566C7.47925 21.8726 7.55981 21.9669 7.65894 21.9669ZM21.439 23.9733C21.3911 23.9733 21.3271 23.9733 21.2788 23.9733C20.1411 23.9733 19.196 23.0615 19.116 21.905C19.0359 20.7 19.9331 19.6254 21.1348 19.5435C21.1836 19.5402 21.2324 19.5386 21.2808 19.5386C22.4194 19.5386 23.3809 20.4395 23.4585 21.5955C23.49 22.1985 23.3135 22.7682 22.9292 23.2083C22.5449 23.6646 22.0159 23.9247 21.439 23.9733ZM7.65894 23.9669C6.45483 23.9669 5.47925 22.9779 5.47925 21.7566C5.47925 20.5361 6.45483 19.5471 7.65894 19.5471C8.86328 19.5471 9.83887 20.5361 9.83887 21.7566C9.83887 22.9779 8.86328 23.9669 7.65894 23.9669ZM20.6379 17.1008L8.57251 17.1008C8.13965 17.1008 7.75537 16.8075 7.64282 16.3845L3.71704 1.95471L0.961182 1.95471C0.432861 1.95471 0 1.51562 0 0.977417C0 0.440063 0.432861 0 0.961182 0L4.43872 0C4.87085 0 5.25513 0.293335 5.36768 0.717285L9.29346 15.1461L19.9971 15.1461L23.554 6.84082L11.6973 6.84082C11.168 6.84082 10.7351 6.40076 10.7351 5.86353C10.7351 5.32617 11.168 4.88611 11.6973 4.88611L25.0281 4.88611C25.3486 4.88611 25.6536 5.04895 25.8291 5.32617C26.0054 5.60242 26.0378 5.94446 25.9092 6.25403L21.519 16.514C21.3589 16.8723 21.0222 17.1008 20.6379 17.1008Z"
        fill="#fff" fill-opacity="1.000000" fill-rule="nonzero" />
    </svg>`

    const addLinkText = document.createElement('p')
    addLinkText.className = "add-link__add-txt"
    addLinkText.textContent = 'Add to Cart'

    boxItem.append(productItem)
    productItem.append(productItemLink)
    productItemLink.append(itemImg)
    productItemLink.append(itemContent)
    itemContent.append(itemContentTitle)
    itemContent.append(itemContentText)
    itemContent.append(itemContentPrice)
    productItem.append(addBox)
    addBox.append(addLink)
    addLink.append(addLinkText)
})


productItemEls = document.querySelectorAll('.add-box');

productItemEls.forEach(element => {
    element.addEventListener('click', function (e) {

        const price = element.parentElement.querySelector('.item-content__price');
        const brand = element.parentElement.querySelector('.item-content__title');
        const image = element.parentElement.querySelector('.item-image');
        const dataProduct =
            [{
                "brand": brand.textContent,
                "name": "ELLERY",
                "currency": "USD",
                "price": price.textContent,
                "color": "Red",
                "size": "Xl",
                "quantity": 1,
                "image": image.src
            }]

        const dataProductToCart = JSON.stringify(dataProduct)

        const products = JSON.parse(dataProductToCart)

        const cartItemsEl = document.querySelector('.cart-items');
        cartItemsEl.style.display = 'block'
        const productsBox = document.querySelector('.box-cart-items')

        products.forEach(product => {

            const productEl = document.createElement('div')
            productEl.classList.add('cart-product')

            const buttonEl = document.createElement('button')
            buttonEl.classList.add('cart-product__close')
            buttonEl.innerHTML = `<svg class="cart-product__close-img" width="18" height="18" viewBox="0 0 18 18" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path class="path-close"
        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
        fill="#575757" />
</svg>`

            const imgLink = document.createElement('a')
            imgLink.href = "product.html"
            const imgLinkEl = document.createElement('img')
            imgLinkEl.classList.add('cart-product__img')
            imgLinkEl.src = product.image
            imgLinkEl.alt = "product"

            const cartItemDsc = document.createElement('div')
            cartItemDsc.classList.add('cart-product-dsc')

            const nameLink = document.createElement('a')
            nameLink.href = "product.html"
            const nameLinkEl = document.createElement('h2')
            nameLinkEl.classList.add('cart-product-dsc__name')
            nameLinkEl.innerHTML = `${product.brand} <nobr>${product.name}</nobr>`

            const productPrpPrice = document.createElement('p')
            productPrpPrice.classList.add('cart-product-dsc__prop')
            productPrpPrice.innerHTML = `Price: <span class="cart-product-dsc__currency">${(product.currency === 'USD' ? '$' : '')}</span><span class="cart-product-dsc__price">${product.price}</span>`

            const productPrpColor = document.createElement('p')
            productPrpColor.classList.add('cart-product-dsc__prop')
            productPrpColor.innerHTML = `Color: <span class="cart-product-dsc__prop_color">${product.color}</span>`

            const productPrpSize = document.createElement('p')
            productPrpSize.classList.add('cart-product-dsc__prop')
            productPrpSize.innerHTML = `Size: <span class="cart-product-dsc__prop_color">${product.size}</span>`

            const productPrpQuantity = document.createElement('p')
            productPrpQuantity.classList.add('cart-product-dsc__prop')
            productPrpQuantity.innerHTML = `<label for="quantity">Quantity:</label>
            <input class="cart-product-dsc__quantity" type="number" step="1" min="1" max="99" id="quantity" value="1" />`

            productsBox.appendChild(productEl)
            productEl.append(buttonEl)
            productEl.append(imgLink)
            imgLink.append(imgLinkEl)
            productEl.append(cartItemDsc)
            cartItemDsc.append(nameLink)
            nameLink.append(nameLinkEl)
            cartItemDsc.append(productPrpPrice)
            cartItemDsc.append(productPrpColor)
            cartItemDsc.append(productPrpSize)
            cartItemDsc.append(productPrpQuantity)
        })

        const closeEls = document.querySelectorAll('.cart-product__close');
        let elemCount = closeEls.length
        closeEls.forEach(element => {
            element.addEventListener('click', function (e) {
                element.parentElement.remove()
                elemCount--
                if (elemCount === 0) {
                    cartItemsEl.style.display = 'none'
                }
            });
        })
    })
})






// const dataProductsInCart = `
// [
//     {
//         "id": 1,
//         "brand": "MANGO  PEOPLE",
//         "name": "T-SHIRT",
//         "currency": "USD",
//         "price": 300,
//         "color": "Red",
//         "size": "Xl",
//         "quantity": 2,
//         "image": "img/img3.png"
//     },
//     {
//         "id": 2,
//         "brand": "X M'O CAPSULE",
//         "name": "ELLERY",
//         "price": 52,
//         "currency": "USD",
//         "color": "Black",
//         "size": "X",
//         "quantity": 1,
//         "image": "img/img2.png"
//     }
// ]
// `