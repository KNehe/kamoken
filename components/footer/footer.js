import styles from '../../styles/footer.module.scss'

export default function footer(){
    const currentYear = new Date().getFullYear();
    return(
        <section className={styles.section_footer}>
            <p>&copy; KAMOKEN Certified Public Accountant {currentYear}</p>
        </section>
    )
}