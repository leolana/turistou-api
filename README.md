# DDD/Clean Architecture Boilerplate &nbsp;

 Boilerplate  **API** developed in **[Node.js][node]** with database 
**[Postgres][postgres]**.

<p align="center"><a href="https://www.postgresql.org"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" height="24" align="top" /></a> 
<a href="https://www.docker.com"><img src="https://camo.githubusercontent.com/fa6d5c12609ed8a3ba1163b96f9e9979b8f59b0d/687474703a2f2f7765732e696f2f566663732f636f6e74656e74" height="24" align="top" /></a> 
<a href="https://nodejs.org/"><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" height="24" align="top" /></a> </p>


## Tech Stack

* [Docker][docker], [Node.js][node], [TypeScript][typescript] [3.1][typescript_31], [TSLint 5][tslint] with [Microsoft rules][tslint_microsoft_contrib], [Prettier][prettier] — core platform and dev tools
* [Express][express], [Session][session] — common HTTP-server features
* [PostgreSQL][pg] — Database
* [Jest][jest] unit testing and code coverage,


## Directory Layout

```bash
.
├── /commands/                  # Available commands in build
├── /mockserver/                # Mok server api
├── /src/                       # Node.js application source files
│   ├── /domain/
│   ├── /infrastructure/
│   ├── /interfaces/
│   ├── /App.ts
│   ├── /config.ts
│   ├── /Context.ts
├── /types
├── .env                        # Environment file configuration 
├── docker-compose.yml          # Defines Docker services, networks and volumes
├── Dockerfile                  # Commands for building a Docker image for production
├── package.json                # List of project dependencies
├── Gateway.postman.json    # List of project dependencies
```


## Prerequisites

* [Node.Js][node]
* [Docker][docker] Community Edition v17 ou higher
* [VS Code][code] editor, [ESLint][eslint] plug-ins.
* [Postgres][postgres] Database.


## Quick start

This project is intended to be used with v8 (LTS Carbon) release of [Node.js][nodejs] or newer and [NPM][npm]. Make sure you have those installed. Then just type following commands:

* Create database **boilerplate_db**
* Database config:
    * User **postgres**
    * Pass **sa**



```sh
git clone git@github.com:leolana/typescript-clean-architecture-boilerplate.git
cd typescript-clean-architecture-boilerplate/
```

--Local Configuration
```sh
    npm install
    npm start db.migrate
    npm start db.seed
    npm start serve
```

--Docker
```sh
chmod +x ./start-dev.sh
./start-dev.sh
```

Run migrations :
```sh
    npm start db.migrate
```

Run seed :
```sh
    npm start db.seed
```

Now start adding your code in the `src` and unit tests in the `tests` directories. Have fun and build amazing things 🚀

### Unit tests in JavaScript

Writing unit tests in TypeScript can sometimes be troublesome and confusing. Especially when mocking dependencies and using spies.

### Migrations
To generate migrations run the command and add `-n Migration Name`

```sh
node_modules/ts-node/dist/bin.js --transpileOnly node_modules/typeorm/cli.js migration:generate
```

### Postman Test
To test the gateway you can import the configuration in ./Gateway.postman.json


## Available scripts

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `build` - transpile TypeScript to ES6,
+ `build:watch` - interactive watch mode to automatically transpile source files,
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests

---
Made with ♥ by leolana

[winston]: https://github.com/winstonjs/winston
[node]: https://nodejs.org
[js]: https://developer.mozilla.org/docs/Web/JavaScript
[babel]: http://babeljs.io/
[postgres]: https://www.postgresql.org/
[pg]: https://www.postgresql.org/
[code]: https://code.visualstudio.com/
[eslint]:https://eslint.org
[docker]: https://www.docker.com/community-edition
[compose]: https://docs.docker.com/compose/
[mocha]:https://mochajs.org
[session]:https://github.com/expressjs/session
[typescript]:https://www.typescriptlang.org
[typescript_31]:https://www.typescriptlang.org
[tslint]:https://palantir.github.io/tslint
[tslint_microsoft_contrib]:https://github.com/Microsoft/tslint-microsoft-contrib
[express]:https://expressjs.com
[prettier]:https://github.com/prettier/prettier
[npm]:https://www.npmjs.com
[jest]:https://jestjs.io

