import styles from '../../styles/contact.module.scss'

export default function Contact(){
    return(
        <section className={styles.contact_section} id='contact'>

        <div className={styles.section_title}>
           <h1 className={styles.title_text}>Contact</h1>
        </div>

        <div className={styles.contact_grid}>

            <div className={styles.contact_info}>
                <h2>Contact Information</h2>
                <p> Tel: +256 777 558 984</p>
                <p> Tel: +256 703 554 884</p>
                <p> Email: Ken.kamo@yahoo.com</p>
            </div>

            <div className={styles.contact_form}>
                <form>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name'/>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email'/>
                    <label htmlFor='message'>Message</label>
                    <textarea cols='10' rows = '5' id='message'>
                    </textarea>
                    <button>Send Message</button>
                </form>
            </div>
           
        </div>

    </section>
    )
}