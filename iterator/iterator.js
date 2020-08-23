function iterator() {
    let that = this
    let index = 0
    let keys = Object.keys(that)

    if (this instanceof Array) {
        return {
            next: function () {
                return index < that.length ? { value: that[index++], done: false } : { value: that[index++], done: true }
            }
        }
    } else {
        return {
            next: function () {
                return index < keys.length ? { value: that[keys[index++]], done: false } : { value: that[keys[index++]], done: true }
            }
        }
    }
}

Array.prototype[Symbol.iterator] = iterator