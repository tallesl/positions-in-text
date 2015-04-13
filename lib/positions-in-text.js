module.exports = function (text) {
  if (typeof text === 'string') text = text.split(' ')

  if (Array.isArray(text)) return text.reduce(locate, { })
  else throw new Error('The given text must be an string or an array (of strings).')
}

function locate (hash, word, index) {
  if (hash[word]) hash[word].push(index)
  else hash[word] = [ index ]
  return hash
}

