// melihat isi document
console.info(document);

// melihat seluruh object yang ada pada document
console.dir(document);

// mendapatkan element tertentu
console.info(document.all);
console.info(document.all[11]);

// mengubah nilai suatu element
document.all[11].innerText = "Bird";
