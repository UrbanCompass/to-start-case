'use strict';

const babel = require('babel-core');
const fs = require('fs');

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

fs.writeFileSync('dist/to-start-case.js',
  babel.transformFileSync('src/index.js', {
    babelrc: false,
    presets: [
      ['env', {
        targets: {
          node: true,
        },
      }],
    ],
  }).code, 'utf-8');

fs.writeFileSync('dist/to-start-case.umd.js',
  babel.transformFileSync('src/index.js', {
    babelrc: false,
    presets: [
      ['env', {
        modules: 'umd',
        targets: {
          browsers: ['last 2 versions'],
        },
      }],
    ],
  }).code, 'utf-8');

fs.createReadStream('src/index.js')
  .pipe(fs.createWriteStream('dist/to-start-case.mjs'));
