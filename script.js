let total = 0;
let grandTotal = 0;
document.getElementById('card_1').addEventListener('click', function(){
    setElement('product_1', 'selected');
    const price = findPrice('price_1');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
})

document.getElementById('card_2').addEventListener('click', function(){
    setElement('product_2', 'selected');
    const price = findPrice('price_2');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
})

document.getElementById('card_3').addEventListener('click', function(){
    setElement('product_3', 'selected');
    const price = findPrice('price_3');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
})

document.getElementById('card_4').addEventListener('click', function(){
    setElement('product_4', 'selected');
    const price = findPrice('price_4');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
})

document.getElementById('card_5').addEventListener('click', function(){
    setElement('product_5', 'selected');
    const price = findPrice('price_5');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
})

document.getElementById('card_6').addEventListener('click', function(){
    setElement('product_6', 'selected');
    const price = findPrice('price_6');
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceString);
    total = totalPrice + price;
    setTotalPrice('total-price', total);
})