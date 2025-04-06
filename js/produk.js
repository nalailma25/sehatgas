// Data konten
const contentData = {
    tradisional: [
        { title: "Teh Hijau", img: "teh-hijau.jpg" },
        { title: "Beras Kencur", img: "beras-kencur.jpg" }
    ],
    pertolongan: [
        { title: "Tersedak Makanan", img: "tersedak.jpg" },
        { title: "Luka Bakar Ringan", img: "luka-bakar.jpg" }
    ],
    artikel: [
        { title: "Jeruk Nipis untuk Tenggorokan", img: "jeruk-nipis.jpg" }
    ]
};

// Fungsi mengganti tab
function changeTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="changeTab('${tab}')"]`).classList.add('active');

    // Ubah hero section
    const heroTitle = {
        tradisional: "Coba <span class='highlight'>Obat</span> Tradisional",
        pertolongan: "Tindak dengan <span class='highlight'>Pertolongan</span> Pertama",
        artikel: "Baca <span class='highlight'>Artikel</span> Kesehatan"
    };
    document.getElementById("hero-title").innerHTML = heroTitle[tab];

    // Ubah konten
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    contentData[tab].forEach(item => {
        contentDiv.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="${item.title}">
                <h3>${item.title}</h3>
            </div>
        `;
    });
}

// Muat lebih banyak (dummy function)
function loadMore() {
    alert("Memuat lebih banyak...");
}

// Set default tab
changeTab('tradisional');