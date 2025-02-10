let currentBanner = 0;
const banners = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg", "banner6.jpg"];

function changeBanner() {
    currentBanner = (currentBanner + 1) % banners.length;
    document.getElementById('bannerImage').src = banners[currentBanner];
}

setInterval(changeBanner, 5000); // Troca o banner a cada 5 segundos

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Fecha o menu se clicar fora dele
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var imagemFixa = document.getElementById("imagemFixa");

    if (menu && imagemFixa) {
        if (!menu.contains(event.target) && event.target !== imagemFixa) {
            menu.style.display = "none";
        }
    }
});
