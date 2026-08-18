<?php 
class handphone {
    public $merk;
    public $warna;
    public $harga;
    
    public function getInfo() {
        return "Merk: " . $this->merk . ", Warna: " . $this->warna . ", Harga: " . $this->harga;
    }
}


class smartphone extends handphone {
    public $os;
    
    public function getInfo() {
        return parent::getInfo() . ", OS: " . $this->os;
    }
}

$hp1 = new handphone();
$hp1->merk = "Samsung";
$hp1->warna = "Hitam";
$hp1->harga = 3000000;

$hp2 = new smartphone();
$hp2->merk = "Apple";
$hp2->warna = "Putih";
$hp2->harga = 10000000;
$hp2->os = "IOS";

echo $hp1->getInfo() . "</br>";

echo $hp2->getInfo() . "</br>";
; ?>