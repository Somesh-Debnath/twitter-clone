import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


     <main className="bg-black min-h-screen flex max-w-[1500px]">
      <Sidebar/>
      <Feed/>
     </main>
     
    </div>
  )
}

export default Home
