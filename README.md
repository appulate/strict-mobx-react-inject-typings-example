# Strict `mobx-react/inject` typings example
This is an example of using custom strict `mobx-react/inject` typings. The official typings are not typesafe enough and have some issues https://github.com/mobxjs/mobx-react/issues/256. The custom typings use `InferableComponentEnhancerWithProps` type from `@types/react-redux` package. `@types/react-redux` is installed using an alias (`@types/react-redux-typings-for-mobx-react`) for self-documenting purpose.
## Pros
1. Typesafe injection without optional props, custom inject wrappers, etc.

## Cons
1. `inject` cannot be used as a decorator
2. Extraneous `WrappedComponent` property
3. Lack of `wrappedComponent` and `wrappedInstance` properties

## Steps
1. Run `npm install` (`npm@6.9.0` is required) or `yarn`
2. Run `npm run typecheck` or `yarn typecheck`
