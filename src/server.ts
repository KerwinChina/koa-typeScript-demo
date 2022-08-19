import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

// Todo: if the path is '/*', the server will crash at lint 8
router.get('/', async(ctx) =>{
  ctx.body = 'Hello World!'
})

app.use(router.routes())

app.listen(3000)

console.log('Server running on port 3000')