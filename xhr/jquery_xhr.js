import $ from 'jquery'

$.ajax('url', {
    method: 'get',
    data: { name: 'kobe' },
    success: function (data) {
        console.log(data)
    },
    error: function (err) {
        console.log(err)
    }
})

$.get('url', { name: 'kobe' }, (data, statusText, xhr) => {
    console.log(data)
})

$.ajax('url', {
    method: 'post',
    data: { name: 'kobe' },
    success: function (data) {
        console.log(data)
    },
    error: function (err) {
        console.log(err)
    }
})

$.post('url', { name: 'kobe' }, (data, statusText, xhr) => {
    console.log(data)
})