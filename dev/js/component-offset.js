class OffsetComponent extends HTMLElement {
  constructor() {
    super();
    this.closestContainer = this.parentNode.querySelector(".container");
    this.slider = this.querySelector('[id^="Slider-"]');
    this.initPages();

    if (!this.slider) return;
    const resizeObserver = new ResizeObserver((entries) => this.initPages());
    resizeObserver.observe(this.slider);
  }
  initPages() {
    let offset = 0;
    if (this.getAttribute("data-offset") == "left") {
      offset = this.closestContainer.getBoundingClientRect().left;
      this.style.marginLeft = `${offset}px`;
    } else {
      offset = this.closestContainer.getBoundingClientRect().right;
      this.style.marginRight = `${offset}px`;
    }
  }
}

customElements.define("offset-component", OffsetComponent);
