
function sendAjaxRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url)
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return
            if (xhr.status >= 200 && xhr.status <= 299) {
                resolve(JSON.parse(xhr.response))
            } else {
                reject(new Error('request error' + xhr.status))
            }
        }
    })
}

const url = 'https://api.apiopen.top/likePoetry?name=李白'
sendAjaxRequest(url).then((val) => {
    console.log(val)
}, (error) => {
    console.log(error)
})
