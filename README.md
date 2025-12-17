<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/349b0245-3eff-45e3-a14a-7ed3369d214a" />
<h1>Khaosoi.js</h1>
<p>
Look like express.js but it's not!!
</p>
<h2>Usage:</h2>
<pre>const khaosoi = require('./src/khaosoi')
const app = new khaosoi(4000) //Listening on port number 4000.
app.createApp()
</pre>
<h3>Handling GET request</h3>
<pre>app.on('/', 'get', (req,res) => {
    res.end('Welcome to Khaosoi.js !!')
})
</pre>
<h3>Handling POST request</h3>
<pre>app.on('/', 'post', (req,res) => {
    res.end('This is POST !!')
})
</pre>
<h3>Responing with JSON Object</h3>
<pre>app.on('/json', 'get', (req,res) => {
    res.json({
        message: "Hello World!"
    })
})
</pre>
<h3>Handling Express.js style!!</h3>
<pre>app.get('/json', (req,res) => {
    res.json({
        message: "This is GET !!!"
    })
})
</pre>
<pre>app.post('/json', (req,res) => {
    res.json({
        message: "This is POST !!!"
    })
})
</pre>
