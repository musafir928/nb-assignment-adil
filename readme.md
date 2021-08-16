# Assignment - PDF Generator

## _simple pdf generator_

![image](./public/images/project.png)

Adil Ablimit

## About this project

> This project is built using pupeteer, express, ejs and some other npm dependencies, the main purpuse of this project is: generate pdf with simple and custom datas.

## Features

-   Get user input and generate preview html template with custom and simple default datas.
-   Generate PDF using preview template.
-   Apis for template, form, error and thanks pages using express.js.
-   Apis for util functions: generate-template and generate-pdf using express.
-   Template engine: EJS.
-   MVC file structure.
-   `Generate Simple Template` button on home page will directly generate a template with simpleData.json (which logo, title and description not included)
-   `!important: form can be submitted without filled, and default data will be take place of none inputted form fields`

## Tech

This project uses a number of open source projects to work properly:

-   [puppeteer] - Automation framework
-   [node.js] - evented I/O for the backend
-   [EJS] - Nodejs template engine.
-   [Express] - fast node.js network app framework
-   [unique-filename-generator] - generating random filename for generated pdf.
-   [MVC] - file struture system for modern frameworks.

## Installation

Install the dependencies and devDependencies and start the server.

```sh
unzip downloaded file
> cd new-bees-assignment
> npm i
> npm run dev
> app is listening on port: 3000
```

## Routes(Api)

| Featute           | Route                              | note                                                                   |
| ----------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| form(home)        | localhost://3000                   | _GET: default home page, rendering a form for user input_              |
| generate-template | localhost://3000/generate-template | _POST: generate template using user input data & default/simpleData_   |
| generate-pdf      | localhost://3000/genearte-pdf      | _generate pdf using current html template on route: generate-template_ |
| template          | localhost://3000/template          | _to render a html template using stored data_                          |

## Todo

#### `this project can be implemented to do more complex tasks`

|     | Todo                                                                                   |
| --- | -------------------------------------------------------------------------------------- |
| 1   | add models for database interaction                                                    |
| 2   | add user register/login/subscription functionality to customized user data in database |
| 3   | add more pages: user dashboard etc.                                                    |

## File struture and usage

```
new-bees-assignment
│   README.md
│   package.json
│   package-lock.json
│   server.js // entry point of the project
│
└───public
│   │   styles.css
│   └───  assets
│   └───images
└───  models /
|
|
└───  utils
|       |    file-name-generator.js
|       |    fileManager.js
|       |    pptr.js
└── views
|    └─── partials
|    |    error.ejs
|    |    form.ejs
|    |    template.ejs
|    |    thanks.ejs

```

### general useage

server.js will set up the server create routes. models folder(in further implementation) holdes models for data base and connection utility to database. views folder holds all pages template for ejs. controllers folder will export all routes/controllers in two types: utilControllers and page controllers. utils folder holds all helper functions, pptr pdf generation function also here. public folder holds all assets, images and store all user input/ default datas.

### server.js

    line 1 ~ 4: import/require associated dependencies and routes/controllers
    line 6: define a port for the server, which default is 3000
    line 8: setting template engine for node server, in pur case: EJS
    line 9: use express build in body parser for post requests
    line 10: set up static files folder => ./public
    line 13~14: import routes
    line 17: set up server

### public/styles

    holds all views' styles

### public/assets

    holds all assets

### public/images

    holds all images

### public/pdf

    generated pdf files will be stored here with name: pdf- prefix and rndom string

### models/

    placeholder for further database implementation

### utils/file-name-generator.js

    line 1: import/require package
    line 3~13: create object instance with some configuration options
    line 15: export path which we use to store our pdf file

### utils/fileManager.js

    line 1: import fs module from built in node modules
    line 3-15: create and export removeFile function which use fs module and returns a promise

    line 17~27: create and export readFromFile function which use fs module and returns a promise

    line 29~38: create and export saveDataAsJson function which use fs module and returns a promise, will store a json file called data.json user path: public/assets/static/ .

### utils/pptr.js

```line: 1: import/require puppeteer
line  2: import/require random file name generated from utils/file-name-generator.js
line 4: create and export generatePdf function
line 5 ~ 9: goto template page.
line 10~13: customize template to ready for generating pdf, what we've done here is removing generate pdf button from template to not include it in final pdf file.
line 14~18: generate pdf using puppeteer pdf functionality with custom options: random filename, formmat: 'A4', can be 'letter, A3' etc.
rest: close the browser, and catching error if there is any.
```

### views folder

```
holdes all ejs templates, some resuable/resued parts of templates stored in partials folder as ejs documentation indecated.
```

# _Thank for this assignment!_

_I've learned a lot by doing it, and looking forward `feedback` to make it better or as expected_!
