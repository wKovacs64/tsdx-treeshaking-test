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
the `consumer` directory is a bare bones [Gatsby](https://www.gatsbyjs.org/)
project that imports the `Thing1` component from `tsdx-treeshaking-test`.

### Analyze

To observe the issue, run the following:

```sh
yarn
yarn analyze
```

This will build the component library with `tsdx`, then build the Gatsby
consumer site, and finally open the Webpack Bundle Analyzer for the production
Gatsby build at `http://127.0.0.1:8888/`. You can then use the "search modules"
functionality to search for "emotion" (you don't want to find it, but you will).
