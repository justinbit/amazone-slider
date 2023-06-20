var active = 0;
var max = 2;
var canScroll = true;
var container = document.getElementById("translateSlider");
var mouseScrollContainer = document.getElementById("amazone-slider");
var containerHeight = 100;
var header = document.getElementById("amazone-header");
var currentHeight = 0;
var isAtHeader = true;
var isAtSlider = false;
var section1 = document.getElementById("amazone-section1");

document.addEventListener(
  "wheel",
  (e) => {
    var direction = e.deltaY < 0 ? "Up" : "Down";
    if (isAtHeader && direction == "Down") {
      e.preventDefault();
      mouseScrollContainer.scrollIntoView({ behavior: "smooth" });
      isAtHeader = false;
      isAtSlider = true;
      header.style.display = "none";
    }

    if (!isAtHeader && !isAtSlider && direction == "Up") {
      e.preventDefault();
      mouseScrollContainer.scrollIntoView({ behavior: "smooth" });
      isAtHeader = false;
      isAtSlider = true;
    }
  },
  { passive: false }
);

mouseScrollContainer.addEventListener("mousewheel", (e) => {
  if (!isAtSlider) {
    e.preventDefault();
    return;
  } else {
    e.preventDefault();
  }
  if (!canScroll) return;
  var direction = e.deltaY < 0 ? "Up" : "Down";

  if (active == 0 && direction == "Up") {
    isAtHeader = true;
    isAtSlider = false;
    section1.scrollIntoView({ behavior: "smooth" });
    header.style.display = null;
    return;
  }

  if (active == max - 1 && direction == "Down") {
    isAtHeader = false;
    isAtSlider = false;

    const scrollOptions = {
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    };

    window.scrollTo(scrollOptions);

    return;
  }

  if (active < 0) {
    active = 0;
    return;
  }

  if (direction == "Down") {
    if (active != max - 1) {
      active++;
      canScroll = false;
      currentHeight += containerHeight;
      container.style.transform = `translateY(-${currentHeight}vh)`;

      setTimeout(() => {
        canScroll = true;
      }, 1000);
    }
  }

  if (direction == "Up") {
    if (active != 0) {
      active--;
      canScroll = false;
      currentHeight -= containerHeight;
      container.style.transform = `translateY(-${currentHeight}vh)`;
      setTimeout(() => {
        canScroll = true;
      }, 1000);
    }
  }

  document.querySelectorAll(".sideSection").forEach((element) => {
    if (element.classList.contains(`sideSection${active + 1}`)) {
      element.style.display = null;
    } else {
      element.style.display = "none";
    }
  });
  console.log("active = " + active);
});

document.querySelectorAll(".sideSection").forEach((element) => {
  if (element.classList.contains(`sideSection${active + 1}`)) {
    element.style.display = null;
  } else {
    element.style.display = "none";
  }
});
