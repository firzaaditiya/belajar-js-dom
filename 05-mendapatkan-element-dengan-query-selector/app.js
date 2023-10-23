/*
    querySelector(), adalah sebuah function yang all-in-one untuk mendapatkan sebuah element, karena dia bisa berdasasrkan
    tag, id, maupun class dan dia akan mendapatkan element pertama atau yang berada paling atas

    namun ketika kita ingin mendapatkan lebih dari satu element kita bisa menggunakan function yang bernama
    querySelectorAll()
*/
console.info(document.querySelector("p")); // berdasarkan tag
console.info(document.querySelectorAll("p"));
console.info(document.querySelector("#banner")); // berdasarkan id
console.info(document.querySelector(".square")); // berdasarkan class
console.info(document.querySelectorAll(".square")); // berdasarkan class

// mendapatkan sebuah element <a> yang berada di dalam element <p>
console.info(document.querySelectorAll("p a")); // bisa menggunakan pattern selector seperti CSS

// function querySelector() akan mengembalikan sebuah nodeList, dia mirip seperti HTMLCollection kita bisa melakukan iterasi
const links = document.querySelectorAll("p a");
for (const link of links) {
    console.info(link.href);
}

// menggunakan pattern selector yang cukup unik, mencari tag input yang tipe nya "checkbox"
console.info(document.querySelector("input[type='checkbox']"));