const khaosoi = require('./src/khaosoi')

const app = new khaosoi(4000)
app.createApp()

//Handling GET request.
app.on('/', 'get', (req,res) => {
    res.end('Welcome to Khaosoi.js 🍜 Made with love from developer to developer ❤️')
})

//Handling POST request.
app.on('/', 'post', (req,res) => {
    res.end('This is POST !!')
})

//Responing JSON Object.
app.on('/json', 'get', (req,res) => {
    res.json({
        message: "Khaosoi Aroi mak! 🤪"
    })
})