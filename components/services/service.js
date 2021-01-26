import styles from '../../styles/services.module.scss'

const Service = ({ serviceTitle, serviceDescription, imageSrc, imageAlt }) =>{
    return (
        
        <div className={styles.service}>
                <div className={styles.service_header}>
                    <img  src={imageSrc} alt={imageAlt} loading='lazy'/>
                    <h2>{serviceTitle}</h2>
                </div>
                <p className={styles.service_description}>
                    {serviceDescription}
                </p>
        </div>  
    )

}

export default Service;