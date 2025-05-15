import './socialStyles.scss';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import twitter from './assets/twitter.svg';

interface socialType {
  src: string;
  alt: string;
  testId: string;
  url?: string;
}

const socialIcons: socialType[] = [
  {
    src: facebook,
    alt: 'Facebook',
    testId: 'facebook',
  },
  {
    src: twitter,
    alt: 'Twitter',
    testId: 'twitter',
  },
  {
    src: instagram,
    alt: 'Instagram',
    testId: 'instagram',
  },
];

export default function Social() {
  return (
    <div className="social">
      {socialIcons.map((icon) => (
        <img
          alt={icon.alt}
          className="icons"
          data-testid={`social-icon-${icon.testId}`}
          key={icon.testId}
          src={icon.src}
          onClick={() => {
            if (icon.url) {
              window.open(icon.url, '_blank');
            }
          }}
        />
      ))}
    </div>
  );
}
