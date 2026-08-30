const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.querySelector("span").textContent = open ? "×" : "+";
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    navigation?.classList.remove("open");
    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector("span").textContent = "+";
    }
  });
});
