// script.js

let nama = "Nadhira Sabina";
const umur = 21;

function sapaPengguna(nama, umur) {
  return `Halo, ${nama}! Kamu berusia ${umur} tahun.`;
}

function cekStatusUsia(umur) {
  if (umur >= 18) {
    return "Kamu sudah dewasa.";
  } else {
    return "Kamu masih di bawah umur.";
  }
}

let angka = [1, 2, 3, 4, 5];
let hasil = angka.map((num) => num * 2);  // Mengalikan setiap elemen dengan 2
console.log("Array setelah manipulasi:", hasil);

document.getElementById("buttonSapa").addEventListener("click", function() {
  const sapaPesan = sapaPengguna(nama, umur);
  document.getElementById("output").innerText = sapaPesan;
});
