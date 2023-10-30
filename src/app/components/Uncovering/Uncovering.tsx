import styles from './Uncovering.module.css';
import Image from 'next/image';

import uncoveringHero from '@/assets/imgs/uncoveringBackground.png';

import { loraFont } from '@/app/fonts';

const Uncovering = () => {
    return (
        <section className={styles.uncovering}>
            <Image src={uncoveringHero} className={styles.uncoveringBackgroundImage} alt="Image of a person using a laptop's keyboard used as a background" />
            <div className={styles.uncoveringContentContainer}>
                
                <header className={styles.uncoveringContentHeader}>
                    <h2 className={`${loraFont.className} ${styles.uncoveringContentHeaderTitle}`} >
                        <span className={styles.uncoveringContentHeaderTitleBold} >UNCOVERING</span> Hidden Challenges
                    </h2>
                </header>
                <div className={styles.uncoveringContentTextContainer} >
                    <p className={styles.uncoveringContentText}>
                        {"Explore a new level of Amazon listing optimization. While things may appear fine, our thorough analysis reveals hidden challenges—from missed keywords to off-target visuals. Turn these challenges into opportunities. We craft captivating storefronts that boost customer loyalty and drive exploration. Partner with us to lead in the marketplace."}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Uncovering;