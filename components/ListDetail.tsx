import * as React from 'react'

import { File } from '../interfaces'

type ListDetailProps = {
  item: File
}

const ListDetail = ({ item: file }: ListDetailProps) => (
  <div>
    <h1>Detail for {file.name}</h1>
    <p>ID: {file.id}</p>
  </div>
)

export default ListDetail
