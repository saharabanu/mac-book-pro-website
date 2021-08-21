
const memoryCost = document.getElementById('memory-cost');

const bestPrice = document.getElementById('best-price');

let grandTotal = document.getElementById('grand-total');
// after promo offer
let totalPrice = document.getElementById('total-price');
// Memory cost
document.getElementById('config-eight-gb').addEventListener('click', function() {
    memoryCost.innerText = '0';
    updateTotal()
});
document.getElementById('config-sixteen-gb').addEventListener('click', function() {
    memoryCost.innerText = '180';
    updateTotal()
});
// Storage cost
const storageCost = document.getElementById('storage-cost');

document.getElementById('storage-first').addEventListener('click', function() {
    storageCost.innerText = '0';
    updateTotal()
});
document.getElementById('storage-second').addEventListener('click', function() {
    storageCost.innerText = '100';
    updateTotal()
});
document.getElementById('storage-third').addEventListener('click', function() {
    storageCost.innerText = '180';
    updateTotal()
});
// shipping delivery  
const deliveryCost = document.getElementById('delivery-charge');
document.getElementById('free-cost').addEventListener('click', function() {
    deliveryCost.innerText = '0';
    updateTotal()
});
document.getElementById('insert-shipping-cost').addEventListener('click', function() {
    deliveryCost.innerText = '20';
    updateTotal()
});
// update total  
function updateTotal() {
    let memoryCostTotal = parseInt(memoryCost.innerText);
   let productCostTotal = parseInt(bestPrice.innerText);
    let storageCostTotal = parseInt(storageCost.innerText);
    let shippingCost = parseInt(deliveryCost.innerText);
     let mainTotal = memoryCostTotal + storageCostTotal + productCostTotal + shippingCost;
     grandTotal.innerText = mainTotal;
    let totalCost = grandTotal.innerText;
    totalPrice.innerText = totalCost;
  }

  // promo code apply
 document.getElementById('code-btn').addEventListener('click', function() {
    const couponCode = document.getElementById('coupon-code');
    const priceTotal = document.getElementById('grand-total').innerText;
    const discount = (parseInt(priceTotal) / 100) * 20;
    const finalTotal = document.getElementById('total-price');

    if (couponCode.value == 'stevekaku') {
       finalTotal.innerText = parseInt(priceTotal) - discount;
    }  else {
        alert('invalid code');
    } 
    couponCode.value = '';

 })

