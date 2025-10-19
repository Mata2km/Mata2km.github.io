// Ganti password sesuai kebutuhan
const ADMIN_PASSWORD = "rahasia123";

function login() {
  const input = document.getElementById("password").value;
  if (input === ADMIN_PASSWORD) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-section").style.display = "block";
    alert("Login berhasil! Anda bisa menambahkan orang baru.");
  } else {
    alert("Password salah!");
  }
}

function tambahOrang() {
  const nama = prompt("Masukkan nama orang baru:");
  if (nama) {
    const ul = document.getElementById("daftar-orang");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.innerText = nama;
    li.appendChild(a);
    ul.appendChild(li);
  }
}
