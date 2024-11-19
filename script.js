let money = document.querySelector("#money");
let amount = 100000000000000000;

// Format number with commas
const formatMoney = (value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });

// Buy
let buys = document.querySelectorAll("#buy");
buys.forEach((buy, index) => {
    buy.addEventListener("click", () => {
        let boxes = document.querySelectorAll(".box")[index];
        let elementPrice = boxes.querySelector(".item-price");
        let quantityInput = boxes.querySelector("input");

        let quantity = parseInt(quantityInput.value);
        let price = parseFloat(elementPrice.innerText.replace('$', '').replace(',', ''));

        if (isNaN(quantity) || quantity <= 0) {
            alert("Please enter a valid quantity!");
            return;
        }

        if (amount < quantity * price) {
            alert("Not enough money!");
            return;
        }

        receipt(quantity, price, "purchase");
        quantityInput.value = 0;
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

        if (isNaN(quantity) || quantity <= 0) {
            alert("Please enter a valid quantity!");
            return;
        }

        receipt(quantity, price, "sell");
        quantityInput.value = 0;
    });
});

let receipt = (quantity, price, action) => {
    let totalAmount = quantity * price;

    if (action === "purchase") {
        amount -= totalAmount;
    } else if (action === "sell") {
        amount += totalAmount;
    }

    console.log(`${action}: ${formatMoney(totalAmount)}`);
    console.log(`Remaining money: ${formatMoney(amount)}`);
    money.innerText = formatMoney(amount);
};
