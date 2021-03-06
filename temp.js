{
  "name": "backend",
  "version": "1.0.0",
  "description": "Backend files ",
  "main": "dist/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node build/index.js",
    "install-client": "cd client && npm install && npm run build",
    "postinstall": "tsc",
    "build": "tsc",
    "heroku-postbuild": "tsc && npm run install-client",
    "server": "nodemon --exec ts-node index.ts"
  },
  "author": "Abhishek",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.7",
    "@types/node": "^14.0.27",
    "ts-node": "^8.10.2",
    "typescript": "^3.9.7"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "ts-node": "^8.10.2",
    "typescript": "^3.9.7",
    "@types/express": "^4.17.7",
    "@types/node": "^14.0.27"
  }
}
