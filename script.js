document.addEventListener("DOMContentLoaded", function () {
    // Memuat Header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Error memuat header:", error));

    // Memuat Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error memuat footer:", error));
});
