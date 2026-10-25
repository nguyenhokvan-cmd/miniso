
const products = [
    { id: 1, name: "Sanrio Plush Toy", price: 189000, category: "Toys", image: "https://i.pinimg.com/736x/8e/5b/95/8e5b95ea95ac3bfa22c08a764323d0d5.jpg", desc: "Một chú gấu bông mang phong cách vừa dễ thương." },
    { id: 2, name: "Mini Shoulder Bag", price: 249000, category: "Bags", image: "https://kheartshop.com/cdn/shop/files/IMG_0780_1024x1024@2x.jpg?v=177394877", desc: "Túi đeo vai nhỏ gọn, tiện dụng cho những ngày đi chơi." },
    { id: 3, name: "Cute Water Bottle", price: 129000, category: "Home", image: "https://i.pinimg.com/736x/71/29/3a/71293ab31f494a25c6aeda75b1e61460.jpg", desc: "Bình nước thiết kế trẻ trung, dễ mang theo." },
    { id: 4, name: "Wireless Earphones", price: 399000, category: "Electronics", image: "https://i.pinimg.com/736x/22/a7/e2/22a7e2e80952598d4c3a02461236971c.jpg", desc: "Tai nghe không dây nhỏ gọn cho nhu cầu nghe nhạc hằng ngày." },
    { id: 5, name: "Stationery Set", price: 99000, category: "Stationery", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80", desc: "Bộ văn phòng phẩm nhiều món, phù hợp học tập." },
    { id: 6, name: "Beauty Mirror", price: 159000, category: "Beauty", image: "https://i.pinimg.com/736x/c5/83/ab/c583abfb193f6c305a1f1ce5958b4d1f.jpg", desc: "Gương nhỏ gọn với thiết kế tối giản và dễ thương." },
    { id: 7, name: "Desk Organizer", price: 119000, category: "Home", image: "https://minisoshop.co.uk/media/catalog/product/cache/146b1d869492b0a640f289f50b0f69c1/6/9/6942269578873_2_.jpg", desc: "Khay sắp xếp bàn học và bàn làm việc." },
    { id: 8, name: "Character Keychain", price: 79000, category: "Toys", image: "https://tse1.mm.bing.net/th/id/OIP.0WHP3PCF7Zbb9nltghU-WQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Móc khóa nhân vật đáng yêu, nhỏ gọn và dễ mang theo." },
    { id: 9, name: "Towel", price: 79000, category: "Beauty", image: "https://i.pinimg.com/736x/86/b8/2c/86b82ce8d05b20ada20b46b5fbed6e8d.jpg", desc: "Khăn giữ ấm." },
    { id: 10, name: "Pyjama", price: 179000, category: "Home", image: "https://i.pinimg.com/736x/fb/e8/95/fbe89571b6f21da0e981d3ade120e1d0.jpg", desc: "Pyjama sói cô độc" },
    { id: 11, name: "Tote", price: 263000, category: "Beauty", image: "https://i.pinimg.com/736x/64/16/b5/6416b53a95db78658a27ad80ed3e79f8.jpg", desc: "Túi tò te Việt Kiều" },
    { id: 12, name: "Teddy", price: 180000, category: "Toys", image: "https://i.pinimg.com/736x/d5/17/68/d517688c7f7f2667e776dc327e2fd329.jpg", desc: "đồ chơi 9.0 ielts" },
    { id: 13, name: "beauty bag", price: 1800000, category: "Bags", image: "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mnxy6isfxptwbb_tn", desc: "túi xách" },
    { id: 14, name: "Kawaii Bag", price: 3861000, category: "Bags", image: "https://i.pinimg.com/736x/a1/e3/02/a1e3029e17da4613162731dfc619652e.jpg", desc: "túi xách kawaii" },
    { id: 15, name: "Digital Camera", price: 9364000, category: "Electronics", image: "https://i.pinimg.com/736x/58/d2/6a/58d26ac84fd524affe0538eb77d6f91c.jpg", desc: "máy ảnh sắc nét, chụp là nét." },
    { id: 16, name: "SWITCH", price: 9326300, category: "Electronics", image: "https://i.pinimg.com/1200x/f9/a4/d4/f9a4d4a543d1afa6d17c995e172239f0.jpg", desc: "máy chơi game cầm tay đa năng." },
    { id: 17, name: "Notebooks Set", price: 190000, category: "Stationery", image: "https://down-vn.img.susercontent.com/file/sg-11134201-825ai-mg69zfh72u4o4d@resize_w900_nl.webp", desc: "Bộ vở ghi chú cho học sinh/sinh viên/...." },
    { id: 18, name: "cute umbrella", price: 457000, category: "Stationery", image: "https://i.pinimg.com/1200x/43/b3/e3/43b3e311cfb54275de176d03665ba2a5.jpg", desc: "dù chống gì cũng được" }
];


let featuredBox = document.getElementById("featuredProducts");

if (featuredBox) {
    featuredBox.innerHTML = "";

    products.slice(0, 4).forEach(function(p) {
        featuredBox.innerHTML += `
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
}
