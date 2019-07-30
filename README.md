# [`tsdx`](https://github.com/palmerhq/tsdx) Tree-shaking Test

## Description

This component library consists of two components: `Thing1` and `Thing2` (both
exported as named exports). `Thing1` is unstyled and has no imported
dependencies other than `React`. `Thing2` is styled with Emotion and imports it
accordingly.

### Desired Behavior

I was hoping consuming projects that only import `Thing1` would not see `Thing2`
nor Emotion in their bundle.

### Observed Behavior

Importing only `Thing1` does eliminate `Thing2` (good) but Emotion still is
included in the resulting consumer bundle (bad). Inspecting
`dist/tsdx-treeshaking-test.esm.js` reveals all the components (and their
dependencies) are in this single file with their dependencies imported at the
top, and I'm guessing Rollup is having trouble determining side-effects.

## Try it yourself

This project is configured using
[Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) where the root
directory is the library created with `tsdx` (named `tsdx-treeshaking-test`) and
several consuming projects live under the `consumers` directory:

- [cra](https://github.com/facebook/create-react-app#readme)
- [gatsby](https://www.gatsbyjs.org/)
- [parcel](https://parceljs.org/)

Each consumer consists of a simple index page that simply imports the `Thing1`
component from `tsdx-treeshaking-test`.

### Analyze

To observe the issue in the Gatsby consumer project, run the following:

```sh
yarn
yarn analyze
```

This will build the component library with `tsdx`, then build the Gatsby site,
and finally open the Webpack Bundle Analyzer for the production Gatsby build at
`http://127.0.0.1:8888/`. You can then use the "search modules" functionality to
search for "emotion" (you don't want to find it, but you will).

You can observe the issue in the other consumer projects by building them and
either noting the bundle size and/or `grep`ing through the output for
"`emotion`".

- `yarn workspace consumer-cra build`
- `yarn workspace consumer-parcel build`

If you comment out the `Thing1` import in any of the examples and rebuild,
Emotion will not show up in the output.
