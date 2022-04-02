let global = 7
function onlyOdds(num) {
  if (!num) {
    return "You must provide an input to this function"
  }
  let retNum = 0
  let addNum = 1
  while (addNum < num) {
    retNum += addNum
    addNum++
    addNum++
  }
  return retNum
}


onlyOdds(10)
