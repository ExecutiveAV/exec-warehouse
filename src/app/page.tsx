import styles from './main.module.css';

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Landing />
      {/* <Bumper />
      <Uncovering />
      <Amplyfy />
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