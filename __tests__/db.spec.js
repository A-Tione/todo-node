const db = require('../db')
const fs = require('fs')
jest.mock('fs')

describe('bd', ()=> {
  afterEach(()=> {
    fs.clearMocks()
  })
})

it('can read', async() => {
  const data = [{title: 'hi', done: true}]
  fs.setReadFileMock('/xxx', null, JSON.stringify(data))
  const list = await db.read('/xxx')
  expect(list).toStrictEqual(data)
});

it('can write', async () => {
  let fakeFile
  fs.setWriteFileMock('/yyy', (path, data, callback) => {
    fakeFile = data
    callback(null)
  })
  const list =  [{title: '吃冰淇淋', done: true}, {title: '吃火锅', done: true}]
  await db.write(list, '/yyy')
  expect(fakeFile).toBe(JSON.stringify(list) + '\n')
});
