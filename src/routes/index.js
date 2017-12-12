import Route from 'general/Route';
import Main from 'containers/Main';
import Login from 'containers/Login';

export default [
  Route.create({path: '/', component: Login.create()}),
  Route.create({path: '/chat', component: Main.create()}),
];
