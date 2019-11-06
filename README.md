# json-from

[![NPM version](https://img.shields.io/npm/v/json-from.svg)](https://www.npmjs.com/package/json-from)
[![NPM downloads](https://img.shields.io/npm/dm/json-from.svg)](https://www.npmjs.com/package/json-from)
[![Dependency Status](https://david-dm.org/d-band/json-from.svg)](https://david-dm.org/d-band/json-from)
[![Build Status](https://travis-ci.org/d-band/json-from.svg?branch=master)](https://travis-ci.org/d-band/json-from)
[![Coverage Status](https://coveralls.io/repos/github/d-band/json-from/badge.svg?branch=master)](https://coveralls.io/github/d-band/json-from?branch=master)

## Installation

```bash
npm install json-from
```

## Example

```js
import jsonFrom from 'json-from';

jsonFrom('./test.json').then(data => {
  console.log(data);
});

jsonFrom('http://example.com/test.json').then(data => {
  console.log(data);
});
```

## Report a issue

* [All issues](https://github.com/d-band/json-from/issues)
* [New issue](https://github.com/d-band/json-from/issues/new)

## License

MIT
