import styles from './Amplify.module.css';

import Image from 'next/image';
import { loraFont } from '@/app/fonts';

import amplifyHero from '@/assets/imgs/amplifyBackground.png';

const Amplify = () => {
    return (
        <section id='amplify' className={styles.amplify}>
            <section className={`${loraFont.className} ${styles.amplifyContent}`}>
                <h2 className={styles.amplifyContentTitle}>
                    <span className={styles.amplifyContentTitleBold}>Amplifying</span><br />
                    {" your Brand's Prescence"}
                </h2>
                <p className={styles.amplifyContentText}>
                    Experience true brand elevation on Amazon with us. Beyond just sales, we craft a lasting presence using data-driven strategies and innovative marketing. Let your products shine among competitors. Join us, captivate audiences, and start your rise to prominence.
                </p>
            </section>
            <section className={styles.amplifyImageContainer}>
                <Image className={styles.amplifyImage} src={amplifyHero} alt="Amplify Hero" />
            </section>
        </section>
    );
};

export default Amplify;