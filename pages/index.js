import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'
import Services from '../components/services/services'
import Clients from '../components/clients/clients'
import About from '../components/about/about'
import Contact from '../components/contact/contact'
import  Footer from '../components/footer/footer'


export default function Home({ API_END_POINT }) {

  const init_ul_sm_styles = {
    transform:'translateY(-300px)',
    transition: 'opacity 1s',
    opacity:'0',
  }

  const [getUlSmStyles,setUlSmStyles] = useState(init_ul_sm_styles);
  
  const [isUlSmVisible,setUlSmVisibilty] = useState(false);
 
  const onHumbergerIconClickedHandler = event =>{
    event.preventDefault();

    setUlSmVisibilty(!isUlSmVisible)
    
    const show_ul_sm_styles = {
      transform:'translateY(20px)',
      transition: 'opacity 1s',
      opacity:'1'
    }

    setUlSmStyles(getUlSmStyles.transform === 'translateY(-300px)'? show_ul_sm_styles : init_ul_sm_styles)

  }

  const onLinkClickedHandler = (event,linkId) =>{
    event.preventDefault();

    const id = linkId.replace('#','');
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  }

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
                  <li onClick={(event)=> onLinkClickedHandler(event,'#about')}><a>About</a></li>
                  <li onClick={(event)=> onLinkClickedHandler(event,'#services_grid')}><a>Services</a></li>
                  <li onClick={(event)=> onLinkClickedHandler(event,'#clients')}><a>Clients</a></li>
                  <li onClick={(event)=> onLinkClickedHandler(event,'#contact')}><a>Contact</a></li>
                </ul>
            </nav>

            <nav className={styles.navbar_sm}>

               <div className={styles.group}>
                  <div className={styles.title}>
                    <img src="" alt='alt logo'/>
                    <a>KAMOKEN</a>
                  </div>

                  <div
                      className={styles.humberger_icon}
                      onClick={onHumbergerIconClickedHandler}
                       >
                        {!isUlSmVisible?
                        <>
                    <div className={styles.first_line}></div>
                    <div className={styles.second_line}></div>
                    <div className={styles.third_line}></div>
                    </>:
                    <div className={styles.close}>x</div>
                    }
                  </div>
               </div>

               <ul 
                  className={styles.ul_sm} 
                  style={getUlSmStyles}
                  >
                  <li onClick={(event)=> onLinkClickedHandler(event,'#about')}><a>About</a></li>
                  <li onClick={(event)=> onLinkClickedHandler(event,'#services_grid')}><a>Services</a></li>
                  <li onClick={(event)=> onLinkClickedHandler(event,'#clients')}><a>Clients</a></li>
                  <li onClick={(event)=> onLinkClickedHandler(event,'#contact')}><a>Contact</a></li>
                </ul>

            </nav>
            
            <div className={styles.intro_group}>
              <div className={styles.intro_text}>

                <p className={styles.intro_txt_lg}>WE FOCUS ON</p>

                <p className={styles.intro_txt_lg}>YOUR FINANCIAL STABILITY</p>

                <p  className={styles.intro_txt_sm}>Let's do the maths together</p>
                
              </div> 
            
              <a className={styles.intro_btn}  onClick={(event)=> onLinkClickedHandler(event,'#services_grid')}>
                <span>Learn more &gt;</span>
              </a>
            </div>
        </div>
      
      </section>     
      
      <Services/>

      <Clients/>

      <About/>

      <Contact API_END_POINT={ API_END_POINT }/>

      <Footer/>
    </>
   
  )
}

export async function getStaticProps(){

  const API_END_POINT = process.env.API_END_POINT;

  return {
      props: { API_END_POINT }
  }
}


