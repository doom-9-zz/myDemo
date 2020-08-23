import $ from 'jquery'

$.ajax({
    url: 'url',
    method: 'get',
    dataType: 'jsonp',
    data: {},
    success: () => {
        //输入函数体
    },
    error: () => {
        //输入函数体
    }
})

$.getJSON('url?callback=?', {}, () => { })