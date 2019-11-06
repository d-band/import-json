# imoprt-json

[![NPM version](https://img.shields.io/npm/v/imoprt-json.svg)](https://www.npmjs.com/package/imoprt-json)
[![NPM downloads](https://img.shields.io/npm/dm/imoprt-json.svg)](https://www.npmjs.com/package/imoprt-json)
[![Dependency Status](https://david-dm.org/d-band/imoprt-json.svg)](https://david-dm.org/d-band/imoprt-json)
[![Build Status](https://travis-ci.org/d-band/imoprt-json.svg?branch=master)](https://travis-ci.org/d-band/imoprt-json)
[![Coverage Status](https://coveralls.io/repos/github/d-band/imoprt-json/badge.svg?branch=master)](https://coveralls.io/github/d-band/imoprt-json?branch=master)

## Installation

```bash
npm install imoprt-json
```

## Example

```js
import importJson from 'imoprt-json';

importJson('./test.json').then(data => {
  console.log(data);
});

importJson('http://example.com/test.json').then(data => {
  console.log(data);
});
```

## Report a issue

* [All issues](https://github.com/d-band/import-json/issues)
* [New issue](https://github.com/d-band/import-json/issues/new)

## License

MIT
