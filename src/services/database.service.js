import firebaseApp from './firebase.service';

class DataBaseService {
  constructor() {
    this.database = firebaseApp.database();
  }

  ref(path) {
    return this.database.ref(path);
  }
}

export default new DataBaseService();
