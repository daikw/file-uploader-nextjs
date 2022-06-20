import fs from 'fs'
import stream from 'stream'
import { promisify } from 'util'
const pipeline = promisify(stream.pipeline)

import { NextApiRequest, NextApiResponse } from 'next'

// import { sampleFileData } from '../../../utils/sample-data'
import { listFiles } from '../../../interfaces'

const application_directory = '/Users/daikiwaranabe/ghq/ssh-gitlab.akerun.com/misc/file-uploader-nextjs'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const files = await listFiles()
  const item = files.find((data) => data.id === req.query.id)
  if (!item) {
    res.status(404).json({ statusCode: 404, message: 'file not found' })
    return
  }

  try {
    const filePath = `${application_directory}/_uploaded_files/${item.name}`
    const fileBuffer = fs.createReadStream(filePath)

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `attachment; filename=${item.name}`)
    await pipeline(fileBuffer, res)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
