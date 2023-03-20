'use client';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function Cosmetic(props) {
  return (
    <div>
      <h2>{props.cosmetic.product}</h2>
      <h4>{props.cosmetic.description}</h4>
      <br />${props.cosmetic.price}
      <br />
      <br />
      <button
        onClick={() => {
          // i get the cookie
          const cosmeticsInCookies = getParsedCookie('cosmeticsCookie');
          // if there is no cookie we initialize the value with a 1

          if (!cosmeticsInCookies) {
            // if there is no cookie function stop here
            return;
          }

          const foundCosmetic = cosmeticsInCookies.find((cosmeticInCookie) => {
            return cosmeticInCookie.id === props.cosmetic.id;
          });

          // my cosmetic is inside of the cookie
          if (foundCosmetic) {
            foundCosmetic.hearts--;

            if (foundCosmetic.hearts < 0) {
              foundCosmetic.hearts = 0;
            }

            // my cosmetic is not inside of the cookie
            // update the coolie with the new values
            setStringifiedCookie('cosmeticsCookie', cosmeticsInCookies);
          }
        }}
      >
        - ♡
      </button>
      <button
        onClick={() => {
          // i get the cookie
          const cosmeticsInCookies = getParsedCookie('cosmeticsCookie');
          // if there is no cookie we initialize the value with a 1
          if (!cosmeticsInCookies) {
            setStringifiedCookie('cosmeticsCookie', [
              { id: props.cosmetic.id, hearts: 1 },
            ]);

            // if there is no cookie funxction stop here

            return;
          }

          const foundCosmetic = cosmeticsInCookies.find((cosmeticInCookie) => {
            return cosmeticInCookie.id === props.cosmetic.id;
          });

          // my cosmetic is inside of the cookie
          if (foundCosmetic) {
            foundCosmetic.hearts++;
            // my cosmetic is not inside of the cookie
          } else {
            cosmeticsInCookies.push({ id: props.cosmetic.id, hearts: 1 });
          }
          // update the cookie with the new values
          setStringifiedCookie('cosmeticsCookie', cosmeticsInCookies);
        }}
      >
        + ♡
      </button>
    </div>
  );
}
