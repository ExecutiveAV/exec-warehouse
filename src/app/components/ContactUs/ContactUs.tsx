import styles from './ContactUs.module.css';

import Image from 'next/image';
import { loraFont, permanentMarkerFont } from '@/app/fonts';

import ContactUsBackground from '@/assets/imgs/contactUsBackground.png';
import ContactUsBackgroundM from '@/assets/imgs/contactUsBackgroundM.png';

const ContactUs = () => {
    return (
        <section className={`${styles.contactUs} ${loraFont.className}`}>
            <section className={styles.contactUsHeader}>
                <h2 className={`${styles.contactUsHeaderTitle} ${permanentMarkerFont.className}`}>CONTACT US</h2>
            </section>
            <section className={styles.contactUsImageContainer}>
                <Image src={ContactUsBackground} alt="Contact Us Background" className={styles.contactUsImage} />
                <Image src={ContactUsBackgroundM} alt="Contact Us Background" className={styles.contactUsImageM} />
            </section>
            <section className={styles.contactUsFormContainer} >
                <form className={styles.contactUsForm} >

                    <h3 className={`${styles.contactUsFormTitle} `} >{"Interested in working with us? "}</h3>

                    <section className={styles.contactUsFormNameContainer} >    
                        <section className={styles.contactUsFormLabelContainer} >    
                            <input className={styles.contactUsFormInput} type="text" id="firstName" name="firstName" />
                            <label className={styles.contactUsFormLabel} htmlFor="firstName" >First Name</label>
                        </section>
                        <section className={styles.contactUsFormLabelContainer} >    
                            <input className={styles.contactUsFormInput} type="text" id="lastName" name="lastName" />
                            <label className={styles.contactUsFormLabel} htmlFor="lastName" >Last Name</label>
                        </section>
                    </section>

                    <input className={styles.contactUsFormInput} type="email" id="email" name="email" />
                    <label className={styles.contactUsFormLabel} htmlFor="email" >E-mail Address</label>
                    
                    <label className={`${styles.contactUsFormLabel} ${styles.previousSellerLabel}`} htmlFor="previousSellerContainer" >Are you a previous seller?</label><br className={styles.previousSellerLabelBreak} />
                    <section className={styles.contactUsFormPreviousSellerContainer} >
                        <div className={styles.contactUsFormPreviousSellerInputContainer} >
                            <input className={styles.contactUsFormPreviousSellerInput} type="radio" id="previousSellerYes" name="previousSeller" value="previousSellerYes" />
                            <label className={styles.contactUsFormPreviousSellerLabelSquare} htmlFor="previousSellerYes" ></label>
                            <label className={styles.contactUsFormPreviousSellerLabel} htmlFor="previousSellerYes" >Yes</label>
                        </div>
                        <div className={styles.contactUsFormPreviousSellerInputContainer} >
                            <input className={styles.contactUsFormPreviousSellerInput} type="radio" id="previousSellerNo" name="previousSeller" value="previousSellerNo" />
                            <label className={styles.contactUsFormPreviousSellerLabelSquare} htmlFor="previousSellerNo" ></label>
                            <label className={styles.contactUsFormPreviousSellerLabel} htmlFor="previousSellerNo" >No</label>
                        </div>
                    </section>
                    <label className={styles.contactUsFormLabel} htmlFor="message" >Message:</label>
                    <textarea className={styles.contactUsFormMessage} id="message" name="message" />
                    <button className={`${styles.contactUsFormButton} `} type="submit" >Submit</button>
                </form>
                <div className={styles.contactUsRibbon} />  
            </section>
        </section>
    );
};

export default ContactUs;