import Component from 'general/Component';
import createElement from 'helpers/createElement';

class Button extends Component {
  constructor({el, title}) {
    super({el});

    this._title = title;

    this.render();
  }

  render() {
    this.element.textContent = this._title;
  }
  
  static create(title, ...classList) {
    return super.create({
      el: createElement('button', ...classList),
      title,
    });
  }
}

export default Button;
