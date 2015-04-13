var assert          = require('assert')
var positionsInText = require('../lib/positions-in-text')

var tongueTwister = '\
she sells sea-shells on the sea-shore \
the shells she sells are sea-shells \
I\'m sure for if she sells sea-shells on the sea-shore \
then I\'m sure she sells sea-shore shells'

it('should locate words correctly', function () {
  assert.deepEqual(
    positionsInText(tongueTwister), 
    {
        'she':        [ 0, 8, 16, 25 ]
      , 'sells':      [ 1, 9, 17, 26 ]
      , 'sea-shells': [ 2, 11, 18 ]
      , 'on':         [ 3, 19 ]
      , 'the':        [ 4, 6, 20 ]
      , 'sea-shore':  [ 5, 21, 27 ]
      , 'shells':     [ 7, 28 ]
      , 'are':        [ 10 ]
      , 'I\'m':       [ 12, 23 ]
      , 'sure':       [ 13, 24 ]
      , 'for':        [ 14 ]
      , 'if':         [ 15 ]
      , 'then':       [ 22 ]
    }
  )
})

it('should throw when input is not a text', function () {
  assert.throws(function () {
    positiionsInText(undefined)
  })

  assert.throws(function () {
    positiionsInText(null)
  })

  assert.throws(function () {
    positiionsInText(1337)
  })
})

