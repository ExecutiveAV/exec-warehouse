import styles from './main.module.css';

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Uncovering from './components/Uncovering/Uncovering';
import Amplify from './components/Amplify/Amplify';
import Crafting from './components/Crafting/Crafting';
import Elevate from './components/Elevate/Elevate';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Landing />
      <hr className={styles.mainBumper} />
      <Uncovering />
      <Amplify />
      <hr className={styles.mainBumper} />
      <Crafting />
      <Elevate />
      <hr className={styles.mainBumper} />
      <AboutUs />
      <ContactUs />
      <hr className={styles.mainBumper} />
    </main>
  );
};