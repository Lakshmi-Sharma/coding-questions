var LRUCache = function(capacity) {
  this.capacity = capacity
  this.hash = {}
  this.queue = []
};

LRUCache.prototype.accessed = function(key) { 
  if(this.hash[key] !== undefined) {
    if(this.queue.indexOf(key) !== -1) {
      this.queue.splice(this.queue.indexOf(key), 1)
    }

    if(this.queue.length === this.capacity) { 
      let removedKey = this.queue.shift() 
      if(removedKey !== key) { delete this.hash[removedKey] }
    }
    this.queue.push(key)
  }
}

LRUCache.prototype.get = function(key) {
  this.accessed(key)
  return this.hash[key] || -1
};

LRUCache.prototype.put = function(key, value) {
  this.hash[key] = value
  this.accessed(key)
};


var cache = new LRUCache(2)

cache.put(1, 1);
cache.put(2, 2);
console.log(2, cache.get(1));       // returns 1
cache.put(3, 3);    // evicts key 2
console.log(2, cache.get(2));       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
console.log(2, cache.get(1));       // returns -1 (not found)
console.log(2, cache.get(3));       // returns 3
console.log(2, cache.get(4));       // returns 4


// console.log(2, cache.get(2));        // returns -1
// cache.put(2, 6);
// console.log(1, cache.get(1));        // returns -1
// cache.put(1, 5);
// cache.put(1, 2);
// console.log(1, cache.get(1));        // returns 2
// console.log(2, cache.get(2));        // returns 2

// ["LRUCache","get","put","get","put","put","get","get"]
// [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]
// [null,-1,null,-1,null,null,2,6]