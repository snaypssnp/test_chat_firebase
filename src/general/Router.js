import {isElement, isAnchor} from 'helpers';
import Route from './Route';

class Router {
  _routes = {};

  _currentRoute = null;

  constructor({el, routes = []}) {
    if (!isElement(el)) {
      throw new Error('"el" object must be instance "HtmlElement"');
    }

    if (!Array.isArray(routes)) {
      throw new Error(`routes ${routes} must be an Array`);
    }

    this._el = el;

    routes.forEach(this._addRoute.bind(this));
  }

  init() {
    this.go(window.location.pathname);

    this._el.addEventListener('click', this._onClick.bind(this));
  }

  go(path) {
    const route = this._getRoute(path);

    if (!route) {
      return;
    }

    window.history.pushState(null, null, path);

    if (this._currentRoute === route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.hide();
    }

    route.show();
    this._currentRoute = route;
  }

  _onClick(event) {
    const {target} = event;

    if (!isAnchor(target)) {
      return;
    }

    event.preventDefault();

    this.go(target.pathname);
  }

  _addRoute(route) {
    if (!Route.isInstance(route)) {
      throw new Error('"route" must be instance "Route"');
    }

    const {path, component} = route;

    this._routes[path] = route;

    component.setProps({router: this});

    this._el.append(component.element);
  }

  _getRoute(path) {
    return this._routes[path];
  }

  static create(options) {
    return new this(options);
  }
}

export default Router;
