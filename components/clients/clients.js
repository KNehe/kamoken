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
                        <p>Spotlight on Africa-Uganda Foundation</p>
                    </div>
                    <div className={styles.client}>
                        <p>Mbale Foam Ltd</p>
                    </div>
                    <div className={styles.client}>
                        <p>St. Francis Secondary School for the Blind</p>
                    </div>
                </div>
                            
                <div className={styles.client_group}>
                    <div className={styles.client}>
                        <p>Ngora Cooperatives Savings &amp; Credit Society Ltd</p>
                    </div>
                    <div className={styles.client}>
                        <p>Sipi River Lodge Ltd</p>
                    </div>
                    <div className={styles.client}>
                        <p>Kaguma Development Organisation (KADO)</p>
                    </div>
                </div>
            
            </div>

        </section>
    )

}

export default Clients;