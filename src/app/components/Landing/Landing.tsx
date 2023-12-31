'use client'
import { marcellusFont, permanentMarkerFont } from '@/app/fonts';

import HeroImage from '@/assets/imgs/hero.png';
import UncoveringLink from '@/assets/imgs/uncoveringLink.png';
import AmplifyLink from '@/assets/imgs/amplifyLink.png';
import ElevateLink from '@/assets/imgs/elevateLink.png';
import CraftingLink from '@/assets/imgs/craftingLink.png';

import styles from './Landing.module.css';

import Image from 'next/image';

const Landing = () => {
    return (
        <section className={styles.landing} >
            <Image className={styles.hero} src={HeroImage} alt="Hero Image of a neat warehouse" />
            <section className={styles.cards} >
                <section onClick={() => {
                const element = document.getElementById('uncovering');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }} className={`${styles.card} ${marcellusFont.className}`}>
                    <Image className={styles.cardImage} src={UncoveringLink} alt="Uncovering Link" />
                    <p className={styles.cardTitle} >UNCOVERING CHALLENGES</p>
                </section>
                <section onClick={() => {
                const element = document.getElementById('amplify');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }} className={`${styles.card} ${marcellusFont.className}`}>
                    <Image className={styles.cardImage} src={AmplifyLink} alt="Amplify Link" />
                    <p className={styles.cardTitle} >AMPLIFY YOUR BRANDS PRESENCE</p>
                </section>
                <section onClick={() => {
                const element = document.getElementById('elevate');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }} className={`${styles.card} ${marcellusFont.className}`}>
                    <Image className={styles.cardImage} src={ElevateLink} alt="Elevate Link" />
                    <p className={styles.cardTitle} >ELEVATE WITH EXCLUSIVITY</p>
                </section>
                <section onClick={() => {
                const element = document.getElementById('crafting');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }} className={`${styles.card} ${marcellusFont.className}`}>
                    <Image className={styles.cardImage} src={CraftingLink} alt="Crafting Link" />
                    <p className={styles.cardTitle} >CRAFTING CONTENT THAT CONNECTS</p>
                </section>
            </section>
            <footer className={styles.footer}>
                <p className={`${marcellusFont.className} ${styles.footerText}`} >A <span className={`${permanentMarkerFont.className} ${styles.footerTextBold}`} >PARTNERSHIP</span> <br />WITH US</p>
            </footer>
            
        </section>
    );
};

export default Landing;