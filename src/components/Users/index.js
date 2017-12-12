import Component from 'general/Component';
import createElement from 'helpers/createElement';
import DataBaseService from 'services/database.service';
import User from './User';
import tmpl from './index.tmpl';

class Users extends Component {
  _model = DataBaseService.ref('users');
  
  constructor({el}) {
    super({el});


    this._initEvents();
  }

  render() {
    this._el.innerHTML = tmpl();
  }

  _initEvents() {
    this._model.on('child_added', this._onAddUser.bind(this));
  }
  
  _onAddUser(data) {
    const user = data.val();

    const userComponent = User.create(user);

    this._el
      .querySelector('.list')
      .append(userComponent.element);
  }
  
  static create() {
    return super.create({
      el: createElement('div', 'people-list'),
    });
  }
}

export default Users;
