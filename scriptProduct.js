const products = JSON.parse(dataProducts)
console.log(products)

const productsBox = document.querySelector('.container-items')

products.forEach(product => {

    const productEl = document.createElement('div')
    productEl.classList.add('product')

    const cardLeft = document.createElement('div')
    cardLeft.classList.add('product__left')

    const productImg = document.createElement('img')
    productImg.classList.add('product__img')
    productImg.src = product.image
    productImg.alt = "product"

    const cardRight = document.createElement('div')
    cardRight.classList.add('product__right')

    const productBrand = document.createElement('h2')
    productBrand.classList.add('product__brand')
    productBrand.textContent = product.brand

    const productName = document.createElement('h2')
    productName.classList.add('product__name')
    productName.textContent = product.name

    const productPrpPrice = document.createElement('p')
    productPrpPrice.classList.add('product__prp')
    productPrpPrice.innerHTML = `Price: <span class="product__currency">${(product.currency === 'USD' ? '$' : '')}</span><span class="product__price">${product.price}</span>`

    const productPrpColor = document.createElement('p')
    productPrpColor.classList.add('product__prp')
    productPrpColor.innerHTML = `Color: <span class="product__color">${product.color}</span>`

    const productPrpSize = document.createElement('p')
    productPrpSize.classList.add('product__prp')
    productPrpSize.innerHTML = `Size: <span class="product__size">${product.size}</span>`

    const productPrpQuantity = document.createElement('p')
    productPrpQuantity.classList.add('product__prp')
    productPrpQuantity.innerHTML = `<label for="quantity">Quantity:</label>
            <input class="product__quantity" type="number" step="1" min="1" max="99" id="quantity" value="2" />`


    const buttonClose = document.createElement('button')
    buttonClose.classList.add('product__close')
    buttonClose.innerHTML = `<svg class="product__close-img" width="18" height="18" viewBox="0 0 18 18" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path class="path-close"
        d="M11.2454 9L17.5302 2.71521C17.8285 2.41736 17.9962 2.01331 17.9966 1.59192C17.997 1.17041 17.8299 0.766113 17.5322 0.467773C17.2344 0.169556 16.8304 0.00183105 16.4089 0.00134277C15.9875 0.000976562 15.5831 0.168091 15.2849 0.46582L9 6.75073L2.71515 0.46582C2.41687 0.167603 2.01233 0 1.59052 0C1.1687 0 0.764099 0.167603 0.46582 0.46582C0.167542 0.76416 0 1.1687 0 1.59045C0 2.01233 0.167542 2.41687 0.46582 2.71521L6.75067 9L0.46582 15.2848C0.167542 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167542 17.2358 0.46582 17.5342C0.764099 17.8324 1.1687 18 1.59052 18C2.01233 18 2.41687 17.8324 2.71515 17.5342L9 11.2493L15.2849 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8325 17.2358 18 16.8313 18 16.4095C18 15.9877 17.8325 15.5831 17.5342 15.2848L11.2454 9Z"
        fill="#575757" fill-opacity="1.000000" fill-rule="nonzero" />

</svg>`


    productsBox.append(productEl)
    productEl.append(cardLeft)
    cardLeft.append(productImg)
    productEl.append(cardRight)
    cardRight.append(productBrand)
    cardRight.append(productName)
    cardRight.append(productPrpPrice)
    cardRight.append(productPrpColor)
    cardRight.append(productPrpSize)
    cardRight.append(productPrpQuantity)
    cardRight.append(buttonClose)

});