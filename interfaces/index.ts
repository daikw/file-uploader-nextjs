// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { File } from 'path/to/interfaces';

import fs from 'fs'
import { promisify } from 'util'
const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

import formidable from 'formidable'

import { random_alphanumeric } from '../utils/random'
import { upload_directory } from '../utils/env'

export type File = {
  id: string
  name: string
}

// TODO: avoid race condition
export const listFiles = async (): Promise<File[]> => {
  const buf = await readFileAsync(`${upload_directory}/files.json`, { encoding: 'utf-8' })
  return JSON.parse(buf) as File[]
}

// TODO: avoid race condition
export const saveFile = async (incoming: formidable.File | formidable.File[]): Promise<File> => {
  const isArray = (item: any): item is formidable.File[] => item.length > 0
  if (isArray(incoming)) {
    throw new Error('incoming multiple files is not supported')
  }

  const file = { id: random_alphanumeric(5), name: incoming.originalFilename }
  const data = await readFileAsync(incoming.filepath)
  await writeFileAsync(`${upload_directory}/${file.name}`, data)

  const files = await listFiles()
  files.push(file)
  await writeFileAsync(`${upload_directory}/files.json`, JSON.stringify(files))

  fs.unlinkSync(incoming.filepath)

  return file
}
