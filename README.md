# Positions in text

[![build](https://travis-ci.org/tallesl/positions-in-text.png)](https://travis-ci.org/tallesl/positions-in-text)
[![coverage](https://coveralls.io/repos/tallesl/positions-in-text/badge.png?branch=master)](https://coveralls.io/r/tallesl/positions-in-text?branch=master)
[![dependencies](https://david-dm.org/tallesl/positions-in-text.png)](https://david-dm.org/tallesl/positions-in-text)
[![devDependencies](https://david-dm.org/tallesl/positions-in-text/dev-status.png)](https://david-dm.org/tallesl/positions-in-text#info=devDependencies)
[![npm module](https://badge.fury.io/js/positions-in-text.png)](http://badge.fury.io/js/positions-in-text)

[![npm](https://nodei.co/npm/positions-in-text.png?mini=true)](https://nodei.co/npm/positions-in-text/)

Returns the words and the index of its appearances in the given text.

## Usage

```javascript
$ npm install positions-in-text
positions-in-text@1.0.0 node_modules/positions-in-text
$ node
> var positionsInText = require('positions-in-text')
undefined
> positionsInText('not ignorance but ignorance of ignorance is the death of knowledge')
{ not: [ 0 ],
  ignorance: [ 1, 3, 5 ],
  but: [ 2 ],
  of: [ 4, 9 ],
  is: [ 6 ],
  the: [ 7 ],
  death: [ 8 ],
  knowledge: [ 10 ] }
```
