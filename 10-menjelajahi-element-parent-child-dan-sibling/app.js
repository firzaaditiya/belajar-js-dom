const textBold = document.querySelector("b");

console.info(textBold);

// kita bisa mendapatkan sebuah parent element dari suatu element yang kita dapatkan
// disini kita mencoba untuk mendapatkan parent element dari tag <b>
console.info(textBold.parentElement);

// kita juga bisa mendapatkan parent element dari parent yang sudah kita dapatkan
console.info(textBold.parentElement.parentElement);

const paragraf = textBold.parentElement;

console.info(paragraf);

// kita juga bisa melihat apakah suatu element itu memiliki turunan apa saja, menggunakan property "children"
console.info(paragraf.children);

// mendapatkan element child tertentu dengan menggunakan index
console.info(paragraf.children[6]);

// kita juga bisa mendapatkan ada berapa jumlah child element yang dimiliki
console.info(paragraf.children[6].childElementCount); // memiliki 1 child

// mengecek apakah memang memiliki 1 child
console.info(paragraf.children[6].children);

console.info(paragraf.children[6].parentElement);

// mendapatkan object gambar pada class .square
const squareImg = document.querySelector(".square");

console.info(squareImg);

/*
    kita bisa mendapatkan sebuah object element dari element yang sudah kita pilih, pada code diatas kita sudah
    mendapatkan object dari squareImg pertama, kita bisa mendapatkan object selanjut nya maupun sebelumnya menggunakan
    "nextSibling, nextElementSibling" atau "previousSibling, previousElementSibling".
*/

/*
    ini akan mendapatkan element sebelumnya yang ditulis pada source code asli, berlaku jika baris sebelumnya adalah
    sebuah newline "\n" maupun tab "\t"
*/
console.info(squareImg.previousSibling);

/*
    ini akan mendapatkan element selanjutnya yang ditulis pada source code asli, berlaku jika baris selanjutnya adalah
    sebuah newline "\n" maupun tab "\t"
*/
console.info(squareImg.nextSibling);

/*
    jika kita ingin mencari element setelah atau sebelum kita perlu menggunakan "nextElementSibling" atau
    "previousElementSibling"
*/
// mendapatkan element sebelumnya
console.info(squareImg.previousElementSibling);

// mendapatkan element setelahnya
console.info(squareImg.nextElementSibling);

// contoh penggabungan dengan function getAttribute
console.info(squareImg.nextElementSibling.getAttribute("class"));
