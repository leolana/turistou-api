import * as express from 'express';
import * as GraphQLHTTP from 'express-graphql';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import * as path from 'path';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

import { config } from '@config';
import { Context } from '@Context';
import { authorizationChecker } from '@infra/auth';
import { getErrorCode, getErrorMessage, handlingErrors } from '@infra/graphql';

export const graphqlLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {
  if (settings && config.graphql.enabled) {
    const expressApp: express.Application = settings.getData('express_app');
    const passport = settings.getData('passport');

    console.log('------- config.app.dirs.resolvers-------');
    console.log(config.app.dirs.resolvers);

    const schema = await buildSchema({
      resolvers: config.app.dirs.resolvers as any,
      // automatically create `schema.gql` file with schema definition in current folder
      emitSchemaFile: path.resolve(__dirname, '../api', 'schema.gql'),
      container: Container,
      authChecker: authorizationChecker,
    });

    handlingErrors(schema);
    // Add graphql layer to the express app
    expressApp.use(
      config.graphql.route,
      async (request: any, response: express.Response, next: express.NextFunction) => {
        passport.authenticate(
          'jwt',
          { session: false },
          (err: unknown, user: string, info: unknown) => {
            if (user) {
              request.user = user;
            }

            next();
          },
        )(request, response, next);
      },
      async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        // Build GraphQLContext
        const requestId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER); // uuid-like
        const container = Container.of(requestId); // get scoped container
        const context = { requestId, container, request, response, next, passport } as Context; // create our context
        container.set('context', context); // place context or other data in container
        // Setup GraphQL Server
        return GraphQLHTTP.graphqlHTTP({
          schema,
          context,
          graphiql: config.graphql.editor,
          customFormatErrorFn: error => ({
            code: getErrorCode(error.message),
            message: getErrorMessage(error.message),
            path: error.path
          }),
        })(request, response);
      });
  }
};
