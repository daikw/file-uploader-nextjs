import { useState } from 'react'
import Layout from '../components/Layout'

const IndexPage = () => {
  const [file, setFile] = useState(null)

  const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0]
      setFile(i)
    }
  }

  const uploadToServer = async () => {
    const body = new FormData()
    body.append('file', file)
    await fetch('/api/files', { method: 'POST', body })
  }

  return (
    <Layout title="Home | File Uploader">
      <p>
        <input type="file" name="file" onChange={uploadToClient} />
        <button className="btn btn-primary" type="submit" onClick={uploadToServer}>
          upload
        </button>
      </p>
    </Layout>
  )
}

export default IndexPage
