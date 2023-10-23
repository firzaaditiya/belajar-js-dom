/*
    properties dan method yang penting diketahui

    method :
    - getAttribute()
    - setAttribute()
    - appendChild()
    - append()
    - prepend()
    - removeChild()
    - remove()

    properties :
    - classList
    - innerText
    - textContent
    - innerHTML
    - value
    - createElement
    - parentElement
    - children
    - nextSibling
    - previousSibling
    - style
*/

console.info(document.querySelector("h1"));

const heading = document.querySelector("h1");

// melihat properties apa saya yang ada di object heading (h1) yang didapat
console.dir(heading);

console.info(heading.innerText);
console.info(heading.textContent);
console.info(heading.innerHTML);

const paragraf = document.querySelector("p");

// hanya mendapatkan sebuah text tanpa format apapun
console.info(paragraf.innerText);

// ini akan mendapatkan sebuah text dan juga beberapa format seperti \n \t (test di console browser)
// format nya berasal dari bagaimana tag html p ditulis seperti indentasi dan new line
/*
    <p>
        mabar
    </p>

    ini akan menghasilkan \n dan \t, karena setelah <p> kita melakukan enter dan tab untuk indentasi pada text "mabar"
*/
console.info(paragraf.textContent);

/*
    selain mendapatkan format seperti "innerText", "innerHTML" ini juga bisa mendapatkan sebuah tag html jika
    didalam suatu element terdapat element lain, bahkan attribute sekalipun seperti pada tag <a href="">
*/
console.info(paragraf.innerHTML);

// mengubah nilai, ini tidak bisa memasukan sebuah tag
// paragraf.innerText = "ini kita <b>ubah</b> paragrafnya";

// mengubah nilai, ini tidak bisa memasukan sebuah tag (tidak akan berpengaruh)
// paragraf.textContent = "ini kita <b>ubah</b> paragrafnya";

/*
    jika kita ingin menambahkan sebuah format yang menggunakan tag tag html, kita perlu menggunakan
    "innerHTML"
*/
paragraf.innerHTML = "ini kita <b>ubah</b> paragrafnya"; // text "ubah" akan menjadi bold

const links = document.querySelectorAll("p a");

for (let link of links) {
    link.innerText = "Saya adalah link";
}