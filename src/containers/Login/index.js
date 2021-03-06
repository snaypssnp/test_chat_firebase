import Component from 'general/Component';
import Button from 'components/common/Button';
import socials from 'data/socials';
import AuthService from 'services/auth.service';
import DataBaseService from 'services/database.service';
import tmpl from './index.tmpl';

class Login extends Component {
  _socialElement = null

  constructor({el}) {
    super({el});
    this.render();
  }

  render() {
    this.element.innerHTML = tmpl();

    this._socialElement = this.element.querySelector('.socials');

    this._initSocials();
  }

  _initSocials() {
    for (const item of socials) {
      const {title, type} = item;
      const button = Button.create(title, 'social-signin', type);

      button.on('click', this._onClick.bind(this, type));

      this._socialElement.append(button.element);
    }
  }

  async _onClick(type) {
    const {
      user: {
        uid: id,
        displayName: name,
        photoURL: image,
      },
    } = await AuthService.signIn(type);

    const {router} = this.props;

    await DataBaseService
      .ref(`users/${id}`)
      .set({id, name, image});

    router.go('/chat');
  }
}

export default Login;
