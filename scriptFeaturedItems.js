const featuredItems = JSON.parse(dataProducts)

const boxItem = document.querySelector('.box-items')

featuredItems.forEach(product => {

    const productItem = document.createElement('a')
    productItem.className = "product-item"
    productItem.href = "product.html"

    const boxImg = document.createElement('div')
    boxImg.className = "item-image"

    const itemImg = document.createElement('img')
    itemImg.className = "item-image__image"
    itemImg.src = product.image
    itemImg.alt = "product"

    const itemImgAddToCart = document.createElement('img')
    itemImgAddToCart.className = "item-image__add-to-cart"
    itemImgAddToCart.src = "img/add_to_cart.svg"
    itemImgAddToCart.alt = "add to cart"

    const itemContent = document.createElement('div')
    itemContent.className = "item-content"

    const itemContentTitle = document.createElement('h5')
    itemContentTitle.className = "item-content__title"
    itemContentTitle.textContent = product.brand

    const itemContentText = document.createElement('p')
    itemContentText.className = "item-content__text"
    itemContentText.textContent = product.description

    const itemContentPrice = document.createElement('p')
    itemContentPrice.className = "item-content__price"
    itemContentPrice.textContent = ` ${(product.currency === 'USD' ? '$' : '')}${product.price}`

    boxItem.append(productItem)
    productItem.append(boxImg)
    boxImg.append(itemImg)
    boxImg.append(itemImgAddToCart)
    productItem.append(itemContent)
    itemContent.append(itemContentTitle)
    itemContent.append(itemContentText)
    itemContent.append(itemContentPrice)

})