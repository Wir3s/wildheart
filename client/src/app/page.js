import styles from './page.module.css';
import Hero from './components/Hero';
import ContentArea1 from './components/ContentArea1';
import ContentArea2 from './components/ContentArea2';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ContentArea1 />
      <ContentArea2 />
      
    </main>

  );
}
