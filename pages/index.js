import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'
import Services from '../components/services/services'
import Clients from '../components/clients/clients'
import About from '../components/about/about'
import Contact from '../components/contact/contact'
import  Footer from '../components/footer/footer'
import {useSpring,animated} from 'react-spring'

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

    if(isUlSmVisible){
      setUlSmVisibilty(false);
      setUlSmStyles(init_ul_sm_styles);
    }
  }

  const animation1 = useSpring({opacity: 1, from: {opacity: 0, transition: '.1s'}})
  const animation2 = useSpring({opacity: 1, from: {opacity: 0, transition: '.2s'}})
  const animation3 = useSpring({opacity: 1, from: {opacity: 0, transition: '.8s'}})

  return (
    <>
      <Head>
        <title>KAMOKEN Certified Public Accountants</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kamoken is a fast growing financial services firm run by professionally qualified Accountants. The firm was first established in April, 2011 under the name KAMOKEN Certified Public Accountant, Auditor and Consultant. The firm helps its clients build value, manage risks and improve their performance. The firm offers high quality service to clients and has demonstrated its capability in carrying out effectively a wide variety of audit, consultancy, and other related professional services."/>
        <meta name="keywords" content="Certified Public Accountant,KAMOKEN, Audit, Taxation, Consultancy, Financial Management, Human Resource management and recruitment,Restructuring, Accountant, Kenan Kamolu, CPA, ICPA"/>
        <meta name="author" content="Kenan Kamolu, Co-authored by Nehemiah Kamolu"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/* Twitter card */}
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:image" content='https://res.cloudinary.com/nehe/image/upload/v1616868127/KAMOKEN/KAMOKEN_screenshot_sr6jqc.png'></meta>
        <meta name="twitter:image:alt" content='KAMOKEN landing page'></meta>
        <meta name="twitter:title" content='KAMOKEN Certified Public Accountant'></meta>
        <meta name="twitter:description" content='Kamoken is a fast growing financial services firm run by professionally qualified Accountants. The firm helps its clients build value, manage risks and improve their performance and has demonstrated its capability in carrying out effectively a wide variety of audit, consultancy, and other related professional services.'></meta>
        <meta name="twitter:url" content='https://kamoken.org/'></meta>
        {/* Open graph */}
        <meta property='og:title'  content='KAMOKEN Certified Public Accountant'/>
        <meta property='og:image' content='https://res.cloudinary.com/nehe/image/upload/v1616868127/KAMOKEN/KAMOKEN_screenshot_sr6jqc.png'/>
        <meta property='og:description' content='Kamoken is a fast growing financial services firm run by professionally qualified Accountants. The firm helps its clients build value, manage risks and improve their performance and has demonstrated its capability in carrying out effectively a wide variety of audit, consultancy, and other related professional services.'/>
        <meta property='og:url' content='https://kamoken.org/'/>
        <meta property='og:type' content='website' />
      </Head>
      
      <main>
        
        <section className={styles.landing_section}>

          <div className={styles.landing_section_img}></div>

            <div className={styles.landing_section_inner}>

              <nav className={styles.navbar_lg}>

                  <div className={styles.title}>
                    <img src="./logo.svg" alt='KAMOKEN logo'/>
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
                      <img src="./logo.svg" alt='KAMOKEN logo'/>
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
                  <animated.p style={animation1} className={styles.intro_txt_lg}>
                    WE FOCUS ON
                  </animated.p>

                  <animated.h1 style={animation2} className={styles.intro_txt_lg}>
                  YOUR FINANCIAL STABILITY
                  </animated.h1>
                  
                  <animated.p  style={animation3} className={styles.intro_txt_sm}>
                    Let's do the maths together
                  </animated.p>
                  
                </div> 
              
                <animated.a style={animation3}className={styles.intro_btn}  onClick={(event)=> onLinkClickedHandler(event,'#services_grid')}>
                  <span>Learn more &gt;</span>
                </animated.a>
              </div>
          </div>
        
        </section>     
        
        <Services/>

        <Clients/>

        <About/>

        <Contact API_END_POINT={ API_END_POINT }/>

        </main>
      
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


