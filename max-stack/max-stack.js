
var MaxStack = function() {
    this.stack = [];
    this.max = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x);
    if (!this.max.length) this.max.push(x)
    else this.max.push(Math.max(x, this.peekMax()));
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    this.max.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.max[this.max.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    let temp = [];
    let max = this.peekMax();
    while (this.top() !== max) {
        temp.push(this.pop());
    }
    this.pop();
    while (temp.length) {
        this.push(temp.pop())
    }
    return max;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */