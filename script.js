document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll('.panel');

    // Set the first panel as active by default
    panels[0].classList.add('active');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });
    });

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    }
});