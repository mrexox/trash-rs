import fs from 'fs'
import os from 'os'
import path from 'path'
import test from 'ava'

import { trash, trashAll } from '../index.js'

function createTmpDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'test-'))
}

function createTmpFile() {
  const dir = createTmpDir()
  const filepath = path.join(dir, 'test-file.txt')
  fs.writeFileSync(filepath, '')
  return filepath
}

test('trash a file', (t) => {
  const filepath = createTmpFile()
  trash(filepath)
  t.is(fs.existsSync(filepath), false)
})

test('trash a folder', (t) => {
  const dir = createTmpDir()
  trash(dir)
  t.is(fs.existsSync(dir), false)
})

test('trashAll', (t) => {
  const dir = createTmpDir()
  const file = createTmpFile()
  trashAll([dir, file])
  t.is(fs.existsSync(dir), false)
  t.is(fs.existsSync(file), false)
})
