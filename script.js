function ubahTeksButton() {
    const tombol = document.getElementById("ubahTeksButton");

    if(tombol.innerText === "Klik sini"){
        tombol.innerHTML = "Teks tombol berhasil diubah oleh JS";
    }else{
        tombol.innerText = "Klik sini";
    }
}

const tombol = document.getElementById("ubahTeksButton");
tombol.addEventListener("click", ubahTeksButton);