console.info(document.getElementById("banner"));

// mendapatkan object berdasarkan id, dan menyimpan nya ke variable
const banner = document.getElementById("banner");

// melihat isi object
console.info(banner);
console.info(banner.src);

const toc = document.getElementById("toc");

// menampilkan daftar interaktif properti objek JavaScript yang ditentukan.
// Outputnya disajikan sebagai daftar hierarki dengan segitiga pengungkapan yang memungkinkan Anda melihat konten objek anak.
console.dir(toc);