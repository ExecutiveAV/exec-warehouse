import styles from './Elevate.module.css';

import Image from 'next/image';
import { loraFont } from '@/app/fonts';

import ElevateBackground from '@/assets/imgs/elevateBackground.png';

const Elevate = () => {
    return (
        <section className={`${styles.elevate} ${loraFont.className}`}>
            <section className={styles.elevateHeader}>
                <hr className={styles.elevateLine} />
                <h1 className={styles.elevateHeaderTitle}><span className={styles.elevateHeaderTitleBold} >Elevate with</span><br />Exclusivity</h1>
            </section>
            
            <section className={styles.elevateImageContainer}>
                <Image src={ElevateBackground} alt="Elevate Background" className={styles.elevateImage} />
            </section>

            <section className={styles.elevateContent}>
                <p className={styles.elevateContentDescription} >{"Forge a unique partnership with us, where your brand is our priority in the vast Amazon landscape. Experience dedicated resources, aligned vision, and unwavering support. By joining us, you're more than just making a choice; you're investing in unmatched expertise. Watch your brand radiate quality and appeal. Start your exclusive journey to success with us."}
                </p>
                <hr className={styles.elevateLine} />
            </section>
        </section>
    );
};

export default Elevate;