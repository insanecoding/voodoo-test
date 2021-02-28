# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### yarn start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### yarn build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

### yarn test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.

### yarn prod

Serves app in prod mode.
Open http://localhost:5000 to view it in the browser.

### Disclaimer:

In the monetization API, I didn't find anything related to ad agency or costs.
That's why I was able to accomplish the task only partially: I was only display revenue information but not costs/total.
However, I still decided to wrap it as a product and share as is.

### Notes

1. I've chosen react-query over redux/custom hooks because it can do the same (fetch, cache, read data).
   However, it has zero boilerplate, automatically caches requests and even retries in case of errors.
   If the same set of dates is requested twice, only a single request will be fired

2. the project is bundled by snowpack, not webpack or create-react-app.
   it was done for a reason. Snowpack offers unbundled development.
   It means: no need to build/rebuild everything into a single bundle, instead, only changes to particular files are emmited.
   The feedback loop is ligntning fast, changes are seen immediately.

3. I didn't implement UI components from scratch, I used ant design instead.

4. From the UI perspective, the table would be the best but as long as I had only `item: revenue` pairs,
   I decided to use Collapsible elements. I also transposed the table from the example.

5. The project uses Typescript/CSS Modules+PostCSS/Prettier/Eslint. However, the code quality is hackaton-level.
   If I had more time, I would polish it, remove `any`s, extract css custom properties, better split into react components,
   make custom hook, make styling less chaotic. But I ran out of time.
6. Potentially, there can be thousands of entitites, that's why I count revenue right after fetch, to prepare everything in advance, to avoid calculations in
   render method/or `groupBy` functions

7. I was thinking about normalizing it and making redux store with reselect, normalizr etc, but it didn't take off for me

8. In transform, I mutate values. Immutability has a cost (overhead of creating new objects instead of changing existing ones)
   However, transformer is not React/Redux with shallow-equality checking, I don't need time-travel
   that's why I use mutable code there.
9. — But the current approach is not future-proof!
   — Well, to make it future-proof, let's build a small Graphql/REST service
   It will aggregate the data on a daily basis, cache them for everyone and reply with something more convenient for the frontends.
   This is definitely better than cracking numbers on the frontend
   If the date range is big enough, the API will return thousands entities.
   Processing them on the client will result in long main thread tasks, which in turn increases TBT/FID metrics.
   Starting from May, Google will be ranging search results based on Core Web Vitals
