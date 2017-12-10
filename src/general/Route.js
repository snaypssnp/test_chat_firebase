import Component from 'general/Component';
import isString from 'helpers/isString';

class Route {
  constructor({path, component}) {
    if (!isString(path)) {
      throw new Error(`path "${path}" must be string`);
    }

    if (!Component.isInstance(component)) {
      throw new Error('component must be instance Component');
    }

    this._path = path;
    this._component = component;

    this.hide();
  }
  
  hide() {
    this.component.element.hidden = true;
  }
  
  show() {
    this.component.element.hidden = false;
  }

  get component() {
    return this._component;
  }

  get path() {
    return this._path;
  }

  static create(options) {
    return new this(options);
  }

  static isInstance(object) {
    return object instanceof this;
  }
}

export default Route;
