# Web Age Webinar: Introduction to GraphQL Webinar

## Presenter

Eric Greene - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Setup Instructions

This is a starter project for creating an HTML/SASS/React/GraphQL application.

### Application Setup

Step 0. Please completely read and thoroughly understand the instructions below before performing them.

Step 1. Download Install Node.js version 8 or higher. Version 8 or higher MUST be installed. If you have an older Node.js version that you need to keep, then use something like [NVM](https://www.npmjs.com/package/nvm) to manage multiple Node.js installations. To install Node.js click [here](https://nodejs.org).

Step 2. Download the repository as a zip file. Extract the zip file to a working folder on your system.

Step 3. Open a new terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
npm i && npm start
```

It will take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** file per the instructions in that file. Then re-run the command above.

This set has been completed successfully when you receive the following message:

```bash
[1] Child html-webpack-plugin for "index.html":
[1]     chunk    {0} index.html 541 kB [entry] [rendered]
[1]         [0] ./~/lodash/lodash.js 540 kB {0} [built]
[1]         [1] ./~/html-webpack-plugin/lib/loader.js!./src/index.html 607 bytes {0} [built]
[1]         [2] (webpack)/buildin/global.js 509 bytes {0} [built]
[1]         [3] (webpack)/buildin/module.js 517 bytes {0} [built]
[1] webpack: Compiled successfully.
```

This terminal window is now running the web server, a second terminal window will need to be opened to run additional terminal commands.

Step 5. Open a web browser, and navigate to [http://localhost:3000](http://localhost:3000).  The starter web application should load and be usable.

Note: This command will run, and then wait for file changes to process updated source code from the **client** and **server** folders. Webpack does **NOT** exit and return to a terminal prompt. Please do not close this terminal window.

#### To Modify the Web Application

Step 6. Open your favorite text editor (such as [Visual Studio Code](https://code.visualstudio.com)), and modify the files in the **client** and **server** folders. When file changes are saved, **webpack** and **nodemon** will automatically transpile and bundle the server and client application code and assets. To see the changes, reload your web browser (live reload is enabled so reloading will probably occur automatically).