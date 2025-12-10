document.addEventListener("DOMContentLoaded", () => {

    const checkboxes = document.querySelectorAll('.job');
    const progressNumber = document.getElementById('progress-number');
    const circle = document.querySelector('.circle');
    const toggle = document.getElementById("dark-toggle");

    // ==== UPDATE PROGRESS ====
    function updateProgress() {
        const total = checkboxes.length;
        const checked = document.querySelectorAll('.job:checked').length;

        const percent = Math.round((checked / total) * 100);

        progressNumber.textContent = percent + "%";

        // Circular progress uses degrees
        const angle = percent * 3.6;
        circle.style.background = `conic-gradient(#00e676 ${angle}deg, #555 ${angle}deg)`;
    }

    checkboxes.forEach(cb => cb.addEventListener('change', updateProgress));


    // ==== DARK MODE ====
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });

    // Jalankan progress pertama kali saat load
    updateProgress();

});
