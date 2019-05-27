const variables = {
    Api: {
        port: process.env.port || 3000
    },
    DataBase:{
        connection: process.env.connection || 'mongodb+srv://wecareyouadmin:wecareyoupsw@cluster0-7pioq.mongodb.net/wecareyou?retryWrites=true'
    },
    Security:{
        secretKey: "d41d8cd98f00b204e9800998ecf8427e|21a2ee98b6973278226ef4f1a81ec733"
    }
}

module.exports = variables;