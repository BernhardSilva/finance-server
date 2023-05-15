npm init -y

yarn add express body-parser cors dotenv helmet morgan mongoose mongoose-currency

yarn add -D nodemon

edit
package.json
  "type": "module",
  
  "scripts": {
  "dev": "nodemon index.js"
  }

create index.js

then create .env with MONGO_URL and PORT=1337