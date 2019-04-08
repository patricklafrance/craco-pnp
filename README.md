# craco-pnp

To repro:

## First yarn link craco
- `git clone` craco repository: https://github.com/sharegate/craco.git
- Switch to the `support-pnp` branch
- go to the `packages/craco` folder
- `yarn link`

## Then
- `git clone` this repository: https://github.com/patricklafrance/craco-pnp.git
- `yarn install`
- `yarn link @craco/craco`
- `yarn start`

## Stack trace

```bash
C:\Dev\10_poc\craco-pnp\.pnp.js:16031
    throw firstError;
    ^

Error: You cannot require a package ("react-scripts\config\webpack.config.js") that is not declared in your dependencies (via "C:\Dev\10_poc\craco-pnp/")
    at makeError (C:\Dev\10_poc\craco-pnp\.pnp.js:55:17)
    at Object.resolveToUnqualified (C:\Dev\10_poc\craco-pnp\.pnp.js:15762:17)
    at Object.resolveRequest (C:\Dev\10_poc\craco-pnp\.pnp.js:15840:31)
    at Function.Module._resolveFilename (C:\Dev\10_poc\craco-pnp\.pnp.js:16022:30)
    at Function.resolve (internal/modules/cjs/helpers.js:30:19)
    at resolveConfigFilePath (C:\Users\patrick.lafrance\AppData\Roaming\npm\node_modules\@craco\craco\lib\cra.js:9:20)
    at getWebpackDevConfigPath (C:\Users\patrick.lafrance\AppData\Roaming\npm\node_modules\@craco\craco\lib\cra.js:39:12)
    at loadWebpackDevConfig (C:\Users\patrick.lafrance\AppData\Roaming\npm\node_modules\@craco\craco\lib\cra.js:43:22)
    at Object.<anonymous> (C:\Users\patrick.lafrance\AppData\Roaming\npm\node_modules\@craco\craco\scripts\start.js:26:26)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
```