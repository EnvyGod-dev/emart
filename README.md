Mongolian eCommerce Website Clone (eMart.mn)
Энэхүү төсөл нь eMart.mn цахим худалдааны вэбсайтыг загварчилсан бөгөөд 25+ хуудастай, динамик контент ачаалдаг, бүтээгдэхүүний жагсаалт, дэлгэрэнгүй мэдээлэл, админ удирдлага, хэрэглэгчийн нэвтрэх болон бүртгүүлэх функцүүдийг багтаасан төсөл юм.


project-folder/
├── mainNavFoot/          # Толгой, хөл хэсгийн HTML файлууд
│   ├── header.html
│   ├── footer.html
├── product/              # Бүтээгдэхүүний хуудаснууд
│   ├── product.html
│   ├── product-details.html
├── admin/                # Админ хуудаснууд
│   ├── admin-dashboard.html
│   ├── admin-products.html
│   ├── admin-users.html
│   ├── admin-orders.html
├── auth/                 # Нэвтрэх/бүртгүүлэх хэсэг
│   ├── login.html
│   ├── signup.html
├── styles/               # CSS загвар
│   ├── style.css
├── scripts.js            # Бүх JavaScript логик
├── index.html            # Үндсэн хуудас
├── README.md             # Төслийн тайлбар



Хуудаснууд
Төслийн нийт 25+ хуудас дараах байдлаар ангилагдсан:

1. Үндсэн хэрэглэгчийн хуудас
index.html: Үндсэн нүүр хуудас.
product/product.html: Бүтээгдэхүүний жагсаалт.
product/product-details.html: Бүтээгдэхүүний дэлгэрэнгүй мэдээлэл.
2. Нэвтрэх, бүртгүүлэх
auth/login.html: Нэвтрэх хуудас.
auth/signup.html: Бүртгүүлэх хуудас.
3. Сагс ба хүсэлтийн жагсаалт
cart.html: Худалдан авалтын сагс.
wishlist.html: Хүсэлтийн жагсаалт.
4. Админ хуудас
admin/admin-dashboard.html: Админы удирдлагын самбар.
admin/admin-products.html: Бүтээгдэхүүний удирдлага.
admin/admin-users.html: Хэрэглэгчийн удирдлага.
admin/admin-orders.html: Захиалгын удирдлага.
Суулгах заавар
Энэ төсөл нь локал сервер дээр ажиллах тул Python эсвэл Node.js ашиглах шаардлагатай.

Алхам 1: Файлуудыг бэлтгэх
Төслийн файлуудыг татаж авна.
Төслийг ажиллуулахын тулд серверийн тохиргоог доорх заавраар хийнэ.


Python сервер ажиллуулна:
bash
Copy code
python -m http.server 8080
Дараах URL-ийг браузер дээрээ нээнэ:
arduino
Copy code
http://127.0.0.1:8080

Функциональ боломжууд
1. Динамик контент ачаалах
scripts.js нь толгой (header.html), хөл (footer.html), бүтээгдэхүүний жагсаалт (product.html) зэрэг файлуудыг динамикаар ачаалдаг.

function loadComponent(url, placeholderId, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}


2. Бүтээгдэхүүний жагсаалт
product.html доторх бүтээгдэхүүн дээр дарахад localStorage-д мэдээллийг хадгалж, product-details.html рүү шилждэг.

function initializeProductClickEvents() {
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", () => {
            const productData = {
                name: card.querySelector("h3").textContent,
                description: card.querySelector("p").textContent,
                price: card.querySelector(".product-price").textContent,
                rating: card.querySelector(".product-rating").textContent,
                image: card.querySelector("img").src
            };

            localStorage.setItem("productDetails", JSON.stringify(productData));
            window.location.href = `./product-details.html?name=${encodeURIComponent(productData.name)}`;
        });
    });
}


3. Бүтээгдэхүүний дэлгэрэнгүй
product-details.html нь localStorage-оос бүтээгдэхүүний мэдээллийг уншиж харуулна

document.addEventListener("DOMContentLoaded", function () {
    const productData = JSON.parse(localStorage.getItem("productDetails"));

    if (productData) {
        document.getElementById("product-image").src = productData.image;
        document.getElementById("product-name").textContent = productData.name;
        document.getElementById("product-description").textContent = productData.description;
        document.getElementById("product-price").textContent = productData.price;
        document.getElementById("product-rating").textContent = productData.rating;
    } else {
        console.error("Product data not found in localStorage.");
    }
});


CSS загвар
Сайтын бүхэл бүтэн дизайныг styles/style.css файлд тодорхойлсон. Жишээ нь:

.product-card {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    background-color: white;
    position: relative;
    transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}


Админы хуудас
Админ хэсэг нь дараах функцуудыг агуулна:

Dashboard - Нийт борлуулалт, шинэ хэрэглэгчид, захиалгын статус.
Products Management - Бүтээгдэхүүн нэмэх, устгах, засах.
User Management - Хэрэглэгчийн мэдээлэл, эрхийг засах.
Orders Management - Захиалгыг батлах, цуцлах.
