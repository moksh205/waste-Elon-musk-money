let money = document.querySelector("#money");
let amount = 100000000000

// Buy
let buys = document.querySelectorAll("#buy");
buys.forEach((buy, index) => {
    buy.addEventListener("click", () => {
        let boxes = document.querySelectorAll(".box")[index];
        let elementPrice = boxes.querySelector(".item-price");
        let quantityInput = boxes.querySelector("input");

        let quantity = parseInt(quantityInput.value);
        let price = parseFloat(elementPrice.innerText.replace('$', '').replace(',', ''));

        recipt(quantity, price, "purchase");
        quantityInput.value=0
    });
});

// Sell
let sells = document.querySelectorAll("#sell");
sells.forEach((sell, index) => {
    sell.addEventListener("click", () => {
        let boxes = document.querySelectorAll(".box")[index];
        let elementPrice = boxes.querySelector(".item-price");
        let quantityInput = boxes.querySelector("input");
        let quantity = parseInt(quantityInput.value);

        let price = parseFloat(elementPrice.innerText.replace('$', '').replace(',', ''));

        recipt(quantity, price, "sell");
        quantityInput.value=0
    });
});

let recipt = (quantity, price, action) => {
    if (isNaN(quantity)) {
        console.log(`0 ${action}`);
    } else {
        let totalAmount = quantity * price;
        console.log(`${action}: ${totalAmount}`);
        if (action === "purchase") {
            amount -= totalAmount;
        } else if (action === "sell") {
            amount += totalAmount;
        }
        console.log(`Remaining money: ${amount}`);
        money.innerText = "$"+amount;
    }
};
