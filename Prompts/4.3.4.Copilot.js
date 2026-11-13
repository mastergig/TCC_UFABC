const cart = [];

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function addToCart(id, name, price) {

    const existing = cart.find(item => item.id === id);

    if(existing){
        existing.quantity++;
    }else{
        cart.push({
            id,
            name,
            price,
            quantity:1
        });
    }

    updateCart();
}

function updateCart(){

    cartItems.innerHTML = "";

    let total = 0;
    let quantity = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;
        quantity += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <h4>${item.name}</h4>
                <p>
                    Quantidade: ${item.quantity}
                </p>
                <p>
                    R$ ${(item.price * item.quantity)
                    .toFixed(2)}
                </p>
            </div>
        `;
    });

    cartCount.innerText = quantity;
    cartTotal.innerText = total.toFixed(2);
}

const openCart =
document.getElementById("openCart");

const closeCart =
document.getElementById("closeCart");

const cartDrawer =
document.getElementById("cartDrawer");

openCart.addEventListener("click", () => {
    cartDrawer.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartDrawer.classList.remove("active");
});