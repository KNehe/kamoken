import styles from "../../styles/clients.module.scss";

const Clients  = () =>{

    return (

        <section className={styles.clients_section}>

            <div className={styles.section_title}>
            <h1 className={styles.title_text}>Some of our clients</h1>
            </div>

            <div className={styles.clients_grid}>
                
                <div className={styles.client_group}>
                    <div className={styles.client}> 
                        <p>Company A very long name</p>
                    </div>
                    <div className={styles.client}>
                        <p>Hotel  C</p>
                    </div>
                    <div className={styles.client}>
                        <p>School  D</p>
                    </div>
                </div>
                            
                <div className={styles.client_group}>
                    <div className={styles.client}>
                        <p>Bank B</p>
                    </div>
                    <div className={styles.client}>
                        <p>School  D</p>
                    </div>
                    <div className={styles.client}>
                        <p>School  D</p>
                    </div>
                </div>
            
            </div>

        </section>
    )

}

export default Clients;