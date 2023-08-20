let total = 0;

document.getElementById('card_1').addEventListener('click', function(){
    setElement('product_1', 'selected');
    const price = findPrice('price_1');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setValue('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');
    const apply = document.getElementById('btn-apply');

    if(total >= 200){
        apply.removeAttribute('disabled');
        apply.style.backgroundColor = '#e527b2';
    } else if(total > 0) {
        buttonPurchase.removeAttribute('disabled');
        buttonPurchase.style.backgroundColor = '#e527b2';
    } else {
        buttonPurchase.setAttribute('disabled', true);
        apply.setAttribute('disabled', true);
    }
})

document.getElementById('card_2').addEventListener('click', function(){
    setElement('product_2', 'selected');
    const price = findPrice('price_2');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setValue('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');
    const apply = document.getElementById('btn-apply');

    if(total >= 200){
        apply.removeAttribute('disabled');
        apply.style.backgroundColor = '#e527b2';
    } else if(total > 0) {
        buttonPurchase.removeAttribute('disabled');
        buttonPurchase.style.backgroundColor = '#e527b2';
    } else {
        buttonPurchase.setAttribute('disabled', true);
        apply.setAttribute('disabled', true);
    }
})

document.getElementById('card_3').addEventListener('click', function(){
    setElement('product_3', 'selected');
    const price = findPrice('price_3');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setValue('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');
    const apply = document.getElementById('btn-apply');

    if(total >= 200){
        apply.removeAttribute('disabled');
        apply.style.backgroundColor = '#e527b2';
    } else if(total > 0) {
        buttonPurchase.removeAttribute('disabled');
        buttonPurchase.style.backgroundColor = '#e527b2';
    } else {
        buttonPurchase.setAttribute('disabled', true);
        apply.setAttribute('disabled', true);
    }
})

document.getElementById('card_4').addEventListener('click', function(){
    setElement('product_4', 'selected');
    const price = findPrice('price_4');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setValue('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');
    const apply = document.getElementById('btn-apply');

    if(total >= 200){
        apply.removeAttribute('disabled');
        apply.style.backgroundColor = '#e527b2';
    } else if(total > 0) {
        buttonPurchase.removeAttribute('disabled');
        buttonPurchase.style.backgroundColor = '#e527b2';
    } else {
        buttonPurchase.setAttribute('disabled', true);
        apply.setAttribute('disabled', true);
    }
})

document.getElementById('card_5').addEventListener('click', function(){

    setElement('product_5', 'selected');
    const price = findPrice('price_5');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setValue('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');
    const apply = document.getElementById('btn-apply');

    if(total >= 200){
        apply.removeAttribute('disabled');
        apply.style.backgroundColor = '#e527b2';
    } else if(total > 0) {
        buttonPurchase.removeAttribute('disabled');
        buttonPurchase.style.backgroundColor = '#e527b2';
    } else {
        buttonPurchase.setAttribute('disabled', true);
        apply.setAttribute('disabled', true);
    }
})

document.getElementById('card_6').addEventListener('click', function(){
    setElement('product_6', 'selected');
    const price = findPrice('price_6');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setValue('total-price', total);
    const buttonPurchase = document.getElementById('btn-purchase');
    const apply = document.getElementById('btn-apply');

    if(total >= 200){
        apply.removeAttribute('disabled');
        apply.style.backgroundColor = '#e527b2';
    } else if(total > 0) {
        buttonPurchase.removeAttribute('disabled');
        buttonPurchase.style.backgroundColor = '#e527b2';
    } else {
        buttonPurchase.setAttribute('disabled', true);
        apply.setAttribute('disabled', true);
    }
})



document.getElementById('btn-apply').addEventListener('click', function(){

    const coupon = getInputValueById('coupon-input');
     
    if(coupon === 'SELL200'){
        const currentTotalString = document.getElementById('total-price').innerText;
        const currentTotal = parseFloat(currentTotalString);
        const percentagee = 0.2;
        const discount = currentTotal * percentagee;
        const grandTotal = currentTotal - discount;
        setValue('discount', discount);
        setValue('grand-total', grandTotal);
    } else {
        alert('Your coupon is not valid');
    }
   
})

document.getElementById('reset').addEventListener('click', function(){
    setValue('total-price', 0);
    setValue('discount', 0);
    setValue('grand-total', 0);

    const listItems = document.querySelectorAll('#selected li');

    for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        const parent = document.querySelector('#selected');

        parent.removeChild(listItem);
  
    }

   
})


