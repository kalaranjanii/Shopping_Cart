addToCartButtons = document.querySelectorAll('.addcart')
cartContainer = document.getElementsByTagName('tbody')[0];
quantityFields = document.getElementsByClassName('num');
delete_buttons = document.getElementsByClassName('button');

for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)
    
}

function addToCart(event){
    
    
itemContainer = document.createElement('tr')
btn = event.target
btnGrandParent = btn.parentElement.parentElement
btnParent = btn.parentElement
itemImage = btnGrandParent.children[0].src
itemName = btnParent.children[0].innerText
itemPrice = btnParent.children[1].innerText
    

    itemContainer.innerHTML = `
    <td><input class="checkbox" type="checkbox"></td>
    <td><img class="img" src=${itemImage} width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="total-price"><h3>${itemPrice}</h3></td>
    <td><button class="button" type="button">Remove</button></td>
`

    cartContainer.append(itemContainer);
    
    for(let i = 0; i < quantityFields.length; i++){
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost)
               
    }

    for(i=0;i<delete_buttons.length;i++){
        delete_buttons[i].addEventListener('click',removeItem)
    }
    grandTotal()
   
}

function totalCost(event){
    let quantity = event.target
    quantityparent = quantity.parentElement.parentElement
    priceField = quantityparent.getElementsByClassName('item-price')[0]
    totalField = quantityparent.getElementsByClassName('total-price')[0]
    priceFieldContent = priceField.innerText.replace('$', '')
    totalField.children[0].innerText = '$' +  quantity.value * priceFieldContent
    grandTotal()
    if(isNaN(quantity.value)||quantity.value<=0){
        quantity.value=1;
    }    

}

function grandTotal(){
    total = 0
    grand_total = document.getElementsByClassName('grand-total')[0];
    alltotalfields = document.getElementsByClassName('total-price');
    for(let i = 0; i < alltotalfields.length; i++){
        allprice = Number(alltotalfields[i].innerText.replace('$', ''))
        total+=allprice
    }
    grand_total.children[0].innerText = "$"+total
    grand_total.children[0].style.fontWeight = 'bold'
    

    console.log(total);
}


function removeItem(event){
    deletebtn = event.target
    deletebtnparent = deletebtn.parentElement.parentElement
    deletebtnparent.remove()
    console.log(deletebtn)
    grandTotal()
}
