// İlk açılışta tüm kategorileri göster
document.addEventListener('DOMContentLoaded', function () {
    showAllCategories();
});

function showAllCategories() {
    var categories = document.querySelectorAll('.menu-category');
    categories.forEach(function (cat) {
        cat.style.display = 'block';
    });
}

function showCategory(category) {
    // Tüm menü kategorilerini gizle
    var categories = document.querySelectorAll('.menu-category');
    categories.forEach(function (cat) {
        cat.style.display = 'none';
    });

    // Belirtilen kategoriyi göster
    var selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}
