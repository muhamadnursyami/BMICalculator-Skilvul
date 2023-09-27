// Function ngambil Nilai Inputan
function getHandleData() {
  // mengambil value dari inputan KG and CM
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  return { weight, height };
}

function count() {
  const total = document.getElementById("total");
  const categories = document.getElementById("categories");
  // mengubah before display none tobe block
  document.getElementById("result").style.display = "block";
  // Perhitungan
  const sumHeight =
    getHandleData().weight / (getHandleData().height / 100) ** 2;
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

function validateData() {
  if (getHandleData().weight === "" && getHandleData().height === "") {
    return false;
  } else if (getHandleData().weight === "") {
    return false;
  } else if (getHandleData().height === "") {
    return false;
  } else {
    return true;
  }
}

// Ketika tombol di klik
const submit = document.getElementById("submit-form");
const warning = document.getElementById("warning");
const data = getHandleData();
submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateData() == false) {
    document.getElementById("result").style.display = "none";
    warning.innerHTML = "Periksa form anda sekali lagi";
  } else {
    warning.innerHTML = "";
    count();
  }
});
