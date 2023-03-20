import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Link href="/cosmetics" data-test-id="cosmetics-link">
        <Image
          className={styles.image}
          src="/images/homepage.jpg"
          alt="cosmetics"
          width="1500"
          height="700"
        />
      </Link>
    </main>
  );
}
