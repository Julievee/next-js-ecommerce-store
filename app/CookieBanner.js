'use client';

import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(false);

  useEffect(() => {
    // Check if there is a localStorage filed for cookieBanner
    const localStorageValue = getLocalStorage('areCookiesTermsAccepted');

    // If not  the initial value is true
    // If yes then the initial value is what is stored in the browser

    const initialState =
      localStorageValue === undefined ? false : localStorageValue;
    console.log(initialState);

    setAreCookiesTermsAccepted(initialState);
  }, []);

  return (
    !areCookiesTermsAccepted && (
      <>
        <div>This is the cookie police. Please accept terms and conditions</div>
        <button
          onClick={() => {
            setAreCookiesTermsAccepted(true);
            setLocalStorage('areCookiesTermsAccepted', true);
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
