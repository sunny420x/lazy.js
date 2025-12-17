<h1>Lazy.js</h1>
<p>
Look like express.js but it's not!!
</p>
<h2>Usage:</h2>
<code>
const Lazy = require('./src/lazy')
const app = new Lazy(4000)
app.createApp()
</code>
<h3>Handling GET request</h3>
<code>
app.on('/', 'get', (req,res) => {
    res.end('Welcome to Lazy.js !!')
})
</code>
<h3>Handling POST request</h3>
<code>
app.on('/', 'post', (req,res) => {
    res.end('This is POST !!')
})
</code>
<h3>Responing with JSON Object</h3>
<code>
app.on('/json', 'get', (req,res) => {
    res.json({
        message: "Hello World!"
    })
})
</code>