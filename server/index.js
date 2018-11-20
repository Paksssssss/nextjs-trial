const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app
  .prepare()
  .then(()=> {
    const server = express();

    server.get('/', async (req, res) => {
      app.render(req, res,'/index', {});
    })

    server.get('/about', async (req,res) => {
      app.render(req,res,'/about', {})
    })

    server.get('/clock', async (req, res)=> {
      app.render(req,res,'/clock', {})
    })

    server.get("*", (req, res)=> {
      return handle(req,res)
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  });