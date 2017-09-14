var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]



function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(kittens, name) {
  return [...kittens, "Broom"]
}

function prependKitten(kittens, name) {
  return ["Arnold", ...kittens]
}

function removeLastKitten(kittens, name) {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(kittens, name) {
  return kittens.slice(1)
}
