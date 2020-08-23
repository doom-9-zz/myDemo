function checkoutType(params) {
     return Object.prototype.toString.call(params).slice(8, -1)
}

function deepClone(params) {
     let paramsType = checkoutType(params)
     let result

     if (paramsType === 'Array') {
          result = []
          for (const key in params) {
               result[key] = deepClone(params[key]);
          }
     } else if (paramsType === 'Object') {
          result = {}
          for (const key in params) {
               if (params.hasOwnProperty(key)) {
                    result[key] = deepClone(params[key]);
               }
          }
     } else {
          return params
     }

     return result
}