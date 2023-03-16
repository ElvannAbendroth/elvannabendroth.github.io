const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

const openSidebar = () => {
  sidebar.classList.replace("hidden", "open");
  main.classList.add("content-slide");
  setTimeout(() => {
    main.addEventListener("click", () => clickOut(), true);
  }, "1000");
};

const closeSidebar = () => {
  sidebar.classList.replace("open", "hidden");
  main.classList.remove("content-slide");
  main.removeEventListener("click", () => clickOut(), true);
};

const toggleNav = () => {
  if (sidebar.classList.contains("hidden")) {
    openSidebar();
  } else {
    closeSidebar();
  }
};
const clickOut = () => {
  if (sidebar.classList.contains("hidden") === false) {
    closeSidebar();
  }
};

/* TODO:
- The hamburger menu doesn't work when the panel is open

*/
