var reorderLogFiles = function(logs) {
  let digitLogs = []
  let letterLogs = []
  logs.forEach(log => {
    let firstWord = log.split(' ')[1]
    parseInt(firstWord) ? digitLogs.push(log) : letterLogs.push(log)
  })

  letterLogs.sort( (log1, log2) => {
    let data1 = getData(log1)
    let data2 = getData(log2)
    return data1 === data2 ? log1 > log2 ? 1 : 0 : data1 > data2 ? 1 : 0
  })
  return letterLogs.concat(digitLogs)
}

let getData = function(log) {
  return log.slice(log.indexOf(' '), log.length)
}

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]));