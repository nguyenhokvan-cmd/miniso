
function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let box = document.getElementById("cartList");
    let total = 0;

    if (!box) return;

    box.innerHTML = "";

    if (cart.length === 0) {
        box.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("cartTotal").textContent = "";
        return;
    }

    cart.forEach(function(p, i) {
        total += p.price * p.qty;

        box.innerHTML += `
            <div class="cart-row">
                <img src="${p.image}" alt="${p.name}">
                <div>
                    <b>${p.name}</b>
                    <p>${formatPrice(p.price)}</p>
                </div>
                <div>Qty: ${p.qty}</div>
                <div>${formatPrice(p.price * p.qty)}</div>
                <button class="remove" onclick="removeItem(${i})">✕ Remove</button>
            </div>
        `;
    });

    document.getElementById("cartTotal").textContent =
        "Total: " + formatPrice(total);
}

function removeItem(i) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.splice(i, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
    updateCartCount();
}

function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }

    if (!localStorage.getItem("currentUser")) {
        alert("Please login first");
        location.href = "login.html";
        return;
    }

    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    renderCart();
    updateCartCount();
}

renderCart();
