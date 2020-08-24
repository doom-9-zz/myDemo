/**
 * simplePrimise
 */

(function (window) {

    const PENDING = 'pending'
    const RESOLVED = 'resolved'
    const REJECTED = 'rejected'

    //promise 构造函数
    function Promise(excutor) {
        const _this = this
        _this.status = PENDING
        _this.data = undefined
        _this.callbackArr = []
        _this.flag = 'me'

        //resolve函数
        function resolve(value) {
            if (!_this.status === PENDING) return
            _this.status = RESOLVED
            _this.data = value
            _this.callbackArr.forEach(obj => {
                setTimeout(() => {
                    obj.onResolved(value)
                });
            });

        }

        //reject函数
        function reject(error) {
            if (!_this.status === PENDING) return
            _this.status = REJECTED
            _this.data = error
            _this.callbackArr.forEach(obj => {
                setTimeout(() => {
                    obj.onRejected(error)
                });
            });
        }

        try {
            excutor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    Promise.prototype.then = function (onResolved, onRejected) {

        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        onResolved = typeof onResolved === 'function' ? onResolved : reason => reason
        const _this = this

        return new Promise((resolve, reject) => {
            function handle(callback) {
                try {
                    const result = callback(_this.data)
                    if (result instanceof Promise) {
                        result.then(resolve, reject)
                    } else {
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }


            if (_this.status === RESOLVED) {
                setTimeout(() => {
                    handle(onResolved)
                });
            } else if (_this.status === REJECTED) {
                setTimeout(() => {
                    handle(onRejected)
                });

            } else {
                _this.callbackArr.push({
                    onResolved() {
                        handle(onResolved)
                    },
                    onRejected() {
                        handle(onRejected)
                    }
                })
            }
        })



    }

    Promise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected)
    }

    Promise.resolve = function (value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        })
    }

    Promise.reject = function (reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    Promise.race = function (promiseArr) {
        return new Promise((resolve, reject) => {
            promiseArr.forEach(p => {
                p.then(resolve, reject)
            })
        })

    }

    Promise.all = function (promiseArr) {
        const count = 0
        const resolveArr = new Array(promiseArr.length)

        return new Promise((resolve, reject) => {
            promiseArr.forEach((p, index) => {
                p.then((value) => {
                    count++
                    resolveArr[index] = value
                    if (count === promiseArr.length) {
                        resolve(resolveArr)
                    }
                }, (error) => {
                    reject(error)
                })
            })
        })
    }

    window.Promise = Promise

})(window);