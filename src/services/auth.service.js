import firebase from 'firebase';
import config from 'config/firebase';

class AuthService {
  _providers = {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider(),
    twitter: new firebase.auth.TwitterAuthProvider(),
    github: new firebase.auth.GithubAuthProvider(),
  }

  constructor() {
    this.app = firebase.initializeApp(config);
  }

  auth() {
    return this.app.auth();
  }

  async signIn(typeProvider) {
    const {[typeProvider]: provider} = this._providers;

    if (!provider) {
      throw new Error(`Profider with type "${typeProvider}" was not found`);
    }

    return this.auth().signInWithPopup(provider);
  }

  logOut() {
    return this.auth().signOut();
  }
}

export default new AuthService();
