import styles from './main.module.css';

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Uncovering from './components/Uncovering/Uncovering';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Landing />
      <hr className={styles.mainBumper} />
      <Uncovering />
      {/* <Amplyfy />
      <Bumper />
      <Crafting />
      <Elevate />
      <Bumper />
      <AboutUs />
      <ContactUs />
      <Bumper /> */}
    </main>
  );
};