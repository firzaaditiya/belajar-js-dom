// mendapatkan element berdasarkan id
const banner = document.querySelector("#banner");
console.info(banner);

// melihat sebuah attribute yang dimiliki oleh suatu element html
console.info(banner.attributes);
console.info(banner.id);
console.info(banner.src);

// mengubah/memberikan nilai baru pada suatu attribute
banner.alt = "Gambar Kucing";

console.info(banner.alt);
console.info(banner);

// menambahkan sebuah attribute baru kepada element, menggunakan function "setAttribute"
banner.setAttribute("class", "nama-class");
console.info(banner);

// kita juga bisa mendapatkan sebuah nilai attribute dari sebuah element html, menggunakan function "getAttribute"
console.info(banner.getAttribute("class"));
console.info(banner.getAttribute("src"));