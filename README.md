# Movie Card mentoring task
Application to improve react and typescript skills

## How to install

Application requires **NodeJS** with version > 10.13.0 and **npm** installed on your PC. It can be found [here](https://nodejs.org/en/)
After installation validate what node command in your system PATH, run

```sh
$ node -v
v10.13.0
```

If version name is appears after installation, than all working fine. During installation of **NodeJS** ensure what **npm** is also will be installed (it enabled by default,
so I recommend do not touch anything besides next.. next.. finish buttons:) )

1. Install all required dependencies with

    ```sh
    npm i
    ```

2. To start local dev server use following command

    ```sh
    npm run dev
    ```

### npm scripts listing

* **dev** - run application in develpment mode on base of **webpack-dev-server**, most suitable for development process[localhost:3000]
* **start** - installing dependencies and run application in production mode with own server[localhost:8080]
* **build** - builds ready for deploy app assets in dist/ directory
* **server** - run app own server mode in prod mode
* **lint** - run eslint and stylelint

#### Code Style Guide

To prevent mess in code base, you were supplied with eslint style-guide on how to write good quality code
