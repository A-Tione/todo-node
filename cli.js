#!/usr/bin/env node
// 上述注释为了指定用node作为脚本的解释程序——称为shebang
const program = require('commander')
const api = require('./index.js')
const pkg = require('./package.json')

program
  .version(pkg.version)
program
  .command('add')
  .description('add a task')
  .action((args) => {
    const words = args.args.join(' ')
      api.add(words).then(()=> {
          console.log('添加成功')
      }, ()=> {
          console.log('添加失败')
      })
  })
program
  .command('clear')
  .description('clear all tasks')
  .action((args) => {
      api.clear().then(()=> {
          console.log('清除完毕')
      }), ()=> {
          console.log('清除失败')
      }
  })

if (process.argv.length === 2) {
    // 说明用户直接运行 node cli.js
    api.showAll()
}
program.parse(process.argv);

