/*
    kita bisa menghapus suatu element menggunakan remove() atau "Node".removeChild()
*/

const firstLi = document.querySelector("li");

console.info(firstLi);

/*
    kita mencoba menghapus list pertama, namun ketika kita menggunakan removeChild(), kita perlu mengseleksi atau
    mendapatkan elementParent nya terlebih dahulu

    ketika kita menggunakan removeChild, ini lebih aman untuk browser versi lama bisa menggunakan nya
*/
firstLi.parentElement.removeChild(firstLi); // menghapus list pertama

/*
    ada cara singkat nya kita bisa langsung menghapus element yang dipilih, menggunakan remove()

    namun method ini bisa digunakan untuk browser dengan versi versi yang tinggi atau terbaru tidak seperti
    removeChild() yang support broser versi lama
*/
const img = document.querySelector("img"); // mendapatkan element img paling pertama

// menghapus element tanpa perlu menambah paramater apapun
img.remove();
