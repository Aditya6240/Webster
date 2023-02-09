
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)

}
else {
    ready()
}
function ready() {
    var removecartItemButtons = document.getElementsByClassName('product-remove')
    console.log(removecartItemButtons)
    for (var i = 0; i < removecartItemButtons.length; i++) {
        var button = removecartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('qty-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)

    }
    var addToCartButtons = document.getElementsByClassName('btn-add-to-cart ')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}


function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()


}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()

}
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('product-title')[0].innerText

    var price = shopItem.getElementsByClassName('product-price')[0].innerText

    var imageSrc = document.getElementById('aditya')[0].src
    console.log(imageSrc)

    addItemToCart(title, price, imageSrc)


}
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('minicart-item ')
    var carItems = document.getElementsByClassName('minicart-loop')[0]
    var cartRowContents = `  <div class="mini-img-wrapper">
    <img class="mini-img" src="${imageSrc}" alt="img">
</div>
<div class="product-info">
    <h2 class="product-title"><a href="#">${title}</a></h2>
    
    <div class="misc d-flex align-items-end justify-content-between">
        <div class="quantity d-flex align-items-center justify-content-between">
            <button class="qty-btn dec-qty"><img src="assets/img/icon/minus.svg"
                    alt="minus"></button>
            <input class="qty-input" type="number" name="qty" value="1" min="0">
            <button class="qty-btn inc-qty"><img src="assets/img/icon/plus.svg"
                    alt="plus"></button>
        </div>
        <div class="product-remove-area d-flex flex-column align-items-end">
            <div class="product-price">${price}</div>
            <a href="#" class="product-remove">Remove</a>
        </div>
    </div>
</div`
    cartRow.innerHTML = cartRowContents
    carItems.append(cartRow)
}

function updateCartTotal() {
    var CartItemContainer = document.getElementsByClassName('minicart-loop')[0]
    var cartRows = CartItemContainer.getElementsByClassName('minicart-item ')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRows = cartRows[i]
        var priceElement = cartRows.getElementsByClassName('product-price')[0]
        var quantityElement = cartRows.getElementsByClassName('qty-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quntity = quantityElement.value
        total = total + (price * quntity)
    }
    total = math.rount(total * 100) / 100
    document.getElementsByClassName('cart-subtotal')[0].innerText = '$' + total
}
