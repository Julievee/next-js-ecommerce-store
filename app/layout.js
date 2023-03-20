import './global.scss';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CookieBanner />
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/cosmetics" data-test-id="cosmetics-link">
                Cosmetics
              </Link>
            </div>
            <div>
              <Link href="/utils/cart" data-test-id="cart-link">
                Cart
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>© copyright beauty 2023</footer>
      </body>
    </html>
  );
}
