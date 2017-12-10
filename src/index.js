import 'styles';
import Router from 'general/Router';
import routes from 'routes';

const router = Router.create({
  el: document.querySelector('.js-app'),
  routes,
});

router.init();
