// Loader
window.addEventListener("load", () => {
  const count = document.querySelector(".loader-count");
  const interval = setInterval(() => {
    count.textContent = parseInt(count.textContent) + 1;
    if (parseInt(count.textContent) >= 100) {
      clearInterval(interval);
      document.querySelector(".loader").classList.add("loader-end");
    }
  }, 100);
});

// Menu Burger
const open = document.querySelector(".nav-open");
const close = document.querySelector(".nav-close");
const menu = document.querySelector(".menu");

open.addEventListener("click", (e) => {
  menu.classList.add("active");
});

close.addEventListener("click", (e) => {
  menu.classList.remove("active");
});

// Scroll

function offsetTop(element, acc = 0) {
  if (element.offsetParent) {
    return offsetTop(element.offsetParent, acc + element.offsetTop);
  }
  return acc + element.offsetTop;
}

class Parallax {
  /**
   *
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.element = element;
    this.ratio = parseFloat(element.dataset.parallax);
    this.onScroll = this.onScroll.bind(this);
    this.onIntersection = this.onIntersection.bind(this);
    document.addEventListener("scroll", this.onScroll);
    const observer = new IntersectionObserver(this.onIntersection);
    observer.observe(element);
    this.onScroll();
  }

  onIntersection(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        document.addEventListener("scroll", this.onScroll);
      } else {
        docuement.style.background = "red";
      }
    }
  }
  onScroll() {
    window.requestAnimationFrame(() => {
      const screenY = window.scrollY + window.innerHeight / 2;
      const elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
      const diffY = elementY - screenY;
      // this.element.style.setProperty(
      //   "transform",
      //   `translateY(${diffY * -1 * this.ratio}px)`
      // );
      this.element.style.transform = `translateY(${diffY * -1 * this.ratio}px)`;
    });
  }
  static bind() {
    Array.from(document.querySelectorAll("[data-parallax]")).map((element) => {
      return new Parallax(element);
    });
  }
}

Parallax.bind();

