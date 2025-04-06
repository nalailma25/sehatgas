function showAddRecipeForm() {
    document.getElementById("add-recipe-form").style.display = "block";
}

function closeAddRecipeForm() {
    document.getElementById("add-recipe-form").style.display = "none";
}

function showAddFirstAidForm() {
    document.getElementById("add-first-aid-form").style.display = "block";
}

function closeAddFirstAidForm() {
    document.getElementById("add-first-aid-form").style.display = "none";
}

function showAddUserForm() {
    document.getElementById("add-user-form").style.display = "block";
}

function closeAddUserorm() {
    document.getElementById("add-user-form").style.display = "none";
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function(event) {
    if (event.target.className === "modal") {
        closeAddRecipeForm();
        closeAddFirstAidForm();
        closeAddUserForm();
    }
}
function showSection(sectionId) {
    // Sembunyikan semua bagian
    document.querySelectorAll('.grid-container > section').forEach(section => {
        section.style.display = 'none';
    });

    // Tampilkan bagian yang dipilih
    document.getElementById(sectionId).style.display = 'block';
}

// Fungsi logout (misalnya, redirect ke halaman login)
function logout() {
    // Logika untuk logout, misalnya redirect ke halaman login
    alert("Anda telah logout.");
    // window.location.href = 'login.html'; // Uncomment jika ada halaman login
}

//Dashboard
function updateDashboardCounts() {
    // Contoh data, ganti dengan data yang diambil dari database
    const recipeCount = 10; // Ganti dengan jumlah resep dari database
    const firstAidCount = 5; // Ganti dengan jumlah panduan dari database
    const userCount = 20; // Ganti dengan jumlah pengguna dari database

    document.getElementById("recipeCount").innerText = recipeCount;
    document.getElementById("firstAidCount").innerText = firstAidCount;
    document.getElementById("userCount").innerText = userCount;
}

// Panggil fungsi ini saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    updateDashboardCounts();
    showSection('dashboard'); // Tampilkan dashboard secara default
});