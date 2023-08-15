import { useState, useEffect } from 'react';

const defaultConfig = {

  theme: 'dark',
  lang: 'es',
  token: '',

}

const useLocalStorage = (key, defaultValue = null) => {

  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) return JSON.parse(saved);
      return defaultValue;
    } catch {
      return defaultValue;
    }
  })

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [value, key]);

  return [value, setValue];
}