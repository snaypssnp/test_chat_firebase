import Route from 'general/Route';
import Chat from 'containers/Chat';
import Login from 'containers/Login';

export default [
  Route.create({path: '/', component: Login.create()}),
  Route.create({path: '/chat', component: Chat.create()}),
];
