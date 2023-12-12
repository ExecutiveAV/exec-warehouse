import styles from './Crafting.module.css';

import Image from 'next/image';
import { loraFont } from '@/app/fonts';

import craftingBackground from '@/assets/imgs/craftingBackground.png';
import craftingBackgroundM from '@/assets/imgs/craftingBackgroundM.png';

const Crafting = () => {
  return (
    <section className={`${styles.crafting} ${loraFont.className}`}>
        <header className={styles.craftingHeader}>
            <h2 className={styles.craftingTitle}>Crafting <span className={styles.craftingTitleBold}>CONTENT that</span> Connects</h2>
            <p className={styles.craftingDescription}>
            {"Transform your Amazon listings from mere views to memorable experiences. Our team crafts content that captivates and resonates. Elevate your brand's connection and turn viewers into loyal customers. Begin your journey to success with us."}
            </p>
        </header>
        <section className={styles.craftingImageContainer}>
            <Image src={craftingBackground} alt="Image of photography used as a background" className={styles.craftingImage} style={{backgroundPositionY: "50px"}} />
            <Image src={craftingBackgroundM} alt="Image of photography used as a background for mobile phones or landscapes displays" className={styles.craftingImageM} style={{backgroundPositionY: "50px"}} />
        </section>
    </section>
  );
};

export default Crafting;