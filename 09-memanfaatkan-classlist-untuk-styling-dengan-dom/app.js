const heading = document.querySelector("h1");

console.info(heading);

// mengecek apakah attribute "class" itu memiliki nilai/sudah ada apa belum
console.info(heading.getAttribute("class"));

/*
    ini akan menambahkan sebuah attribute class yang memiliki nilai "border-danger", dan class css "border-danger"
    ini sudah memiliki style pada file "app.css", maka akan secara otomatis element "h1" akan mendapatkan style
    yang sudah diatur dalam file css
*/
heading.setAttribute("class", "border-danger");
console.info(heading);

// kita ingin menambahkan warna background nya, dengan class style yang sudah dimiliki yaitu "bg-info"
heading.setAttribute("class", "bg-info"); // maka efek border danger akan hilang, karena value class akan ditimpa

// menyimpan data class style sebelum nya ke variable
const currentValue = heading.getAttribute("class");

// jadi kita bisa menerapkan lebih dari satu class style
heading.setAttribute("class", `${currentValue} text-white`);

// melihat class style apa saja yang dimiliki oleh <h1>
console.info(heading.classList);

// menambahkan sebuah classList style baru
heading.classList.add("border-danger");

// menghapus sebuah classList "text-white"
heading.classList.remove("text-white");

console.info(heading.classList);

// mengecek apakah pada suatu element memiliki class style tertentu "return boolean"
console.info(heading.classList.contains("bg-info"));

console.info(heading.classList.contains("text-white"));

// fitur ini cukup bagus untuk mengatur style pada file css yang terpisah, karena dom hanya bisa membaca inline style