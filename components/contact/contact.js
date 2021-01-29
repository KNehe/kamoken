import { useState } from 'react';
import styles from '../../styles/contact.module.scss'
import ProgressIndicator from '../progress_indicator/progress_indicator'

export default function Contact(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorStyles, setErrorStyles] = useState({
        name: false,
        email: false,
        message: false
    });

    const [message, setMessage] = useState({
        type: '',
        value: ''
    });

    const [isSendingEmail, setIsSendingEmail] = useState(false)

    const onInputChangedHandler = (event,field) =>{        
        const value = event.target.value;

        switch(field){
            case 'name':
                setFormData({...formData,name:value})
                break;
            case 'email':
                setFormData({...formData,email:value})
                break;
            case 'message':
                setFormData({...formData,message:value})
                break;
        }
        
    }

    const isEmailValid = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateForm = () =>{
        if(!formData.name.trim() && !formData.email.trim() && !formData.message.trim()){
            setMessage({type:'error', value:'All fields are required'})
            setErrorStyles({name:true, email:true, message: true});
            return false;
        }

        if(!formData.name.trim() && !formData.email.trim()){
            setMessage({type:'error', value:'Name and email are required'})
            setErrorStyles({name:true, email:true});
            return false;

        }

        if(!formData.name.trim() &&  !formData.message.trim()){
            setMessage({type:'error', value:'Name and message are required'})
            setErrorStyles({name:true, message:true});
            return false;
        }

        if(!formData.email.trim() && !formData.message.trim()){
            setMessage({type:'error', value:'Email and message are required'})
            setErrorStyles({email:true, message: true});
            return false;
        }

        if(!formData.name.trim()){
            setMessage({type:'error', value:'Name is required'})
            setErrorStyles({name:true});
            return false;
        }

        if(!formData.email.trim()){
            setMessage({type:'error', value:'Email is required'})
            setErrorStyles({email:true});
            return false;
        }

        if(!formData.message.trim()){
            setMessage({type:'error', value:'Message is required'})
            setErrorStyles({message:true});
            return false;
        }

        if(!isEmailValid(formData.email)){
            setMessage({type:'error', value:'Invalid email'})
            setErrorStyles({email:true});
            return false;
        }

        setMessage({type:'error', value:''});
        return true;       

    }
    
    const hideMessageAfter5Seconds = ()=>{
        setTimeout(()=>{
            setMessage({type:'success', value:''})
        },5000);
    }

    const onFormSubmittedHandler = event =>{
        event.preventDefault();

        if(validateForm()){
            setIsSendingEmail(true)
            setMessage({type:'success', value:'Email sent'})
            // TODO send data to server
            setIsSendingEmail(false);
            hideMessageAfter5Seconds();
            setFormData({name:'',email:'',message:''})
            setErrorStyles({name:false, email:false, message: false});

        }
    }

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
                <div className={styles.message}>
                    {
                      message.value?
                      <p className={ message.type === 'success' ? styles.success_message: styles.error_message}>
                        {message.value}
                      </p>
                      : null
                    }
                </div>
             
                <form>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        id='name'
                        value={formData.name}
                        onChange={(event) => onInputChangedHandler(event,'name')}
                        style={ { borderBottom: errorStyles.name? '2px solid red' : ''}}
                    />
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        id='email'
                        value={formData.email}
                        onChange={(event) => onInputChangedHandler(event,'email')}
                        style={ { borderBottom: errorStyles.email? '2px solid red' : ''}}

                    />
                    <label htmlFor='message'>Message</label>
                    <textarea 
                        cols='10' 
                        rows = '5' 
                        id='message'
                        value={formData.message}
                        onChange={(event) => onInputChangedHandler(event,'message')}
                        style={ { border: errorStyles.message? '2px solid red' : ''}}
                        >
                    </textarea>
                    <button onClick={onFormSubmittedHandler}>
                        {
                            isSendingEmail?
                            <ProgressIndicator/>
                            :
                            'Send Message'
                        }
                        </button>
                </form>
            </div>
           
        </div>

    </section>
    )
}