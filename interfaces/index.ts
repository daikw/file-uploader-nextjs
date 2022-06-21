// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { File } from 'path/to/interfaces';

import fs from 'fs'
import { promisify } from 'util'
const mkdirAsync = promisify(fs.mkdir)
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

import formidable from 'formidable'

import { random_alphanumeric } from '../utils/random'
import { upload_directory } from '../utils/env'

export type File = {
  id: string
  name: string
}

const metafile_path = `${upload_directory}/files.json`

const ensureMetaFile = async () => {
  if (!fs.existsSync(upload_directory)) {
    await mkdirAsync(upload_directory)
  }

  if (!fs.existsSync(metafile_path)) {
    await writeFileAsync(metafile_path, '[]')
  }
}

// TODO: avoid race condition
export const listFiles = async (): Promise<File[]> => {
  await ensureMetaFile()

  const buf = await readFileAsync(metafile_path, { encoding: 'utf-8' })
  return JSON.parse(buf) as File[]
}

// TODO: avoid race condition
export const saveFile = async (incoming: formidable.File | formidable.File[]): Promise<File> => {
  await ensureMetaFile()

  const isArray = (item: any): item is formidable.File[] => item.length > 0
  if (isArray(incoming)) {
    throw new Error('incoming multiple files is not supported')
  }

  const file = { id: random_alphanumeric(5), name: incoming.originalFilename }
  const data = await readFileAsync(incoming.filepath)
  await writeFileAsync(`${upload_directory}/${file.name}`, data)

  const files = await listFiles()
  files.push(file)
  await writeFileAsync(metafile_path, JSON.stringify(files))

  fs.unlinkSync(incoming.filepath)

  return file
}
