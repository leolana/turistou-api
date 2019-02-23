import chalk from 'chalk';
import * as figlet from 'figlet';

const index = 2;
figlet.text(process.argv[index], (error: any, data: any) => {
  if (error) {
    return process.exit(1);
  }

  console.log(chalk.blue(data));
  console.log('');
  return process.exit(0);
});
