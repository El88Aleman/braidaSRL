export const scroll = () => {
  const menu = document.querySelector(".menu"),
    allProduct = document.querySelectorAll(".producto"),
    arrowSliders = document.querySelectorAll(".slider");

  let isDragging = false;

  const handleSliders = () => {
    let scrollVal = Math.round(menu.scrollLeft);
    let maxScrollableWidth = menu.scrollWidth - menu.clientWidth;
    arrowSliders[0].parentElement.style.display =
      scrollVal > 0 ? "flex" : "none";
    arrowSliders[1].parentElement.style.display =
      maxScrollableWidth > scrollVal ? "flex" : "none";
  };
  arrowSliders.forEach((slider) => {
    slider.addEventListener("click", () => {
      menu.scrollLeft += slider.id === "left" ? -350 : 350;
      setTimeout(() => handleSliders(), 50);
    });
  });
  allProduct.forEach((producto) => {
    producto.addEventListener("click", () => {
      menu.querySelector(".active").classList.remove("active");
      producto.classList.add(".active");
    });
  });

  const dragging = (e) => {
    if (!isDragging) return;
    menu.classList.add("dragging");
    menu.scrollLeft -= e.movementX;
    handleSliders();
  };

  const dragStop = () => {
    isDragging = false;
    menu.classList.remove("dragging");
  };

  menu.addEventListener("mousedown", () => (isDragging = true));
  menu.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
};
