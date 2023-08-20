function findPrice(id){
    const el = document.getElementById(id);
    const priceString = el.innerText;
    const price = parseFloat(priceString);
    return price;
}

function setElement(productId, selectId){
    const product = document.getElementById(productId);
    const li = document.createElement('li');
    li.innerText = product.innerText;
    li.style.color = '#111';
    li.style.fontWeight = 'bold';
    const selected = document.getElementById(selectId);
    selected.appendChild(li);
}

function getInputValueById(id){
    const el = document.getElementById(id);
    const inputValue = el.value;
    return inputValue;
}

function setValue(id, totalPrice){
    const el = document.getElementById(id);
    el.innerText = totalPrice;
}