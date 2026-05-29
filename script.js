function DownloadingFile(fileName) {
    const status = document.getElementById('status');
    const bar = document.getElementById('progress-bar');
    
    status.innerHTML = "Загрузка: " + fileName.split('/').pop();
    
    // Плавное увеличение бара (имитация логики)
    let currentWidth = parseInt(bar.style.width) || 0;
    if (currentWidth < 95) {
        bar.style.width = (currentWidth + 2) + "%";
    }
}

// Уведомление об успешной загрузке
window.onload = () => {
    console.log("Загрузочный экран R-city RP инициализирован.");
};
