import { PossibleDependencies } from './dependenciesSetup';

class Container {
  private static registry: Map<PossibleDependenciesKeys,
  PossibleDependencies[PossibleDependenciesKeys]> = new Map();

  static register<Key extends PossibleDependenciesKeys>(
    key: Key,
    instance: PossibleDependencies[Key],
  ) {
    if (!Container.registry.has(key)) {
      Container.registry.set(key, instance);
    }
  }

  static get(key: PossibleDependenciesKeys) {
    return Container.registry.get(key);
  }

  static initDependencyContainer = async <T extends DependencyCreator>(...depsToInit: T[]) => {
    const depenedciesPromisses = depsToInit.map((depToInit) => depToInit.create());
    const dependecies = await Promise.all(depenedciesPromisses);
    dependecies.forEach((dep) => {
      Container.pushObjectToContainer(dep);
    });
  };

  static initDependencyContainerWithObj = async (dep: PossibleDependencies) => {
    Container.pushObjectToContainer(dep);
  };

  private static pushObjectToContainer = async (
    dep: ConvertPropsToOptional<PossibleDependencies>,
  ) => {
    (Object.keys(dep) as (keyof PossibleDependencies)[])
      .forEach((key) => Container.register(key, dep[key]!));
  };
}

export interface DependencyCreator {
  create: () => Promise<ConvertPropsToOptional<PossibleDependencies>>;
}

type ConvertPropsToOptional<T> = {
  [Key in keyof T]?: T[Key]
};

export type PossibleDependenciesKeys = keyof PossibleDependencies;

export default Container;
