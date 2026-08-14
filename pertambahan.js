function hitungPertambahan(){
    const angka1 = document.getElementById("angka1").value;
    const angka2 = document.getElementById("angka2").value;

    if(angka1 === "" || angka2 === ""){
        alert("Silahkan masukkan angka terlebih dahulu");

        return;
    }

    const hasil = parseInt(angka1) + parseInt(angka2);
    document.getElementById("hasil").textContent = "Hasil: " + hasil;
}