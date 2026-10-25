
let list = document.getElementById("productList");
let filters = document.getElementById("filters");
let search = document.getElementById("searchInput");
let current = "All";

if (list && filters && search && typeof products !== "undefined") {
    let cats = ["All", ...new Set(products.map(function(p) {
        return p.category;
    }))];

    filters.innerHTML = "";

    cats.forEach(function(c) {
        let b = document.createElement("button");
        b.textContent = c;

        b.onclick = function() {
            current = c;

            document.querySelectorAll("#filters button").forEach(function(x) {
                x.classList.remove("active");
            });

            b.classList.add("active");
            render();
        };

        if (c === "All") {
            b.classList.add("active");
        }

        filters.appendChild(b);
    });

    function render() {
        let q = search.value.toLowerCase();
        list.innerHTML = "";

        let filteredProducts = products.filter(function(p) {
            return (current === "All" || p.category === current) &&
                p.name.toLowerCase().includes(q);
        });

        filteredProducts.forEach(function(p) {
            list.innerHTML += `
                <div class="card">
                    <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null; this.src='https://placehold.co/400x400/f8e8ef/555?text=MINISO';">
                    <div class="card-body">
                        <h3>${p.name}</h3>
                        <p>${p.category}</p>
                        <div class="price">${Number(p.price).toLocaleString("vi-VN")}đ</div>
                        <div class="card-actions">
                            <a class="btn light" href="product-detail.html?id=${p.id}">View</a>
                            <button class="btn" onclick="addToCart(${p.id})">Add</button>
                        </div>
                    </div>
                </div>
            `;
        });

        if (filteredProducts.length === 0) {
            list.innerHTML = "<p>No products found.</p>";
        }
    }

    search.addEventListener("input", render);

    let cat = new URLSearchParams(location.search).get("cat");

    if (cat && cats.includes(cat)) {
        current = cat;

        document.querySelectorAll("#filters button").forEach(function(b) {
            b.classList.toggle("active", b.textContent === cat);
        });
    }

    render();
}
