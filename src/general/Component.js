import {isElement, createElement} from 'helpers';

class Component {
  props = {};

  constructor({el}) {
    if (!(isElement(el))) {
      throw new Error('"el" object must be an instance HtmlElement');
    }

    this._el = el;
  }

  on(eventType, cb) {
    this._el.addEventListener(eventType, cb);
  }

  off(eventType, cb) {
    this._el.removeEventListener(eventType, cb);
  }

  render() {
    throw new Error(`${this.constructor.name} you must create a render method`);
  }

  setProps(props = {}) {
    Object.assign(this.props, props);
  }

  get element() {
    return this._el;
  }

  static create({el = createElement('div'), ...opts} = {}) {
    return new this({el, ...opts});
  }

  static isInstance(object) {
    return object instanceof this;
  }
}

export default Component;
