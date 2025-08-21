 // Small JS example: Animate progress bars on load
window.addEventListener("load", () => {
    document.querySelectorAll(".bar span").forEach(bar => {
    let width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => { bar.style.width = width; }, 300);
    });
});