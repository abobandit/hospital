class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const size = this.getAttribute('size') || 'small';
        const color = this.getAttribute('color') || 'red';
        const label = this.getAttribute('label') || 'Кнопка';

        const sizeClasses = {
            small: 'text-sm px-3 py-1 rounded-md',
            big: 'text-lg px-5 py-3 rounded-2xl'
        };

        const colorVar = {
            red: 'var(--soft-red)',
            green: 'var(--green)',
            'pale-green': 'var(--pale-green)'
        };

        const style = document.createElement('style');
        style.textContent = `
      :host {
        font-family: sans-serif;
      }

      button {
        color: white;
        background:black;
        border: none;
        cursor: pointer;
      }
    `;

        const button = document.createElement('button');
        button.textContent = label;
        button.className = sizeClasses[size] || sizeClasses.small;
        button.style.backgroundColor = colorVar[color] || colorVar.red;

        this.shadowRoot.append(style, button);
    }
}

customElements.define('my-button', MyButton);