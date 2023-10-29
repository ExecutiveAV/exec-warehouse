import styles from './main.module.css';

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Uncovering from './components/Uncovering/Uncovering';
import Amplify from './components/Amplify/Amplify';
import Crafting from './components/Crafting/Crafting';

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
      {/* <Elevate />
      <Bumper />
      <AboutUs />
      <ContactUs />
      <Bumper /> */}
    </main>
  );
};