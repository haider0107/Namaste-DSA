
var MyStack = function () {
    this.q1 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let arrlength = this.q1.length
    for (let i = 0; i < arrlength - 1; i++) {
        let temp = this.q1.shift()
        this.q1.push(temp)
    }
    let ans = this.q1.shift()

    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let arrlength = this.q1.length
    for (let i = 0; i < arrlength - 1; i++) {
        let temp = this.q1.shift()
        this.q1.push(temp)
    }

    let ans = this.q1.shift()
    this.q1.push(ans)

    return ans
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */