
// const fields = { name: "", entry: "", version: "1.0.0", description: "", author: "", database, license }
//package.json template  generator
const pkg = (fields) => ({

    "name": fields.name,
    "version": fields.version,
    "description": fields.description,
    "scripts": {
        "start": `node ${fields.entry}`,
        "dev": `nodemon ${fields.entry}`
    },
    "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^10.0.0",
        "express": "~4.16.1",
        "express-useragent": "^1.0.15",
        "jsonwebtoken": "^8.5.1",
        "lodash": "^4.17.21",
        "nodemailer": "^6.7.2",
        "otp-generator": "^4.0.0",
        "sequelize": "^6.13.0",
        "sequelize-bcrypt": "^1.1.0"
    },
    "devDependencies": {
        "nodemon": "^2.0.15"
    },
    "repository": {
        "type": "git",
        "url": ""
    },
    "keywords": [
    ],
    "author": fields.author,
    "license": fields.license,
    "bugs": {
        "url": ""
    },
    "homepage": ""
})
module.exports = { pkg }