const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true) //新的索引创建器

const DB_NAME = 'demo'
const PORT = 27017
const IP = '118.126.66.206'

function connectMongo(success, failed) {
    mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('open', function (err) {
        if (err) {
            console.log('数据库链接失败', err)
            failed('connect failed')
        } else {
            console.log('数据库连接成功')
            success('connect success')
        }
    })
}

module.exports = connectMongo