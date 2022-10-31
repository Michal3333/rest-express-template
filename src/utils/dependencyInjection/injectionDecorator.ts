/* eslint-disable @typescript-eslint/no-unused-vars */
import Container, { PossibleDependenciesKeys, PossibleDependencies } from './injectionContainer';

export const injectable = () => <T extends { new (...args: any[]): {} }>(
  constructor: T): T | void => class extends constructor {
    constructor(...args: any[]) {
      if (args.length > 0) {
        throw Error('Unexpected arguments');
      }
      const injections = (constructor as any).injections as PossibleDependenciesKeys[];
      const injectedArgs = injections.map((key) => Container.get(key));
      super(...injectedArgs);
    }
  };

export const inject = (key: PossibleDependenciesKeys) => (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number,
) => {
  const existingInjections: PossibleDependenciesKeys[] = (target as any).injections || [];
  Object.defineProperty(target, 'injections', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: [...existingInjections, key],
  });
};
