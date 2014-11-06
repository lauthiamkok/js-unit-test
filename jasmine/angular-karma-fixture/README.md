# INSTALLATION

1. Install node.js.

2. Install Karma. Note that you must install it **globally** so that it can be accessed by any project.

    `$ npm install -g karma`
    
    and you must install these **globally** as well,

    ```
    $ npm install -g karma-cli
    $ npm install -g karma-jasmine
    $ npm install -g karma-chrome-launcher
    $ npm install -g karma-firefox-launcher
    $ npm install -g karma-junit-reporter
    ```

    and must install this for testing Angular directives - **globally**,

    `$ npm install -g karma-ng-html2js-preprocessor`

    and maybe others that you may need...

3. Then navigate to the root folder (where all your projects are kept) from the command line in your Command Prompt or Git Bash, e.g,

    ```
    $ cd wamp\www\path\of\your\project\ (Command Prompt)
    $ cd /c/wamp/www/path/of/you/project/ (Git Bash)
    ```

4. Start Karma using your configuration of your project,

    `$ karma start karma.conf.js`

5. Note that if you have `karma.conf.js` running already, you need to restart your Git Bash and run the line in step 4 again for each time you make changes in `karma.conf.js`.