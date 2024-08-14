const sbtn = document.getElementById('sbtn')
const searchBar = document.querySelector('.search-bar')

sbtn.onclick = () => {
    searchBar.classList.toggle('active');
}

const mbtn = document.getElementById('mbtn')
const option = document.querySelector('.options')

mbtn.onclick = () => {
    option.classList.toggle('active');
}

const cbtn = document.getElementById('cbtn')
const cart = document.querySelector('.cart-container')

cbtn.onclick = () => {
    cart.classList.toggle('active');
}