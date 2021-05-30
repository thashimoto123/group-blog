import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useArticles from '../hooks/use-articles'

export default function Home() {
  const { articles, loading } = useArticles()
  return (
    <div className={styles.container}>
      <Head>
        <title>Hashimoto&apos;s Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading ?
          <div>loading...</div> :
          <ul>
            {
              articles.map(article => (
                <li key={article.id}>{article.title}</li>
              ))
            }
          </ul>
      }

    </div>
  )
}
