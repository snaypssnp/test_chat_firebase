import Component from 'general/Component';
import createElement from 'helpers/createElement';
import tmpl from './index.tmpl';

class Form extends Component {
  render() {
    this._el.innerHTML = tmpl();
  }

  static create() {
    return super.create({
      el: createElement('form', 'chat-message', 'clearfix'),
    });
  }
}

export default Form;
