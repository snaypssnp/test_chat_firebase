import Component from 'general/Component';
import createElement from 'helpers/createElement';
import Message from './Message';

class Messages extends Component {
  render(data) {
    const {element} = Message.create(data);

    this._el.append(element);

    if (data.isMe) {
      this.setScrollBottom();
    }
  }

  setScrollBottom() {
    this._el.scrollTop = this._el.scrollHeight;
  }

  static create() {
    return super.create({
      el: createElement('ul', 'chat-history'),
    });
  }
}

export default Messages;
