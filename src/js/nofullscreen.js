const video = document.querySelector('video');

// Escuta o evento de mudança para tela cheia
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement === video) {
        document.exitFullscreen();
    }
});

// Versão específica para navegadores antigos/Safari
document.addEventListener('webkitfullscreenchange', () => {
    if (document.webkitFullscreenElement === video) {
        document.webkitExitFullscreen();
    }
});

// Bloqueia o duplo clique que ativa o fullscreen no Firefox/Chrome
video.addEventListener('dblclick', (e) => {
    e.preventDefault();
}, true);