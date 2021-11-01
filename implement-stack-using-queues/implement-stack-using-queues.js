
var MyStack = function() {
    this.queue = [];
    this.temp = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue.length > 1) {
        this.temp.push(this.queue.shift());
    }
    let toPop = this.queue.shift();
    this.queue = this.temp;
    this.temp = [];
    return toPop;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while (this.queue.length > 1) {
        this.temp.push(this.queue.shift());
    }
    let top = this.queue.shift();
    this.queue = this.temp;
    this.temp = [];
    this.queue.push(top);
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */