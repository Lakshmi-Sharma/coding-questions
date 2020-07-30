
var countPrimes = function(n) {
  if(n === 0 || n === 1 || n === 2) return 0
  if(n === 3) return 1
  let primes = [2, 3]
  for(i = 4; i < n; i++) {
    if(isPrime(i)) { primes.push(i) }
  }
  return primes.length
}

var isPrime = function(num) {
  if(num % 2 === 0 || num % 3 === 0) return false
  for(let j = 5; j*j <= num; j+=6) {
    if(num%j === 0 || num%(j+1) === 0) {
      return false
    }
  }
  return true
}

console.log(countPrimes(6))