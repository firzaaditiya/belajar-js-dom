/*
    ini akan mengembalikan HTMLCollection, ini bukan array namun kita masih bisa melakukan sebuah iterasi
*/
console.info(document.getElementsByTagName("img"));


const allImages = document.getElementsByTagName("img");
// console.info(allImage[1]);
// console.dir(allImage[1]);

for (const img of allImages) {
    // console.info(img.src);

    // mengubah nilai attribute src pada tag img
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg";
}



const squareImages = document.getElementsByClassName("square");
console.info(squareImages);

for (const img of squareImages) {
    // mengubah nilai attribute src pada tag img
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg";
}