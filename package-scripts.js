/**
 * Windows: Please do not use trailing comma as windows will fail with token error
 */

const { series, rimraf, } = require('nps-utils');

module.exports = {
    scripts: {
        default: 'nps start',
        /**
         * Starts the builded app from the dist directory.
         */
        start: {
            script: 'cross-env NODE_ENV=production node dist/App.js',
            description: 'Starts the builded app',
        },
        /**
         * Serves the current app and watches for changes to restart it
         */
        serve: {
            inspector: {
                script: series(
                    'nps banner.serve',
                    'nodemon --watch src --watch .env --inspect'
                ),
                description: 'Serves the current app and watches for changes to restart it, you may attach inspector to it.'
            },
            script: series(
                'nps banner.serve',
                'nodemon --watch src --watch .env'
            ),
            description: 'Serves the current app and watches for changes to restart it'
        },
        /**
         * Setup of the development environment
         */
        setup: {
            script: series(
                'npm install',
                'nps db.seed',
            ),
            description: 'Setup`s the development environment(npm & database)'
        },
        /**
         * Creates the needed configuration files
         */
        config: {
            script: series(
                runFast('./commands/tsconfig.ts'),
            ),
            hiddenFromHelp: true
        },
        /**
         * Builds the app into the dist directory
         */
        build: {
            script: series(
                'nps banner.build',
                'nps config',
                'nps lint',
                'nps clean.dist',
                'nps transpile',
                'nps copy',
                'nps copy.tmp',
                'nps clean.tmp',
            ),
            description: 'Builds the app into the dist directory'
        },
        /**
         * Runs TSLint over your project
         */
        lint: {
            script: tslint(`./src/**/*.ts`),
            hiddenFromHelp: true
        },
        /**
         * Transpile your app into javascript
         */
        transpile: {
            script: `tsc --project ./tsconfig.build.json && tsc-alias --project ./tsconfig.build.json`,
            hiddenFromHelp: true
        },
        /**
         * Clean files and folders
         */
        clean: {
            default: {
                script: series(
                    `nps banner.clean`,
                    `nps clean.dist`
                ),
                description: 'Deletes the ./dist folder'
            },
            dist: {
                script: rimraf('./dist'),
                hiddenFromHelp: true
            },
            tmp: {
                script: rimraf('./.tmp'),
                hiddenFromHelp: true
            },
            distSeeds: {
              script: rimraf('./seeders'),
              hiddenFromHelp: true,
            }
        },
        /**
         * Copies static files to the build folder
         */
        copy: {
            default: {
                script: series(
                    `nps copy.public`
                ),
                hiddenFromHelp: true
            },
            public: {
                script: copy(
                    './src/infra/public/*',
                    './dist',
                    './src/infra/public/*.ts'
                ),
                hiddenFromHelp: true
            },
            tmp: {
                script: copyDir(
                    './.tmp/src',
                    './dist'
                ),
                hiddenFromHelp: true
            }
        },
        /**
         * Database scripts
         */
        db: {
            seed: {
                script: series(
                  'nps banner.seed',
                  'nps config',
                  `npx mongo-seeding-cli --drop-database --replace-id --db-name turistou ./src/infra/database/seeds`
                ),
                description: 'Seeds generated records into the database'
            }
        },
        /**
         * These run various kinds of tests. Default is unit.
         */
        test: {
            default: 'nps test.unit',
            unit: {
                default: {
                    script: series(
                        'nps banner.testUnit',
                        'nps test.unit.pretest',
                        'nps test.unit.run'
                    ),
                    description: 'Runs the unit tests'
                },
                pretest: {
                    script: tslint(`./test/unit/**.ts`),
                    hiddenFromHelp: true
                },
                run: {
                    script: 'cross-env NODE_ENV=test jest --testPathPattern=unit',
                    hiddenFromHelp: true
                },
                verbose: {
                    script: 'nps "test --verbose"',
                    hiddenFromHelp: true
                },
                coverage: {
                    script: 'nps "test --coverage"',
                    hiddenFromHelp: true
                }
            },
            integration: {
                default: {
                    script: series(
                        'nps banner.testIntegration',
                        'nps test.integration.pretest',
                        'nps test.integration.run'
                    ),
                    description: 'Runs the integration tests'
                },
                pretest: {
                    script: tslint(`./test/integration/**.ts`),
                    hiddenFromHelp: true
                },
                run: {
                    // -i. Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests. This can be useful for debugging.
                    script: 'cross-env NODE_ENV=test jest --testPathPattern=integration -i',
                    hiddenFromHelp: true
                },
                verbose: {
                    script: 'nps "test --verbose"',
                    hiddenFromHelp: true
                },
                coverage: {
                    script: 'nps "test --coverage"',
                    hiddenFromHelp: true
                }
            },
            e2e: {
                default: {
                    script: series(
                        'nps banner.testE2E',
                        'nps test.e2e.pretest',
                        'nps test.e2e.run'
                    ),
                    description: 'Runs the e2e tests'
                },
                pretest: {
                    script: tslint(`./test/e2e/**.ts`),
                    hiddenFromHelp: true
                },
                run: {
                    // -i. Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests. This can be useful for debugging.
                    script: 'cross-env NODE_ENV=test jest --testPathPattern=e2e -i',
                    hiddenFromHelp: true
                },
                verbose: {
                    script: 'nps "test --verbose"',
                    hiddenFromHelp: true
                },
                coverage: {
                    script: 'nps "test --coverage"',
                    hiddenFromHelp: true
                }
            },
        },
        /**
         * This creates pretty banner to the terminal
         */
        banner: {
            build: banner('build'),
            serve: banner('serve'),
            testUnit: banner('test.unit'),
            testIntegration: banner('test.integration'),
            testE2E: banner('test.e2e'),
            migrate: banner('migrate'),
            seed: banner('seed'),
            revert: banner('revert'),
            clean: banner('clean')
        }
    }
};

function banner(name) {
    return {
        hiddenFromHelp: true,
        silent: true,
        description: `Shows ${name} banners to the console`,
        script: runFast(`./commands/banner.ts ${name}`),
    };
}

function copy(source, target, ignore) {
    const command = `copyfiles --up 1 ${source} ${target}`
    return ignore ?
        command + ` -e "${ignore}"`
        : command;
}

function copyDir(source, target) {
    return `ncp ${source} ${target}`;
}

function build(pathSource, pathTarget) {
  return `tsc -t es5 --module CommonJS --outDir ${pathTarget} ${pathSource}`;
}

function runFast(path) {
    return `ts-node --transpile-only ${path}`;
}

function tslint(path) {
    return `tslint -c ./tslint.json ${path} --format stylish`;
}
