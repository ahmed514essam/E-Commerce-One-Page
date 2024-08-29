let minusButton = document.querySelector(".minusBtn");
let plusButton = document.querySelector(".plusBtn");
let Amount = document.querySelector(".spaceAmount");
let Amo = 0;
let pricePerUnit = 120;
plusButton.addEventListener("click", myPlus);
minusButton.addEventListener("click", myMin);

function myPlus() {
    if (Amo >= 10) {
        Amount.innerHTML = 10;
    } else {
        Amo += 1;
        Amount.innerHTML = Amo;
    }
}
function myMin() {
    if (Amo <= 1) {
        Amount.innerHTML = 0;
    } else {
        Amo -= 1;
        Amount.innerHTML = Amo;
    }
}
let content = document.querySelector(".contentCart");
function AddToCart() {
    localStorage.setItem("AmoProduct", Amo);
    CartShow(); 
}
function CartShow() {
    if (localStorage.getItem("AmoProduct")) {
        let am = localStorage.getItem("AmoProduct");
        let result = am * pricePerUnit;

        content.innerHTML = `
            <div class="imgCart"><img src="${imgesss}" alt="Product Image"/></div>
            <div class="detaolsCart">
                <p class="kl">Full Limited Edition Sneakers</p>
                <br/>
                <p class="spanAmoLocalStorge">
                    <span class="amou">$${pricePerUnit}.00 x ${am}</span>
                    <span>$${result}.00</span>
                </p>
            </div>
            <div class="basketCart">
                <button onclick="deLete()" class="red">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
            <button class="checkbtn">Check Box</button>
        `;
    } else {
        content.innerHTML = `<h3 class="kls">Your cart is empty !!</h3>`;
    }
}
function deLete() {
    localStorage.removeItem("AmoProduct");
    CartShow(); 
}
CartShow();

let ShowPhoto = document.querySelector(".bigselfimge");
let OnePhoto = document.querySelector(".oneimg");
let TwoPhoto = document.querySelector(".twoimg");
let ThreePhoto = document.querySelector(".threeimg");
let FourPhoto = document.querySelector(".fourimg"); 
let images = {
    one: "./imges/one.jpeg",
    two: "./imges/two.jpeg",
    three: "./imges/three.jpeg",
    four: "./imges/four.jpeg"
};
OnePhoto.addEventListener("click", () => selectPhoto('one'));
TwoPhoto.addEventListener("click", () => selectPhoto('two'));
ThreePhoto.addEventListener("click", () => selectPhoto('three'));
FourPhoto.addEventListener("click", () => selectPhoto('four'));
function selectPhoto(photo) {
    OnePhoto.classList.toggle("selected", photo === 'one');
    TwoPhoto.classList.toggle("selected", photo === 'two');
    ThreePhoto.classList.toggle("selected", photo === 'three');
    FourPhoto.classList.toggle("selected", photo === 'four') ;
    ShowPhoto.innerHTML = `<img src="${images[photo]}" alt="Selected Image" />`;
    imgesss = images[photo];
}

selectPhoto('one');
