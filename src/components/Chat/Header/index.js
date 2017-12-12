import Component from 'general/Component';
import createElement from 'helpers/createElement';
import tmpl from './index.tmpl';

class Header extends Component {
  render() {
    this._el.innerHTML = tmpl();
  }

  static create() {
    return super.create({
      el: createElement('div', 'chat-header', 'clearfix'),
    });
  }
}

export default Header;
