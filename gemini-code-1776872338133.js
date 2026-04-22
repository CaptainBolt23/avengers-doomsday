document.addEventListener('DOMContentLoaded', () => {
    // Pequeño efecto de parpadeo en el título
    const title = document.querySelector('h1');
    setInterval(() => {
        title.style.opacity = title.style.opacity === '0.8' ? '1' : '0.8';
    }, 100);

    console.log("Sistema Doom: Usuario registrado con éxito.");
});