import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cosmetics } from '../../../database/cosmetics';
import Cosmetic from './Cosmetic';
import styles from './cosmeticname.module.scss';

export const dynamic = 'force-dynamic';

export default function CosmeticPage({ params }) {
  const singleCosmetic = cosmetics.find((cosmetic) => {
    return cosmetic.product.toString() === params.cosmeticName;
  });

  console.log(singleCosmetic);
  if (!singleCosmetic) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <br />
      <Image
        src={`/images/${singleCosmetic.product}-${singleCosmetic.id}.jpg`}
        alt={singleCosmetic.product}
        width="250"
        height="350"
      />
      {/* <div className={styles.div}>
        {/* <ul>
          <h2>{singleCosmetic.product}</h2>
          <h4>{singleCosmetic.description}</h4>
          <br />${singleCosmetic.price}
        </ul> */}
      <Cosmetic cosmetic={singleCosmetic} />
      {/* </div> */}
    </main>
  );
}
