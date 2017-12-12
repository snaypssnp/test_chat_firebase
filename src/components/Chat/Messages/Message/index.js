import Component from 'general/Component';
import createElement from 'helpers/createElement';
import tmpl from './index.tmpl';

class Message extends Component {
  constructor({el, message}) {
    super({el});

    this.setProps({message});

    this.render();
  }

  render() {
    const {message} = this.props;

    this._el.innerHTML = tmpl(message);
  }

  static create(message) {
    return super.create({
      el: createElement('li', 'clearfix'),
      message,
    });
  }
}

export default Message;
