class Container {
  private static registry: Map<DependencyKey, any> = new Map();

  static register(key: DependencyKey, instance: any) {
    if (!Container.registry.has(key)) {
      Container.registry.set(key, instance);
    }
  }

  static get(key: DependencyKey) {
    return Container.registry.get(key);
  }
}

export enum DependencyKey {
  ActivityRepository = 'ActivityRepository',
  UserRepository = 'UserRepository',
}

export default Container;
