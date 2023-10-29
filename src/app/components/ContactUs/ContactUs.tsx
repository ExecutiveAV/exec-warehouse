import styles from './ContactUs.module.css';

import Image from 'next/image';
import { loraFont, permanentMarkerFont } from '@/app/fonts';

import ContactUsBackground from '@/assets/imgs/contactUsBackground.png';

const ContactUs = () => {
    return (
        <section className={`${styles.contactUs} ${loraFont.className}`}>
            <section className={styles.contactUsHeader}>
                <h2 className={`${styles.contactUsHeaderTitle} ${permanentMarkerFont.className}`}>CONTACT US</h2>
            </section>
            <section className={styles.contactUsBody}>
                <section className={styles.contactUsBodyImageContainer}>
                    <Image src={ContactUsBackground} alt="Contact Us Background" className={styles.contactUsBodyImage} />
                </section>
                <section className={styles.contactUsBodyFormContainer} >
                    <form className={styles.contactUsBodyForm} >
                        <h3 className={`${styles.contactUsBodyFormTitle} `} >{"Interested in working with us? "}</h3>
                        <section className={styles.contactUsBodyFormNameContainer} >    
                            <section className={styles.contactUsBodyFormLabelContainer} >    
                                <input className={styles.contactUsBodyFormInput} type="text" id="firstName" name="firstName" />
                                <label className={styles.contactUsBodyFormLabel} htmlFor="firstName" >First Name</label>
                            </section>
                            <section className={styles.contactUsBodyFormLabelContainer} >    
                                <input className={styles.contactUsBodyFormInput} type="text" id="lastName" name="lastName" />
                                <label className={styles.contactUsBodyFormLabel} htmlFor="lastName" >Last Name</label>
                            </section>
                        </section>
                        <input className={styles.contactUsBodyFormInput} type="email" id="email" name="email" />
                        <label className={styles.contactUsBodyFormLabel} htmlFor="email" >E-mail Address</label>
                        <label className={`${styles.contactUsBodyFormLabel} ${styles.previousSellerLabel}`} htmlFor="previousSellerContainer" >Are you a previous seller?</label><br />
                        <section className={styles.contactUsBodyFormPreviousSellerContainer} >
                            <div className={styles.contactUsBodyFormPreviousSellerInputContainer} >
                                <input className={styles.contactUsBodyFormPreviousSellerInput} type="radio" id="previousSellerYes" name="previousSeller" value="previousSellerYes" />
                                <label className={styles.contactUsBodyFormPreviousSellerLabelSquare} htmlFor="previousSellerYes" ></label>
                                <label className={styles.contactUsBodyFormPreviousSellerLabel} htmlFor="previousSellerYes" >Yes</label>
                            </div>
                            <div className={styles.contactUsBodyFormPreviousSellerInputContainer} >
                                <input className={styles.contactUsBodyFormPreviousSellerInput} type="radio" id="previousSellerNo" name="previousSeller" value="previousSellerNo" />
                                <label className={styles.contactUsBodyFormPreviousSellerLabelSquare} htmlFor="previousSellerNo" ></label>
                                <label className={styles.contactUsBodyFormPreviousSellerLabel} htmlFor="previousSellerNo" >No</label>
                            </div>
                        </section>
                        <label className={styles.contactUsBodyFormLabel} htmlFor="message" >Message</label>
                        <textarea className={styles.contactUsBodyFormMessage} id="message" name="message" />
                        <button className={`${styles.contactUsBodyFormButton} `} type="submit" >Submit</button>
                    </form>
                    <div className={styles.contactUsBodyRibbon} />  
                </section>
            </section>
        </section>
    );
};

export default ContactUs;