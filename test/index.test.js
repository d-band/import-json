const assert = require('assert');
const path = require('path');
const http = require('http');
const jsonFrom = require('../index');

describe('index', () => {
  let server;

  before((done) => {
    server = http.createServer((req, res) => {
      res.end(JSON.stringify({
        name: 'json-from'
      }));
    });
    server.listen(8000, () => {
      done();
    });
  });

  it('local file', (done) => {
    const file = path.join(__dirname, '..', 'package.json');
    jsonFrom(file).then((data) => {
      assert.strictEqual(data.name, 'json-from');
      done();
    });
  });

  it('local file with error', (done) => {
    const file = 'not-found-file';
    jsonFrom(file).catch((err) => {
      assert(err instanceof Error);
      done();
    });
  });

  it('remote url', (done) => {
    jsonFrom('http://localhost:8000').then((data) => {
      assert.strictEqual(data.name, 'json-from');
      done();
    });
  });

  after(() => {
    server.close();
  });
});
