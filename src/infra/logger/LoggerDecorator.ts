import { Container } from 'typedi';

import { Logger as WinstonLogger } from '@infra/logger';

// tslint:disable-next-line:function-name
export function LoggerDecorator(scope: string): ParameterDecorator {
  return (object, propertyKey, index): any => {
    const logger = new WinstonLogger(scope);
    const propertyName = propertyKey ? propertyKey.toString() : '';
    Container.registerHandler({
      object,
      propertyName,
      index,
      value: () => logger,
    });
  };
}
