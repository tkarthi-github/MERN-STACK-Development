1. npm init -y - To create server config file with json format.(package.json)
2. npm install express mongoose nodemon cors - Install require packages
3. After installing create index.js main file for creating server inside of server folder.
    const express = require("express");
    const application = express();
    const PORT = 8080;

    application.listen(PORT, () => {
        console.log("Server Started.!");
    })
4. Create a file with the name .env in the root of your project directory. Inside this file, you can write all of your environment variables. One in each line.Install dotenv package. Node.js will not load your .env file automatically. .env is a special file which is used to define environment variables in Node.js. It holds key=value pairs to define the variables. Make sure to ignore .env in the .gitignore before commiting any changes.
    npm install dotenv;

    Accessing env Variable like : const PORT = process.env.YOUR_VARIABLE_NAME;

5. After installing the package then create .env file in root folder (server folder)
    PORT=5000
    WHO_AM_I="Who Knows"

6. nodemon package : Which is used to restart the service automatically while saving. we need configure in package.json file to resert server like below.
     "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
    },

    npm start;

7. To use json method from express for the application
    const application = express();
    application.use(express.json());


# Install require package for configure the backend server using node js.

    1. npm install express - To create server
        const express = require("express");
        const app = express();

        app.listen(PORT, () => {console.log('Server Started.!')})
    2. npm install mongoose - To connect with MongoDB
        const mongoose = require("mongoose");
        const connection = async() => await moogoose.connect(URL) - Use promise or tryCatch to handle connection sucess and fail.
    3. npm install nodemon - To restart the server automatically while saving.
    4. npm install cors - To access the data from react - Need to understand more
