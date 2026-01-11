document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  const trigger = 40; // 捲動超過幾 px 開始出現背景

  const onScroll = () => {
    if (window.scrollY > trigger) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // 重新整理頁面時也檢查一次
});
