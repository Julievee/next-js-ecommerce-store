import Cookies from 'js-cookie';

// more robust way to get items from cookies without parsing all the time

export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}
// more robust way to set the cookie without strinigfy all the time

export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
