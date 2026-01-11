document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const header = document.querySelector(".header");

  // 防呆：必要元件不存在就直接 return
  if (!toggle || !mobileMenu || !header) return;

  /* =========================
     漢堡選單原本功能
     ========================= */

  const setExpanded = (open) =>
    toggle.setAttribute("aria-expanded", String(open));

  const closeMenu = () => {
    mobileMenu.classList.remove("show");
    setExpanded(false);
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = mobileMenu.classList.toggle("show");
    setExpanded(open);
  });

  // 點選單連結後收合
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // 點空白處收合
  document.addEventListener("click", (e) => {
    if (!mobileMenu.classList.contains("show")) return;
    const clickedInside =
      mobileMenu.contains(e.target) || toggle.contains(e.target);
    if (!clickedInside) closeMenu();
  });

  // ESC 鍵收合
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* =========================
     ⭐ 導覽列滾動背景切換 ⭐
     ========================= */

  const SCROLL_THRESHOLD = 24; // 滾動超過 24px 就出現背景

  const onScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // 進頁面先跑一次，避免重新整理狀態錯誤
});
