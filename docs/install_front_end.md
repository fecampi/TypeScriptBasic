
Configurando webPack - (Trabalhar com Front-end)
https://webpack.js.org/guides/typescript/

```
npm install --save-dev typescript ts-loader
```

Na raiz do projeto criar um arquivo
webpack.config.js

```
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
  },
  devtool: 'source-map',
}


```

criar o arquivo tsconfig.frontend.json
```
"outDir": "./dist/assets/js",
```
acrescentar no package.json
```
  "scripts": {
    ...
    "dev" :"webpack -w"
  },
```

buildar
```
npm run dev
```
