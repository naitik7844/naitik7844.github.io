// Small client-side script for interactions and generating project cards
document.addEventListener('DOMContentLoaded', () => {
    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });

    // Sample projects - replace with your own
    const projects = [
        {title: 'Portfolio Website', desc: 'A clean responsive portfolio built with HTML, CSS and JS', link: '#'},
        {title: 'Camera Booth', desc: 'Small webapp that uses the webcam to take snapshots', link: '#'},
        {title: 'Task Manager', desc: 'Vanilla JS todo app with localStorage', link: '#'}
    ];

    const grid = document.getElementById('projectsGrid');
    projects.forEach(p => {
        const el = document.createElement('article');
        el.className = 'project';
        el.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
        grid.appendChild(el);
    });
});
