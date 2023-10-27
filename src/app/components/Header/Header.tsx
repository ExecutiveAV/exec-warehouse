import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <section className={styles.logoContainer}>
        <h1 className={styles.logoTitle}>
            <span className={styles.logoTitleBold}>Exec Warehouse</span>
        </h1>
        <hr className={styles.logoUnderline} />
      </section>
      <nav className={styles.mainNav}>
        <Link href="/#AboutUs" className={styles.navLink}>About Us</Link>
        <Link href="/#OurServices" className={styles.navLink}>Our Services</Link>
        <Link href="/#ContactUs" className={styles.navLink}>Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
