// Smooth Scroll
document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ 
            behavior: "smooth",
            block: "start"
        });
    });
});

// Tombol "Kembali ke Atas"
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
