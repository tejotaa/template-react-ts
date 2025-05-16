import { useState } from 'react';
import './footerStyles.scss';

import { Divider, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

import Social from '../social/social';
import Selector from '../selector/selector';

export default function Footer() {
  const [language, setLanguage] = useState('es');
  const [currency, setCurrency] = useState('EUR');

  const languageOptions = [
    { label: 'ENGLISH', value: 'en' },
    { label: 'SPANISH', value: 'es' },
    { label: 'FRENCH', value: 'fr' },
    { label: 'GERMAN', value: 'de' },
    { label: 'ITALIAN', value: 'it' },
    { label: 'PORTUGUESE', value: 'pt' },
  ];

  const currencyOptions = [
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'GBP', value: 'GBP' },
    { label: 'JPY', value: 'JPY' },
    { label: 'AUD', value: 'AUD' },
    { label: 'CAD', value: 'CAD' },
    { label: 'CHF', value: 'CHF' },
  ];

  const optionsItem = [
    {
      value: '2025 Bakery',
      addCopyRight: true,
      url: '',
    },
    {
      value: 'Privacy',
      addCopyRight: false,
      url: 'privacy',
    },
    {
      value: 'Terms',
      addCopyRight: false,
      url: 'terms',
    },
    {
      value: 'Sitemap',
      addCopyRight: false,
      url: 'sitemap',
    },
  ];

  return (
    <section className="footer">
      <div className="footerTop"></div>
      <Divider />
      <div className="footerBottom">
        <div className="footerBottomLeft">
          {optionsItem.map((item, index) => {
            return (
              <span key={index} className="optionsItems">
                {item.addCopyRight && <CopyrightIcon fontSize="small" sx={{ marginRight: '5px' }} />}
                <Link href={'/' + item.url} underline="hover" color={'#454545'} rel="noopener noreferrer">
                  {item.value}
                </Link>
                {index < optionsItem.length - 1 && <a className="point">·</a>}
              </span>
            );
          })}
        </div>
        <div className="footerBottomRight">
          <Selector
            icon={'LanguageIcon'}
            options={languageOptions}
            optionSelected={language}
            selectorName="language"
            setOptionSelected={(event) => {
              setLanguage(event);
            }}
          />
          <Selector
            icon={'AttachMoneyIcon'}
            options={currencyOptions}
            optionSelected={currency}
            selectorName="currency"
            setOptionSelected={(event) => {
              setCurrency(event);
            }}
          />
          <Social />
        </div>
      </div>
    </section>
  );
}
