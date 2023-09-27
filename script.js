// Function ngambil Nilai Inputan
function count() {
  // mengambil value dari inputan KG and CM
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const total = document.getElementById("total");
  const categories = document.getElementById("categories");
  // mengubah before display none tobe block
  document.getElementById("result").style.display = "block";
  // Perhitungan
  const sumHeight = weight / (height / 100) ** 2;
  // mengambil 1 angka di belakangan coma (,).
  // menggunakan fungsi toFixed();
  const sum = sumHeight.toFixed(1);

  // Pengkondisian
  if (sum < 18.5) {
    total.innerHTML = sum;
    categories.innerHTML = "Under";
  } else if (sum >= 18.5 && sum <= 24.9) {
    total.innerHTML = sum;
    categories.innerHTML = "Normal";
  } else if (sum >= 25 && sum <= 29.9) {
    total.innerHTML = sum;
    categories.innerHTML = "Over";
  } else {
    total.innerHTML = sum;
    categories.innerHTML = "Obesity";
  }
}

// Ketika tombol di klik
const submit = document.getElementById("submit-form");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  count();
});
