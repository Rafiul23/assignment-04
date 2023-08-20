let total = 0;
let grandTotal = 0;
document.getElementById('card_1').addEventListener('click', function(){
    setElement('product_1', 'selected');
    const price = findPrice('price_1');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');

    if(total > 0){
        buttonPurchase.removeAttribute('disabled');
    } else {
        buttonPurchase.setAttribute('disabled', true);
    }
})

document.getElementById('card_2').addEventListener('click', function(){
    setElement('product_2', 'selected');
    const price = findPrice('price_2');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');

    if(total > 0){
        buttonPurchase.removeAttribute('disabled');
    } else {
        buttonPurchase.setAttribute('disabled', true);
    }
})

document.getElementById('card_3').addEventListener('click', function(){
    setElement('product_3', 'selected');
    const price = findPrice('price_3');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');

    if(total > 0){
    buttonPurchase.removeAttribute('disabled');
    } else {
        buttonPurchase.setAttribute('disabled', true);
    }
})

document.getElementById('card_4').addEventListener('click', function(){
    setElement('product_4', 'selected');
    const price = findPrice('price_4');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');

    if(total > 0){
    buttonPurchase.removeAttribute('disabled');
    } else {
        buttonPurchase.setAttribute('disabled', true);
    }  
})

document.getElementById('card_5').addEventListener('click', function(){
    setElement('product_5', 'selected');
    const price = findPrice('price_5');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');

    if(total > 0){
    buttonPurchase.removeAttribute('disabled');
    } else {
        buttonPurchase.setAttribute('disabled', true);
    }
})

document.getElementById('card_6').addEventListener('click', function(){
    setElement('product_6', 'selected');
    const price = findPrice('price_6');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');

    if(total > 0){
        buttonPurchase.removeAttribute('disabled');
    } else {
        buttonPurchase.setAttribute('disabled', true);
    }
})


document.getElementById('coupon-input').addEventListener('keyup', function(event){
    const coupon = event.target.value;
    const apply = document.getElementById('btn-apply');
    const currentTotalString = document.getElementById('total-price').innerText;
    const currentTotal = parseFloat(currentTotalString);
    
    if((coupon === 'SELL200') && (currentTotal >= 200) ){
        apply.removeAttribute('disabled');
    } else {
        apply.setAttribute('disabled', true);
    }
})

document.getElementById('btn-apply').addEventListener('click', function(){
    const currentTotalString = document.getElementById('total-price').innerText;
    const currentTotal = parseFloat(currentTotalString);
    const percentagee = 0.2;
    const discount = currentTotal * percentagee;
    const grandTotal = currentTotal - discount;
    setTotalPrice('discount', discount);
    setTotalPrice('grand-total', grandTotal);
})


