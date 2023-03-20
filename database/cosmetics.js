import fs from 'node:fs';
import Image from 'next/image';

export const cosmetics = [
  {
    id: 1,
    product: 'blush',
    description:
      'Use on apples of your cheeks, for a healthy-looking complexion',
    price: 8.99,
    Image,
  },
  {
    id: 2,
    product: 'concealer',
    description: 'Use to conceal any imperfections',
    price: 7.99,
    Image,
  },
  {
    id: 3,
    product: 'lipstick',
    description: 'Long-wearing, matte lipstick',
    price: 9.99,
    Image,
  },
  {
    id: 4,
    product: 'mascara',
    description: 'Use for longer, fuller and darker lashes',
    price: 9.99,
    Image,
  },
];
