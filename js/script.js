// ===============================
// HARVESTLINK
// script.js
// ===============================


// Navbar berubah saat di-scroll
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#1B5E20";
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.3)";

    } else {

        header.style.background = "#2E7D32";
        header.style.boxShadow = "none";

    }

});


// ===============================
// Tombol Back To Top
// ===============================

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topButton";

document.body.appendChild(button);

button.style.position = "fixed";
button.style.bottom = "25px";
button.style.right = "25px";
button.style.width = "50px";
button.style.height = "50px";
button.style.borderRadius = "50%";
button.style.border = "none";
button.style.background = "#2E7D32";
button.style.color = "white";
button.style.fontSize = "22px";
button.style.cursor = "pointer";
button.style.display = "none";
button.style.boxShadow = "0 5px 10px rgba(0,0,0,.2)";


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

});


button.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Animasi saat halaman dibuka
// ===============================

window.onload = function () {

    document.body.style.opacity = "0";

    setTimeout(function () {

        document.body.style.transition = "1s";

        document.body.style.opacity = "1";

    }, 100);

};


// ===============================
// Form Kontak
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Terima kasih! Pesan Anda berhasil dikirim.");

        form.reset();

    });

}


// ===============================
// Console
// ===============================

console.log("HarvestLink berhasil dijalankan.");

/* ===========================
   Keranjang Awal
=========================== */

let jumlahKeranjang = 0;

document.getElementById("cart-count").innerHTML = jumlahKeranjang;