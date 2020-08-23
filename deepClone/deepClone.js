console.log('-------深克隆------')

function deepClone(arr) {
    return JSON.parse(JSON.stringify(arr))
}

//弊端：JSON.parse() 方法只能解析对象和数组

console.log('-------手写深克隆------')

function checkoutType(params) {
    return Object.prototype.toString.call(params).slice(8, -1)
}

function deepClone2(params) {
    let paramsType = checkoutType(params)
    let result

    if (paramsType === 'Array') {
        result = []
        for (const key in params) {
            result[key] = deepClone2(params[key])
        }
    } else if (paramsType === 'Object') {
        result = {}
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                result[key] = deepClone2(params[key])
            }
        }
    } else {
        return params
    }

    return result
}