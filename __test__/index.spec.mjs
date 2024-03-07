import fs from 'fs'
import test from 'ava'

import { trash, trashAll } from '../index.js'

test('trash a file', (t) => {
  fs.writeFileSync('/tmp/test.txt', '')
  trash('/tmp/test.txt')
  t.is(fs.existsSync('/tmp/test.txt'), false)
})

test('trash a folder', (t) => {
  fs.mkdirSync('/tmp/test-folder', { recursive: true })
  trash('/tmp/test-folder')
  t.is(fs.existsSync('/tmp/test-folder'), false)
})

test('trashAll', (t) => {
  fs.writeFileSync('/tmp/test.txt', '')
  fs.mkdirSync('/tmp/test-folder', { recursive: true })
  trashAll(['/tmp/test.txt', '/tmp/test-folder'])
  t.is(fs.existsSync('/tmp/test-folder'), false)
  t.is(fs.existsSync('/tmp/test.txt'), false)
})
