import Component from 'general/Component';
import createElement from 'helpers/createElement';
import tmpl from './index.tmpl';

class User extends Component {
  constructor({el, user}) {
    super({el});
    this.setProps({user});

    this.render();
  }

  render() {
    this._el.innerHTML = tmpl(this.props.user);
  }

  static create(user) {
    return super.create({
      el: createElement('li', 'clearfix'),
      user,
    });
  }
}

export default User;
