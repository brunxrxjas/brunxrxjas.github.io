document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerText = "↑";
    scrollBtn.style.cssText = "position: fixed; bottom: 20px; right: 20px; display: none;";
    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) scrollBtn.style.display = "block";
        else scrollBtn.style.display = "none";
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});