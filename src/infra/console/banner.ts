import { config } from '@config';
import { Logger } from '@infra/logger';

export function banner(log: Logger): void {
  if (config.app.banner) {
    const route = () => `${config.app.schema}://${config.app.host}:${config.app.port}`;
    log.info('');
    log.info(`Aloha, your app is ready on ${route()}${config.app.routePrefix}`);
    log.info('To shut it down, press <CTRL> + C at any time.');
    log.info('');
    log.info('-------------------------------------------------------');
    log.info(`Environment  : ${config.node}`);
    log.info(`Version      : ${config.app.version}`);
    log.info('');
    log.info(`API Info     : ${route()}${config.app.routePrefix}`);
    if (config.graphql.enabled) {
      log.info(`GraphQL      : ${route()}${config.graphql.route}`);
    }
    if (config.monitor.enabled) {
      log.info(`Monitor      : ${route()}${config.monitor.route}`);
    }
    log.info('-------------------------------------------------------');
    log.info('');
  } else {
    log.info('Application is up and running.');
  }
}
