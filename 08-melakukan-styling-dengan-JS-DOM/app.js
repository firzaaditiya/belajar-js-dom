const heading = document.querySelector("h1");

console.info(heading);

// melihat object properties style
console.info(heading.style);

/*
    melihat value property color, dimana pada app.css "h1" memiliki nilai sytle "color: cyan"

    ini akan tetap memiliki empty string walaupun pada css sudah memiliki "color: cyan"
    .
    DOM hanya bisa membaca style yang inline pada tag html nya, tidak bisa mendapatkan data style dari
    external data seperti file css
*/
console.info(heading.style.color); // test di console browser

const links = document.querySelectorAll("a");

for (const link of links) {
    // mengubah warna text link
    link.style.color = "rgb(0, 108, 134)";

    // mengubah warna text decoration
    link.style.textDecorationColor = "magenta";

    // mengubah style text decoration
    link.style.textDecorationStyle = "wavy";
}