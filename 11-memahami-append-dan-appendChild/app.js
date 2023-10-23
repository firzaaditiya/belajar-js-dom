// kita bisa membuat sebuah element html
console.info(document.createElement("img"));

// membuat element baru
const newImage = document.createElement("img");

// menambahkan attribute "src" dengan nilai link gambar
newImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/P_20200909_090802_vHDR_On.jpg/800px-P_20200909_090802_vHDR_On.jpg"

console.info(newImage);

// menambahkan element ke dalam parent body, dan secara default berada dipaling bawah
document.body.appendChild(newImage);

// menambahkan classList
newImage.classList.add("square");
// newImage.setAttribute("class", "square");

const paragraf = document.querySelector("p");

/*
    append(), ini hampir seperti innerText, dia tidak akan dirender oleh browser, berbeda dengan appendChild(), yang
    lebih mengarah ke document, jadi ini hanya akan menambah suatu text saja dan berada dipaling akhir
*/
paragraf.append(" <b>Cat</b>");

// membuat element h2
const h2 = document.createElement("h2");
h2.append("This is about Cat");

console.info(h2);

// mendapatkan element h1
const h1 = document.querySelector("h1");
console.info(h1);

/*
    dokumentasi function insertAdjacentElement()
    https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

    kita bisa menambahkan element setelah element tertentu atau diantara element tertentu

    afterend, artinya setelah h1
*/
h1.insertAdjacentElement("afterend", h2);

const toc = document.querySelector("#toc");
console.info(toc);

// bisa juga menggunakan appendChild(), untuk menambahkan element namun berada diakhir
// toc.appendChild(newImage);