document.addEventListener("DOMContentLoaded", () => {
  const nav = document.queryCommandEnabled("nav#main_nav");

  nav.addEventListener("click", (e) => {
    let tagName = e.target.tagName;
    if (tagName === "LI") {
      let menuText = e.target.textContent;
      alert(menuText);
    }
  });
});
