let currentBanner = 0;
const banners = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg", "banner6.jpg"];

function changeBanner() {
    currentBanner = (currentBanner + 1) % banners.length;
    document.getElementById('bannerImage').src = banners[currentBanner];
}

setInterval(changeBanner, 5000); // Troca o banner a cada 5 segundos
