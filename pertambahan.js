function hitungPertambahan(){
    const angka1 = document.getElementById("angka1").value;
    const angka2 = document.getElementById("angka2").value;

    if(angka1 === "" || angka2 === ""){
        alert("Silahkan masukkan angka terlebih dahulu");
        return;
    }

    const hasil = parseFloat(angka1) + parseFloat(angka2);
    document.getElementById("hasil").textContent = "Hasil: " + hasil;
}

document.getElementById("hitungButton").addEventListener("click", hitungPertambahan);