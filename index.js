const homedir = require('os').homedir()
const home = process.env.HOME || homedir
const p = require('path')
const fs = require('fs')
const dbPath = p.join(home, '.todo')


module.exports.add = (title) => {
  // 读取之前任务
  fs.readFile(dbPath, {flag: 'a+'}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      let list
      try {
        list = JSON.parse(data.toString())
      } catch (err2) {
        list = []
      }
      console.log(list);
      const task = {
        title: title,
        done: false
      }
      list.push(task)
      const string = JSON.stringify(list)
      fs.writeFile(dbPath, string, (err3) => {
        if (err3) {
          console.log(err3);
        }
      })
    }
  })
  // 往里面添加一个title任务
  // 存储任务到文件

}
