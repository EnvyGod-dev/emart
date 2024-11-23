document.addEventListener("DOMContentLoaded", function () {
    loadComponent("mainNavFoot/header.html", "header-placeholder");
    loadComponent("mainNavFoot/footer.html", "footer-placeholder");
    loadComponent("product/product.html", "product-container", initializeProductClickEvents);
    checkAdminAccess();
});

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
            window.location.href = `product-details.html`;
        });
    });
}

function renderProductDetails() {
    const product = JSON.parse(localStorage.getItem("productDetails"));
    if (product) {
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-rating").textContent = product.rating;
    } else {
        console.error("No product data found in localStorage.");
    }
}

function checkAdminAccess() {
    const isAdmin = localStorage.getItem("isAdmin");
    const protectedRoutes = ["admin/admin-dashboard.html", "admin/admin-products.html"];
    if (protectedRoutes.includes(window.location.pathname) && isAdmin !== "true") {
        alert("Админ нэвтрэх шаардлагатай!");
        window.location.href = "auth/login.html";
    }
}

function handleAdminLogin(username, password) {
    if (username === "admin" && password === "password123") {
        localStorage.setItem("isAdmin", "true");
        alert("Амжилттай нэвтэрлээ!");
        window.location.href = "admin/admin-dashboard.html";
    } else {
        alert("Нэр эсвэл нууц үг буруу байна!");
    }
}

function handleLogout() {
    localStorage.clear();
    alert("Системээс гарлаа!");
    window.location.href = "index.html";
}

function addToWishlist(product) {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Бүтээгдэхүүнийг хүсэлтийн жагсаалтанд нэмлээ!");
}

function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Бүтээгдэхүүнийг сагсанд нэмлээ!");
}
