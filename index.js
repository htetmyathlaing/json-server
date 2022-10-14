const fs = require('fs');
const sourceDbPath = 'db.json'
const dbPath = '/tmp/db.json'
fs.copyFile(sourceDbPath, dbPath, (err) => {
  if (err) throw err;
  console.log(`${sourceDbPath} was copied to ${dbPath}`);
});

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(dbPath)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})