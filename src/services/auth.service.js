import firebaseApp from './firebase.service';

const {firebase_: firebase} = firebaseApp;

class AuthService {
  _providers = {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider(),
    twitter: new firebase.auth.TwitterAuthProvider(),
    github: new firebase.auth.GithubAuthProvider(),
  }

  constructor() {
    this.auth = firebaseApp.auth();
  }

  get user() {
    return this.auth.currentUser;
  }

  async signIn(typeProvider) {
    const {[typeProvider]: provider} = this._providers;

    if (!provider) {
      throw new Error(`Profider with type "${typeProvider}" was not found`);
    }

    return this.auth.signInWithPopup(provider);
  }

  onStateChanged(cb) {
    this.auth.onAuthStateChanged(cb);
  }

  signOut() {
    return this.auth.signOut();
  }
}

export default new AuthService();
