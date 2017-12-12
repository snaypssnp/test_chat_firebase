import Component from 'general/Component';
import Chat from 'components/Chat';
import Users from 'components/Users';
import createElement from 'helpers/createElement';
import AuthService from 'services/auth.service';

class Main extends Component {
  _chat = Chat.create();
  _users = Users.create();

  constructor({el}) {
    super({el});

    this._el.append(
      this._users.element,
      this._chat.element,
    );


    AuthService.onStateChanged(() => {
      this.render();
    });
  }

  render() {
    this._chat.render();
    this._users.render();
  }

  static create() {
    return super.create({
      el: createElement('div', 'container', 'clearfix'),
    });
  }
}

export default Main;
