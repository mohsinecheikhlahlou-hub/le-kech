// Hämta elementen jag behöver
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product");


// 1. Öppna och stäng mobilmenyn
function openMenu() {
    nav.classList.toggle("nav--open");
}

menuButton.addEventListener("click", openMenu);


// 2. Filtrera produkterna
function filterProducts(event) {

    // Vilken kategori klickade användaren på?
    const selectedCategory = event.currentTarget.dataset.filter;

    // Ta bort active från alla knappar
    filterButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Lägg active på den valda knappen
    event.currentTarget.classList.add("active");


    // Visa eller dölj produkterna
    products.forEach(function(product) {

        const productCategory = product.dataset.category;

        if (
            selectedCategory === "all" ||
            productCategory === selectedCategory
        ) {
            product.classList.remove("hidden");
        } else {
            product.classList.add("hidden");
        }

    });
}


// Koppla filterknapparna till funktionen
filterButtons.forEach(function(button) {
    button.addEventListener("click", filterProducts);
});