let perfCount = 1000000000
let t1 = new Date()
for(i = 0; i < perfCount; i++) {
  Math.sqrt(2)
}
let t2 = new Date()
console.log(t2 - t1);

let t3 = new Date()
for(i = 0; i < perfCount; i++) {
  Math.sqrt(200000111111111220)
}
let t4 = new Date()
console.log(t4 - t3);
console.log((t4 - t3) - (t2 - t1));