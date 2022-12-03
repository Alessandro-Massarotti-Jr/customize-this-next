import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { baseColors } from '../config/baseColorsConfig'
import styles from "../styles/Home.module.css"
import { Icon } from '@iconify/react';
import ColorCard, { ColorCardPropsInterface } from '../components/ColorCard'

export default function Home() {

  const colorCards: ColorCardPropsInterface[] = [
    {
      title: "Cor primaria",
      currentColor: baseColors.primary,
      originalColor: baseColors.primary
    },
    {
      title: "Cor secundaria",
      currentColor: baseColors.secondary,
      originalColor: baseColors.secondary
    },
    {
      title: "Cor terciaria",
      currentColor: baseColors.terciary,
      originalColor: baseColors.terciary
    },
    {
      title: "Cor texto",
      currentColor: baseColors.text,
      originalColor: baseColors.text
    },
    {
      title: "Cor retoques",
      currentColor: baseColors.acents,
      originalColor: baseColors.acents
    }
  ]

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta name="description" content="customize this site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.home}>
        <section className={styles.banner} style={{ backgroundImage: `linear-gradient(to Left,${baseColors.acents},45%,${baseColors.secondary})` }}>
          <Icon color={baseColors.text} width={200} height={200} icon="icon-park-outline:code-computer" />
        </section>
        <section className={styles.info} style={{ backgroundColor: baseColors.secondary }}>
          <h1 style={{ color: baseColors.text }}>Se estiver autenticado é possivel <span style={{ backgroundImage: `linear-gradient(to Left,${baseColors.text},45%,${baseColors.acents})` }} className={styles.info__keyword}>Customizar</span> este site!</h1>
        </section>
        <section className={styles.colorsCards} style={{ backgroundColor: baseColors.terciary }}>

          {
            colorCards.map((colorCard) => {
              return <ColorCard key={colorCard.title} title={colorCard.title} currentColor={colorCard.currentColor} originalColor={colorCard.originalColor} />
            })
          }

        </section>
        <section className={styles.endBanner} style={{ backgroundImage: `linear-gradient(to Right,${baseColors.acents},45%,${baseColors.secondary})` }}>
          <Icon color={baseColors.text} width={200} height={200} icon="material-symbols:code-blocks-outline" />
        </section>
      </main>
      <Footer />
    </>
  )
}
