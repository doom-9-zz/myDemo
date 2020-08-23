console.log('xhr-----------get')
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response)
    }

}

xhr.open('get', 'url?get请求内容')

xhr.send()

console.log('xhr-----------post')
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response)
    }

}

xhr.open('post', 'url')

xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

xhr.send('post请求内容')

xhr.abort()
