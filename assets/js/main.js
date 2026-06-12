/* ================================
   NATURALEZA SAGRADA - MAIN JS
   ================================ */

/* -------------------------------
   MOBILE MENU TOGGLE
-------------------------------- */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // cerrar menú al hacer click en un link (UX improvement)
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });
}

/* -------------------------------
   ACTIVE LINK DETECTION (HTML PLAIN)
-------------------------------- */
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("text-greenG", "font-bold");
    }
});

/* -------------------------------
   SMOOTH SCROLL (future sections support)
-------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

/* -------------------------------
   PERFORMANCE GUARD (basic)
-------------------------------- */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});