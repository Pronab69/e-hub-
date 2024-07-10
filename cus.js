$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
    $('.faded').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
    });

    $('.pro-img-slide').slick({

        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',


    });

});
function changeQuantity(amount) {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    var newQuantity = currentQuantity + amount;
    if (newQuantity > 0) {
        quantityInput.value = newQuantity;
    }
};
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var productName = document.querySelector('h3 span').innerText;
    var price = document.getElementById('price').innerText;
    var size = document.querySelector('input[name="size"]:checked').value;
    var colour = document.querySelector('input[name="colour"]:checked').value;
    var quantity = document.getElementById('quantity').value;
    
    var product = {
        name: productName,
        price: price,
        size: size,
        colour: colour,
        quantity: quantity
    };
    
    addToCart(product);
    
});

function addToCart(product) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}