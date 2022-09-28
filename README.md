# React Query
## What?
### A library for fetching data in a React application.

## Why?
1. Since React is a UI library, there is not specific pattern for data fetching
2. useEffect hook for data fetching and useState hook to maintain component state like loading, error or resulting data.
3. If the data is needed throughtout the app, we tend to use state management libraries.card
4. Most of the state managatment libraries are good for working with client state. Ex: 'theme' for the application/ whether a modal is open.
5. State management libraires are not great for working with <ins><em>asynchronous or server state.</em>em></em></ins>


### __Client vs Server state__
___

#### __Client state__
* Persisted in your app memory and accessing or updating it is synchronous.

#### __Server state__
* Persisted remotely and  requires asynchronous APIs for fetching or updating.
* Has shared ownership.
* Data can be updated by someone else without your knowledge.
* UI data may not be in sync with the remote data.
* Challenging when you have to deal without caching, deduping multiple requests for the same data, updating stale data in the background, performance optimizations etc.

>### __Content covered__
* Basic queries
* Poll data
* RQ dev tools
* Create reusable query hooks
* Query by ID
* Parallel queries
* Dynamic queries
* Dependednt queries
* Infinite & paginated queries
* Update data using mutations
* Invalidate queries
* Optimistic updates
* Axios Interceptor