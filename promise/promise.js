// 简单实现promise模块
(
    function (window) {

        function Promise(executor) {
            const PENDING = 'pending'
            const FULFILLED = 'fulfilled'
            const REJECTED = 'rejected'


            let _this = this
            this.state = PENDING //状态
            this.value = undefined //成功结果
            this.reason = undefined //失败原因
            this.onFulfilled = [] //成功的回调
            this.onRejected = [] //失败的回调

            function resolvePromise() {
                if (promise2 === x) {
                    reject(new TypeError('返回对象不能是返回值本身？？？？'))
                }
                if (x && typeof x === 'function' || typeof x === 'object') {
                    let used
                    try {
                        let then = x.then
                        if (typeof then === 'function') {
                            then.call(x, (y) => {
                                if (used) return
                                used = true
                                resolvePromise(promise2, y, resolve, reject)
                            }, (r) => {
                                if (used) return
                                used = true
                                reject(r)
                                reject(r)
                            })
                        }

                    } catch (error) {

                    }
                }
            }


            function resolve(value) {
                if (_this.state === PENDING) {
                    _this.state = FULFILLED
                    _this.value = value
                    _this.onFulfilled.forEach(fn => {
                        fn(value)
                    });
                }
            }

            function reject(reason) {
                if (_this.state === PENDING) {
                    _this.state = REJECTED
                    _this.reason = reason
                    _this.onRejected.forEach(fn => {
                        fn(reason)
                    });
                }
            }


            Promise.prototype.then = function (onFulfilled, onRejected) {
                let _this = this
                onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
                onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

                let promise2 = new Promise((resolve, reject) => {
                    if (_this.state === FULFILLED) {
                        setTimeout(() => {
                            try {
                                let x = onFulfilled(_this.value)
                                resolvePromise(promise2, x, resolve, reject)
                            } catch (error) {
                                reject(error)
                            }
                        });
                    } else if (_this.state === REJECTED) {
                        setTimeout(() => {
                            try {
                                let x = onRejected(_this.reason)
                                resolvePromise(promise2, x, resolve, reject)
                            } catch (error) {
                                reject(error)
                            }
                        });
                    } else if (_this.state === PENDING) {
                        _this.onFulfilled.push(() => {
                            setTimeout(() => {
                                try {
                                    let x = onFulfilled(_this.value)
                                    resolvePromise(promise2, x, resolve, reject)
                                } catch (error) {
                                    reject(error)
                                }
                            });
                        })
                        _this.onRejected.push(() => {
                            setTimeout(() => {
                                try {
                                    let x = onRejected(_this.reason)
                                    resolvePromise(promise2, x, resolve, reject)
                                } catch (error) {
                                    reject(error)
                                }
                            });
                        })
                    }
                })
                return promise2



                if (this.state === FULFILLED) {
                    typeof onFulfilled === 'function' && onFulfilled(this.value)
                }
                if (this.state === REJECTED) {
                    typeof onRejected === 'function' && onRejected(this.value)
                }
                if (this.state === PENDING) {
                    typeof onFulfilled === 'function' && this.onFulfilled.push(onFulfilled)
                    typeof onRejected === 'function' && this.onRejected.push(onRejected)
                }
            }
            try {
                executor(resolve, reject)
            } catch (error) {
                reject(err)
            }

        }

        window.Promise = Promise
    }
)(window)