window.demo = function (res) {
    console.log(res)
}

const scriptNode = document.createElement('script')

scriptNode.src = 'url?callback=name'

document.body.appendChild(scriptNode)