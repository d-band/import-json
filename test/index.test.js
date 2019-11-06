const assert = require('assert');
const path = require('path');
const http = require('http');
const importJson = require('../index');

describe('index', () => {
  let server;

  before((done) => {
    server = http.createServer((req, res) => {
      res.end(JSON.stringify({
        name: 'import-json'
      }));
    });
    server.listen(8000, () => {
      done();
    });
  });

  it('local file', (done) => {
    const file = path.join(__dirname, '..', 'package.json');
    importJson(file).then((data) => {
      assert.strictEqual(data.name, 'import-json');
      done();
    });
  });

  it('local file with error', (done) => {
    const file = 'not-found-file';
    importJson(file).catch((err) => {
      assert(err instanceof Error);
      done();
    });
  });

  it('remote url', (done) => {
    importJson('http://localhost:8000').then((data) => {
      assert.strictEqual(data.name, 'import-json');
      done();
    });
  });

  after(() => {
    server.close();
  });
});
