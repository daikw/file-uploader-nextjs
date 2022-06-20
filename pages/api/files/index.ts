import formidable from 'formidable'
import { NextApiRequest, NextApiResponse } from 'next'

import { listFiles, saveFile } from '../../../interfaces'

export const config = {
  api: {
    bodyParser: false,
  },
}

const handle_get = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const files = listFiles()

    if (!Array.isArray(files)) {
      throw new Error('Cannot find file data')
    }

    res.status(200).json(files)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

const handle_post = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const form = new formidable.IncomingForm()
    form.parse(req, async function (_err, _fields, files) {
      await saveFile(files.file)
      return res.status(201).send('')
    })
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      handle_get(req, res)
      return
    }
    case 'POST': {
      handle_post(req, res)
      return
    }
    default: {
      res.status(405).json({ statusCode: 405, message: 'Only GET/POST requests allowed' })
      return
    }
  }
}

export default handler
