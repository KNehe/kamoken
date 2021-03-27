import styles from '../../styles/about.module.scss'
import { aboutUs } from '../../db/about_repo';

const About = ()=>{

   
    return (
        <section className={styles.about_section} id='about'>

            <div className={styles.section_title}>
                <h2 className={styles.title_text}>About</h2>
            </div>

            <div className={styles.about_div}>
               {aboutUs}
            </div>
        </section>

    )
}
export default About;