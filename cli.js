const program = require('commander')
const api = require('./index.js')

program
  .option('-x, --xxx', 'what the xxx');
program
  .command('add')
  .description('add a task')
  .action((args) => {
    const words = args.args.join(' ')
    console.log(words);
  })
program
  .command('clear')
  .description('clear all tasks')
  .action((args) => {
    console.log('this in clear');
  })

program.parse(process.argv);

