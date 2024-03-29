import styles from '../../styles/services.module.scss'
import ServicesData from '../../db/service_repo';
import Service from './service';

const Services = ()=>{
    
    const services = ServicesData.map( service =>
        <Service
            key={service.id}
            serviceTitle={service.serviceTitle}
            serviceDescription={service.serviceDescription} 
            imageSrc={service.imageSrc}
            imageAlt = {service.imageAlt}
        />
        );

 return (
     <>
     <section className={styles.services_section} id='services_grid'>

         <div className={styles.section_title}>
            <h2 className={styles.title_text}>Services</h2>
         </div>

         <div className={styles.services_grid}>
             {services}
         </div>

     </section>
     </>
 )
}

export default Services;