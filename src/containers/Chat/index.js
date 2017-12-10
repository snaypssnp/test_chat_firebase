import Component from 'general/Component';
import tmpl from './index.tmpl';

class Chat extends Component {
  constructor({el}) {
    super({el});
    this.render();
  }

  render() {
    this._el.innerHTML = tmpl();
  }
}

export default Chat;
