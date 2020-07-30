var solution = function(isBadVersion) {
  return function(n) {
    if(n === 0) return -1
    let start = 1
    let end = n
    let k_version = null
    let bad_version = null
    while(start !== end) {
      k = Math.ceil((end - start + 1) / 2)

      k_version = start + k - 1
      if(isBadVersion(k_version) === true) {
        if(isBadVersion(k_version - 1) === false) { bad_version = k_version; break }
        end = k_version - 1
      }
      else { start = k_version + 1 }
    } 
    return bad_version || (isBadVersion(start) ? start : -1)
  }
}

console.log(solution(function (version) {
  var badVersions = [false, false, false, true, true]
  return badVersions[version - 1]
})(5));                                                         //4

console.log(solution(function (version) {
  var badVersions = [true]
  return badVersions[version - 1]
})(1));                                                         //1

console.log(solution(function (version) {
  var badVersions = [false]
  return badVersions[version - 1]
})(1));                                                         //-1

console.log(solution(function (version) {
  var badVersions = [false, true, true]
  return badVersions[version - 1]
})(3));                                                         //2

console.log(solution(function (version) {
  var badVersions = [false, true]
  return badVersions[version - 1]
})(2));                                                         //2


console.log(solution(function (version) {
  var badVersions = [false, false, false, true]
  return badVersions[version - 1]
})(4));                                                         //4