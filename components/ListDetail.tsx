import * as React from 'react'

import { File } from '../interfaces'

type ListDetailProps = {
  item: File
}

const ListDetail = ({ item: file }: ListDetailProps) => {
  return (
    <div>
      <h1>Detail for {file.name}</h1>
      <p>ID: {file.id}</p>
      <a href={`/api/files/${file.id}`}>Download</a>
    </div>
  )
}

export default ListDetail
