
/* MINISO AI GIFT STUDIO */

let studioStyle = "cute";

/* CHỌN PHONG CÁCH QUÀ TẶNG */
let styleButtons = document.querySelectorAll(".ai-style");

styleButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        styleButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
        studioStyle = button.dataset.style;
    });
});

/* HIỂN THỊ NGÂN SÁCH */
let budgetSlider = document.getElementById("studio-budget");
let budgetText = document.getElementById("studio-budget-value");

if (budgetSlider && budgetText) {
    budgetText.textContent = Number(budgetSlider.value).toLocaleString("vi-VN") + "đ";

    budgetSlider.addEventListener("input", function() {
        budgetText.textContent = Number(budgetSlider.value).toLocaleString("vi-VN") + "đ";
    });
}

/* TẠO GỢI Ý QUÀ TẶNG */
let generateButton = document.getElementById("studio-generate");

if (generateButton) {
    generateButton.addEventListener("click", function() {
        let person = document.getElementById("studio-person").value;
        let occasion = document.getElementById("studio-occasion").value;
        let budget = Number(document.getElementById("studio-budget").value);
        let result = document.getElementById("studio-results");

        if (typeof products === "undefined") {
            result.innerHTML = "<p>Product data has not loaded!</p>";
            return;
        }

        let categories = [];

        if (studioStyle === "cute") {
            categories = ["Toys", "Bags", "Beauty"];
        } else if (studioStyle === "useful") {
            categories = ["Stationery", "Electronics", "Home"];
        } else {
            categories = ["Home", "Toys", "Beauty"];
        }

        let gifts = products.filter(function(p) {
            return categories.includes(p.category) && p.price <= budget;
        });

        if (gifts.length === 0) {
            gifts = products.filter(function(p) {
                return p.price <= budget;
            });
        }

        gifts.sort(function(a, b) {
            return a.price - b.price;
        });

        gifts = gifts.slice(0, 3);

        let personText = "yourself";

        if (person === "friend") {
            personText = "your best friend";
        } else if (person === "family") {
            personText = "your family";
        } else if (person === "special") {
            personText = "someone special";
        }

        let occasionText = "a little surprise";

        if (occasion === "birthday") {
            occasionText = "a birthday";
        } else if (occasion === "thankyou") {
            occasionText = "a thank-you gift";
        } else if (occasion === "selfcare") {
            occasionText = "a self-care day";
        }

        let message = "<div class='ai-result-heading'>";
        message += "<h3>Your little gift collection ♡</h3>";
        message += "<p>Gift ideas for " + personText + " — " + occasionText + " 🎀</p>";
        message += "</div>";

        if (gifts.length === 0) {
            message += "<p class='ai-empty'>No suitable gifts found. Please increase your budget!</p>";
        } else {
            message += "<div class='ai-result-grid'>";

            gifts.forEach(function(p) {
                message += "<div class='ai-result-card'>";
                message += "<img src='" + p.image + "' alt='" + p.name + "' onerror=\"this.style.display='none'\">";
                message += "<div class='ai-result-body'>";
                message += "<span class='ai-match'>✦ YOUR GIFT MATCH</span>";
                message += "<h4>" + p.name + "</h4>";
                message += "<p>" + p.desc + "</p>";
                message += "<div class='ai-result-price'>" + formatPrice(p.price) + "</div>";
                message += "<div class='ai-result-actions'>";
                message += "<a href='product-detail.html?id=" + p.id + "'>Discover</a>";
                message += "<button type='button' onclick='addToCart(" + p.id + ")'>Add ♡</button>";
                message += "</div></div></div>";
            });

            message += "</div>";
        }

        result.innerHTML = message;
        result.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
