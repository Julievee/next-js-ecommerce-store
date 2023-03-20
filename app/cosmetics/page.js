import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { cosmetics } from '../../database/cosmetics';
import styles from './page.module.scss';

export default function CosmeticsPage() {
  const cosmeticsCookie = cookies().get('cosmeticsCookie');

  let cosmeticsCookieParsed = [];

  if (cosmeticsCookie) {
    cosmeticsCookieParsed = JSON.parse(cosmeticsCookie.value);
  }

  const cosmeticsWithHearts = cosmetics.map((cosmetic) => {
    const cosmeticWithHearts = { ...cosmetic, hearts: 0 };

    // i read the cookie and find the cosmetic

    const cosmeticInCookie = cosmeticsCookieParsed.find(
      (cosmeticObject) => cosmeticObject.id,
    );

    // if i find the cosmetic i update the amount of hearts

    if (cosmeticInCookie) {
      cosmeticWithHearts.hearts = cosmeticInCookie.hearts;
    }
    return cosmeticWithHearts;
  });

  return (
    <>
      <Link href="/cosmetics" data-test-id="link">
        <h2>Cosmetics</h2>
      </Link>
      <main className={styles.main}>
        {cosmeticsWithHearts.map((cosmetic) => {
          return (
            <div key={cosmetic.id}>
              <h1>{cosmetic.product}</h1>
              <Link
                href={`/cosmetics/${cosmetic.product.toString()}`}
                data-test-id={`${cosmetic.product}-${cosmetic.id}.jpg`}
              >
                <Image
                  src={`/images/${cosmetic.product}-${cosmetic.id}.jpg`}
                  data-test-id="cosmetic-image"
                  alt={cosmetic.product}
                  width="250"
                  height="350"
                />
              </Link>

              <h3>${cosmetic.price}</h3>
            </div>
          );
        })}
      </main>
    </>
  );
}
