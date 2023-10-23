// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// mendapatkan element dengan id "container"
const container = document.querySelector("#container");

// membuat base image url untuk looping gambar pokemon
const baseImgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// membuat perulangan untuk gambar pokemon
for (i = 1; i <= 500; i++) {
	// membuat container untuk pokemon <div>
	const pokeBall = document.createElement("div");

	// menambahkan attribute class pada element "pokeBall"
	pokeBall.classList.add("pokemon");

	// membuat element <img> untuk gambar pokemon
	const imgPokemon = document.createElement("img");

	// menambahkan attribute src untuk sumber gambar
	imgPokemon.setAttribute("src", `${baseImgUrl.concat(i).concat(".png")}`);

	// membuat element label untuk penanda gambar pokemon
	const label = document.createElement("span");

	// memberikan text pada element label <span>, kita bisa menggunakan innerText(), atau append()
	label.innerText = `#${i}`;

	// menyisipkan <img> pokemon kedalam element <div> dari pokeBall
	pokeBall.appendChild(imgPokemon);

	// memasukan element <span> dari label kedalam element pokeBall setelah element imgPokemon
	pokeBall.appendChild(label);

	// menyisipkan element kedalam element container yang sudah didapat dari querySelector diatas
	container.appendChild(pokeBall);
}