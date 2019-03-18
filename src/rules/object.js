import isEqual from 'lodash.isequal';
import Base from './base';
import { isObject, isEmptyObject } from '../is';

class ObjectValidater extends Base {
  constructor(obj, options) {
    super(obj, {
      ...options,
      type: 'object'
    });
    this.validate(
      isObject(this.obj),
      `Expect object type but got \`${this.obj}\``
    );
  }

  deepEqual(other) {
    return this.validate(
      isEqual(this.obj, other),
      `${JSON.stringify(this.obj)} is not deep equal with ${JSON.stringify(other)}`
    );
  }

  hasKeys(keys) {
    return this.validate(
      keys.every(el => this.obj[el]),
      `${JSON.stringify(this.obj)} is not has keys ${keys}`
    );
  }

  get empty() {
    return this.validate(
      isEmptyObject(this.obj),
      `Expect empty object but got ${JSON.stringify(this.obj)}`
    );
  }
}

export default ObjectValidater;
