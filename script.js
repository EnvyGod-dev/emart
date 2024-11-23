document.addEventListener("DOMContentLoaded", function () {
    loadComponent("mainNavFoot/header.html", "header-placeholder");
    loadComponent("mainNavFoot/footer.html", "footer-placeholder");
    loadComponent("product/product.html", "product-container", initializeProductClickEvents);
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

            // Store product data in localStorage for the details page
            localStorage.setItem("productDetails", JSON.stringify(productData));

            // Ensure the path to product-details.html is correct
            window.location.href = `product-details.html`;
        });
    });
}
