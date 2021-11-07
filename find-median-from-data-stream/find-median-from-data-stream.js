/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr= [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const bs = () => {
        let start = 0;
        let end = this.arr.length;
        while (start < end) {
            let mid = Math.floor((start + end)/2);
            if (num > this.arr[mid]) start = mid + 1;
            else end = mid;
        }
        this.arr.splice(start, 0, num)
    }
    if (!this.arr.length) this.arr.push(num);
    else bs();
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const mid = Math.floor(this.arr.length/2);
    return (this.arr.length%2===0) ? (this.arr[mid-1]+this.arr[mid])/2 : this.arr[mid];

};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */