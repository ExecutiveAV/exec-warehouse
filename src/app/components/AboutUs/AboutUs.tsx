import styles from './AboutUs.module.css';

import Image from 'next/image';
import { loraFont, permanentMarkerFont } from '@/app/fonts';

import AboutUsBackground from '@/assets/imgs/aboutUsBackground.png';
import AboutUsBackgroundM from '@/assets/imgs/aboutUsBackgroundM.png';

const AboutUs = () => {
    return (
        <section className={`${styles.aboutUs} ${loraFont.className}`}>
            <section className={styles.aboutUsHeader}>
                <h2 className={styles.aboutUsHeaderTitle}>About Us</h2>
            </section>
            <section className={styles.aboutUsContent}>
                <section className={styles.aboutUsContentParagraph}>
                    <p className={styles.aboutUsContentText} >{"You're not just another seller to us. As your personal ally in Amazon wholesale reselling, we see beyond mere products. We're passionate about turning your listings into compelling tales that captivate and convert. Think of us as your dedicated guide in the vast Amazon landscape, ensuring your brand doesn't just fit in, but stands out. Together, we'll demystify e-commerce, harness potential, and lay the groundwork for unparalleled achievements."}</p><br />
                    <p className={styles.aboutUsContentText} >{"Ready for a tailored journey towards transformation and success? You've found your perfect partner."}</p>
                </section>
                <p className={`${styles.aboutUsContentTextBold} ${permanentMarkerFont.className}`} >{"- EXEC WAREHOUSE"}</p>
            </section>
            <section className={styles.aboutUsImageContainer}>
                <Image src={AboutUsBackground} alt="About Us Background" className={styles.aboutUsImage} />
                <Image src={AboutUsBackgroundM} alt="About Us Background" className={styles.aboutUsImageM} />
            </section>
        </section>
    );
};

export default AboutUs;