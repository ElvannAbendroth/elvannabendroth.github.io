const openSidebar = () => {
  document.getElementById("sidebar").classList.remove("hidden");
  document.getElementById("main").classList.add("content-slide");
};

const closeSidebar = () => {
  document.getElementById("sidebar").classList.add("hidden");
  document.getElementById("main").classList.remove("content-slide");
};

const toggleNav = () => {
  if (document.getElementById("sidebar").classList.contains("hidden")) {
    openSidebar();
  } else {
    closeSidebar();
  }
};
