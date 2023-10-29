import styles from './Uncovering.module.css';
import Image from 'next/image';

import uncoveringHero from '@/assets/imgs/uncoveringBackground.png';

import { loraFont } from '@/app/fonts';

const Uncovering = () => {
    return (
        <section className={styles.uncovering}>
            <header className={styles.header}>
                <h2 className={`${loraFont.className} ${styles.headerText}`} >
                    <span className={styles.headerTextBold} >UNCOVERING</span> Hidden Challenges
                </h2>
            </header>
            <section className={styles.content}>
                <Image src={uncoveringHero} className={styles.contentBackgroundImage} alt="Image of a person using a laptop's keyboard used as a background" />
                <div className={styles.contentContainer}>
                    <div className={styles.contentTextContainer} >
                        <p className={styles.contentText}>
                            {"Step into a new realm of optimization for your Amazon listings. At first glance, everything might seem in order, but what lies beneath? Our meticulous analysis dives deep, surfacing those elusive issues - from overlooked keywords to visuals that don't quite hit the mark. These aren't just challenges; they're untapped opportunities waiting to be harnessed. Concurrently, we design optimized storefronts that not only captivate your loyal customers but also foster brand allegiance, encouraging them to explore more of what you offer. Partner with us and unlock the full potential of your brand, ensuring you not only compete but lead in the marketplace."}
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Uncovering;