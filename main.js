
/* MOBILE MENU */
function toggleMenu() {
    let nav = document.getElementById("navLinks");

    if (nav) {
        nav.classList.toggle("show");
    }
}

/* FORMAT PRICE */
function formatPrice(price) {
    return Number(price).toLocaleString("vi-VN") + "đ";
}

/* UPDATE CART COUNT */
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let count = 0;

    cart.forEach(function(p) {
        count += Number(p.qty) || 0;
    });

    let cartCount = document.getElementById("cartCount");
    let cartCount2 = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = count;
    }

    if (cartCount2) {
        cartCount2.textContent = count;
    }
}

/* ADD TO CART */
window.addToCart = function(id) {
    if (typeof products === "undefined") {
        alert("Product data has not loaded!");
        return;
    }

    let product = products.find(function(p) {
        return p.id === Number(id);
    });

    if (!product) {
        alert("Product not found!");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    let found = cart.find(function(p) {
        return p.id === product.id;
    });

    if (found) {
        found.qty = (Number(found.qty) || 0) + 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Added to cart!");
};

/* UPDATE CART COUNT WHEN PAGE LOADS */
updateCartCount();
