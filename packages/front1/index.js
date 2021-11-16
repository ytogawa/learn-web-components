export default class Button1 extends HTMLElement {
  static get template() {
    return `
      <style>
        button {
          display: inline-block;
          color: blue;
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({
      mode: "open",
    }).innerHTML = Button1.template;
  }
}

customElements.define("button-1", Button1);
