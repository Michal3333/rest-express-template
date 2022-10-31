import ActivityRepositoryInterface from '../../interfaces/ActivitiesRepository.interface';

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
}

export type PossibleDependencies = {
  ActivityRepository: ActivityRepositoryInterface,
};

export type PossibleDependenciesKeys = keyof PossibleDependencies;

export default Container;
