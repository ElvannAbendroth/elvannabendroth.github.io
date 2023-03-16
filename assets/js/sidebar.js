const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const folder = document.getElementById("folder");

const openSidebar = () => {
  sidebar.classList.add("open");
  main.classList.add("slide-right");
  folder.classList.add("slide-right");
  setTimeout(() => {
    main.addEventListener("click", (evt) => clickOut(evt), true);
  }, "1000");
};

const closeSidebar = () => {
  sidebar.classList.remove("open");
  main.classList.remove("slide-right");
  folder.classList.remove("slide-right");
  main.removeEventListener("click", (evt) => clickOut(evt), true);
};

const toggleNav = () => {
  if (!sidebar.classList.contains("open")) {
    openSidebar();
  } else {
    closeSidebar();
  }
};
const clickOut = (evt) => {
  if (sidebar.classList.contains("open")) {
    evt.stopPropagation();
    closeSidebar();
  }
};
