import { GetStaticProps } from 'next'
import Link from 'next/link'

import { File, listFiles } from '../../interfaces'
// import { sampleFileData } from '../../utils/sample-data'

import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: File[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Files List | Next.js + TypeScript Example">
    <h1>Files List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /files</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items = await listFiles()
  return { props: { items } }
}

export default WithStaticProps
