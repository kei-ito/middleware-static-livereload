# middleware-static-livereload

[![Greenkeeper badge](https://badges.greenkeeper.io/kei-ito/middleware-static-livereload.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/kei-ito/middleware-static-livereload.svg?branch=master)](https://travis-ci.org/kei-ito/middleware-static-livereload)
[![Code Climate](https://lima.codeclimate.com/github/kei-ito/middleware-static-livereload/badges/gpa.svg)](https://lima.codeclimate.com/github/kei-ito/middleware-static-livereload)
[![Test Coverage](https://lima.codeclimate.com/github/kei-ito/middleware-static-livereload/badges/coverage.svg)](https://lima.codeclimate.com/github/kei-ito/middleware-static-livereload/coverage)

A middleware for [connect](https://github.com/senchalabs/connect) server.
It injects the [livereload](https://github.com/napcs/node-livereload) script
into .html files before serving them.

## Install

```
npm install middleware-static-livereload
```

## Usage

```javascript
require('connect')()
.use(require('middleware-static-livereload')({
  documentRoot: '/server',
}))
.listen(3000);
```

## License

MIT