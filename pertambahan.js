function hitung(){
    const angka1 = document.getElementById("angka1").value;
    const angka2 = document.getElementById("angka2").value;
    const operator = document.getElementById("operator").value;

    if(angka1 === "" || angka2 === ""){
        alert("Silahkan masukkan angka terlebih dahulu");
        return;
    }

    const angka1Value = parseFloat(angka1);
    const angka2Value = parseFloat(angka2);
    let hasil = 0;

    switch (operator) {
        case "+":
            hasil = angka1Value + angka2Value;
            break;
        case "-":
            hasil = angka1Value - angka2Value;
            break;
        case "*":
            hasil = angka1Value * angka2Value;
            break;
        case "/":
            if (angka2Value === 0){
                alert("Tidak bisa membagi dengan nol");
                return;
            }
            hasil = angka1Value / angka2Value;
            break;
        default:
            alert("Operator tidak valid");
    }


    document.getElementById("hasil").textContent = "Hasil: " + hasil;
}

document.getElementById("hitungButton").addEventListener("click", hitung);