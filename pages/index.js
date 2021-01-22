import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>KAMOKEN Certified Public Accountants</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.landing_section}>

        <div className={styles.landing_section_img}></div>

          <div className={styles.landing_section_inner}>

            <nav className={styles.navbar_lg}>

                <div className={styles.title}>
                  <img src="" alt='alt logo'/>
                  <a>KAMOKEN</a>
                </div>

                <ul className={styles.ul_lg}>
                  <li><a>Home</a></li>
                  <li><a>About</a></li>
                  <li><a>Services</a></li>
                  <li><a>Clients</a></li>
                  <li><a>Contact</a></li>
                </ul>
            </nav>

            <div className={styles.intro_text}>

              <p className={styles.intro_txt_lg}>WE FOCUS ON</p>

              <p className={styles.intro_txt_lg}>YOUR FINANCIAL STABILITY</p>

              <p  className={styles.intro_txt_sm}>Let's do the maths together</p>
               
            </div> 
        </div>
      
      </section>     
    </>
   
  )
}


