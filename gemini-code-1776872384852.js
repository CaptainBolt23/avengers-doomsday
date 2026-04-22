document.addEventListener('DOMContentLoaded', () => {
    
    // Datos de los actores
    const cast = [
        { name: "Robert Downey Jr.", role: "Victor Von Doom" },
        { name: "Pedro Pascal", role: "Reed Richards" },
        { name: "Vanessa Kirby", role: "Sue Storm" },
        { name: "Chris Evans", role: "Steve Rogers" },
        { name: "Tom Holland", role: "Peter Parker" },
        { name: "Florence Pugh", role: "Yelena Belova" }
    ];

    const castGrid = document.getElementById('cast-grid');

    // Inyectar reparto
    cast.forEach(actor => {
        const card = document.createElement('div');
        card.className = 'cast-card';
        card.innerHTML = `
            <h3>${actor.name}</h3>
            <p>${actor.role}</p>
        `;
        castGrid.appendChild(card);
    });

    // Efecto de Navbar al hacer scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(5, 5, 5, 0.9)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.padding = '15px 50px';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.padding = '20px 50px';
        }
    });

    // Animación simple de revelación
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.content-section').forEach(s => {
        s.style.opacity = 0;
        s.style.transform = 'translateY(50px)';
        s.style.transition = 'all 0.8s ease-out';
        observer.observe(s);
    });
});