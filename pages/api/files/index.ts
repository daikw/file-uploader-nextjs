import { NextApiRequest, NextApiResponse } from "next"
import { sampleFileData } from "../../../utils/sample-data"

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleFileData)) {
      throw new Error("Cannot find file data")
    }

    res.status(200).json(sampleFileData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
