function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    document.getElementById('status').innerHTML = "Добро пожаловать на " + servername;
}

function SetFilesTotal(total) { /* Необязательно, если не нужен точный счетчик */ }

function SetFilesNeeded(needed) { /* Необязательно */ }

function DownloadingFile(fileName) {
    document.getElementById('status').innerHTML = "Загрузка: " + fileName;
}

// Эмуляция прогресса (для теста в браузере)
let width = 0;
setInterval(() => {
    if (width < 100) {
        width += 1;
        document.getElementById('progress-bar').style.width = width + "%";
    }
}, 100);
