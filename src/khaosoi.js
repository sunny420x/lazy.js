const http = require('http');

class Khaosoi {
    port = 3000
    app = null
    
    constructor(port) {
        this.port = port
        this.routes = {};
    }

    createApp() {
        this.app = http.createServer((req, res) => {
            res.json = (data, statusCode = 200) => {
                if (res.writableEnded) return;

                res.statusCode = statusCode;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
            };

            res.xml = (data, statusCode = 200) => {
                if (res.writableEnded) return;

                res.statusCode = statusCode;
                res.setHeader('Content-Type', 'application/xml');
                res.end(data);
            };

            const key = `${req.method}:${req.url}`;
            const handler = this.routes[key];

            if (handler) {
                handler(req, res);
            } else {
                res.statusCode = 404;
                res.end('Not Found');
            }
        })

        this.app.listen(this.port, () => {
            console.log(`Khaosoi is started at http://localhost:${this.port}.`)
        })
    }

    on(path, method, handler) {
        this.routes[`${method.toUpperCase()}:${path}`] = handler;
    }

    get(path, handler) {
        this.routes[`GET:${path}`] = handler;
    }

    post(path, handler) {
        this.routes[`POST:${path}`] = handler;
    }

    put(path, handler) {
        this.routes[`PUT:${path}`] = handler;
    }

    delete(path, handler) {
        this.routes[`DELETE:${path}`] = handler;
    }
}

module.exports = Khaosoi;