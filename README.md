# Rest express template
This is a simple template for REST API in express with TypeScript and MongoDB.

## Usage

You can clone this template using a [CLI](https://github.com/Michal3333/create-node-restapi), which additionally installs dependencies and creates a .env file.
```sh
npx create-node-restapi
```
Before running any of the commands listed below, add the required values to the .env file (in case you were using provided CLI, the .env file was already created. Otherwise, you have to add it on your own, based on the .env.sample file).

- `npm install` - to install dependencies
- `npm run dev` - to run the app during development
- `npm run build` - to build the project
- `npm run test` - to run tests
- `npm run lint` - to run linter
- `npm run build_image` - to build docker image
- `npm run start_with_compose` - to run the app with docker

## Additional setup information
This template uses a simple custom dependency container that is initially configured with `activityRepository` created by `MongoCreator`, which provides access to the mongo database. 

### How to use it?

1. Provide possible dependencies object in `/src/utils/dependenciesControl/dependenciesSetup.ts`
```ts
export type PossibleDependencies = {
  ActivityRepository: ActivityRepositoryInterface,
  SomeOtherDependencyName: SomeOtherDependencyInterface
};
```
2. Define dependencies before creating an app with one of those methods: 
- `Container.initDependencyContainer` - as parameters needs objects of classes that implement the DependencyCreator interface
- `Container.initDependencyContainerWithObj` - as a parameter needs an object of type PossibleDependencies, defined in the previous step

```ts
await Container.initDependencyContainer(
  new MongoCreator(),
  new OtherDependencyCreator(),
);

// or

await Container.initDependencyContainerWithObj({
  ActivityRepository: activityRepository,
  SomeOtherDependencyName: SomeOtherDependency,
});

const app = createApp();
```
3. Inject selected dependencies to the class using `injectable` and `inject` decorators
```ts
// in this example, we are injecting activityRepository dependency
@injectable()
class ActivityHandler {
  private activityRepository: ActivityRepositoryInterface;

  constructor(
  @inject('ActivityRepository') activityRepository?: ActivityRepositoryInterface,
  ) {
    if (!activityRepository) {
      throw Error('No UserRepository provided or injected.');
    }
    this.activityRepository = activityRepository;
  }
}
```


## Dependencies
- [cors](https://www.npmjs.com/package/cors)
  - middleware that can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options
- [dotenv](https://www.npmjs.com/package/dotenv)
  - module that loads environment variables from a .env file into [process.env](https://nodejs.org/docs/latest/api/process.html#process_process_env)
- [helmet](https://www.npmjs.com/package/helmet)
  - module that helps you secure your Express apps by setting various HTTP headers
- [mongoose](https://www.npmjs.com/package/mongoose)
  - [MongoDB](https://www.mongodb.org/) object modeling tool
- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [zod](https://www.npmjs.com/package/zod)
  - TypeScript schema validator

## Development dependencies
- [typescript](https://www.npmjs.com/package/typescript)
  - syntactic superset of JavaScript, which adds static typing
- [nodemon](https://www.npmjs.com/package/nodemon)
  - tool that automatically restarts the node application when code changes are detected
- [ts-node](https://www.npmjs.com/package/ts-node)
  - TypeScript execution engine and REPL for Node.js
- [eslint](https://www.npmjs.com/package/eslint)
  - linting tool
- [jest](https://www.npmjs.com/package/jest)
  - JavaScript testing framework
- [supertest](https://www.npmjs.com/package/supertest)
  - library that allows APIs testing




