import React from 'react'
import Link from 'next/link'

import { File } from '../interfaces'

type Props = {
  data: File
}

const ListItem = ({ data }: Props) => (
  <Link href="/files/[id]" as={`/files/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
