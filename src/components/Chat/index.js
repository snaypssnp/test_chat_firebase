import Component from 'general/Component';
import createElement from 'helpers/createElement';
import DataBaseService from 'services/database.service';
import AuthService from 'services/auth.service';
import Form from './Form';
import Header from './Header';
import Messages from './Messages';

class Chat extends Component {
  _model = DataBaseService.ref('messages');
  _header = Header.create();
  _form = Form.create();
  _messages = Messages.create();
  
  constructor({el}) {
    super({el});
    this._el.append(
      this._header.element,
      this._messages.element,
      this._form.element,
    );

    this._initEvents();
  }

  render() {
    this._header.render();
    this._form.render();
  }

  _initEvents() {
    this._onSendMessage();
    this._onReadMessage();
  }

  _onSendMessage() {
    this._form.on('submit', async (event) => {
      event.preventDefault();

      const {target} = event;
      const text = target.message.value;
      const {uid: userId, displayName: userName} = AuthService.user;

      this._model.push({userId, userName, text});

      target.message.value = '';
    });
  }

  _onReadMessage() {
    this._model
      .on('child_added', (data) => {
        const message = data.val();
        const {uid} = AuthService.user;

        this._messages.render({
          ...message,
          isMe: uid === message.userId,
        });
      });
  }

  static create() {
    return super.create({
      el: createElement('div', 'chat'),
    });
  }
}

export default Chat;
