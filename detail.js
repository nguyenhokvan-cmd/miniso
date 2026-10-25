
let id=Number(new URLSearchParams(location.search).get("id")),p=products.find(x=>x.id==id),d=document.getElementById("detail")
if(p)d.innerHTML=`<img src="${p.image}"><div><h1>${p.name}</h1><p><b>Category:</b> ${p.category}</p><div class="price" style="font-size:26px">${formatPrice(p.price)}</div><p class="desc">${p.desc}</p><button class="btn" onclick="addToCart(${p.id})">Add to Cart</button></div>`
else d.innerHTML="<h2>Product not found.</h2>"
