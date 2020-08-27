function axios({ url, method = 'GET', params = {}, data = {} }) {

    let queryStr = ''

    Object.keys(params).forEach((key) => {
        queryStr += `${key}=${params[key]}&`
    })

    if (queryStr) {
        queryStr = queryStr.slice(0, -2)
        url = url + '?' + queryStr
    }


    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onreadystatechange = () => {
            const { readyState, status, statusText } = xhr

            if (readyState !== 4) return

            if (status >= 200 && status < 300) {
                const response = {
                    data: JSON.parse(xhr.response).result,
                    status,
                    statusText:JSON.parse(xhr.response).message
                }
                resolve(response)
            } else {
                reject('request error' + status)
            }
        }

        xhr.open(method, url, true)

        if (method === 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
            xhr.send(JSON.stringify(data))
        } else {
            xhr.send()
        }
    })
}