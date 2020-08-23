console.log("---------数组去重1-------------")

function uniArr(arr) {

    let result = []
    arr.forEach((element, index) => {
        if (result.indexOf(element) === -1) {
            result.push(element)
        }
    })

    return result
}

console.log("---------数组去重2-------------")

function uniArr(arr) {

    let set = new Set(arr)
    let result = []

    for (let iterator of set) {
        result.push(iterator)
    }

    return result
}
console.log("---------数组去重2优化-------------")

function uniArr(arr) {
    return [...new Set(arr)]
}

let uniqArr2 = (arr) => [...new Set(arr)]
