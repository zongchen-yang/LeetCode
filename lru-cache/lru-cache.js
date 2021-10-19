var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    const temp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, temp);
    return temp;
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
    }
};
