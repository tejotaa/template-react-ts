import { useEffect } from 'react';

export const changeTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};
