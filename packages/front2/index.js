export default class Button2 extends HTMLElement {
  static get template() {
    return `
      <style>
        button {
          display: inline-block;
          color: red;
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
    }).innerHTML = Button2.template;
  }
}

customElements.define("button-2", Button2);
