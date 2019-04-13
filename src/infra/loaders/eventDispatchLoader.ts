import * as glob from 'glob';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';

import { config } from '../../config';

/**
 * eventDispatchLoader
 * ------------------------------
 * This loads all the created subscribers into the project, so we do not have to
 * import them manually
 */
export const eventDispatchLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  if (settings) {
    const patterns = config.app.dirs.subscribers;
    patterns.forEach((pattern) => {
      glob(pattern, (err: any, files: string[]) => {
        for (const file of files) {
          require(file);
        }
      });
    });
  }
};
