import './socialStyles.scss';
import { Link, SvgIcon } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

interface socialType {
  alt: string;
  src: any;
  testId: string;
  url?: string;
}

const socialIcons: socialType[] = [
  {
    alt: 'Facebook',
    src: FacebookIcon,
    testId: 'facebook',
  },
  {
    alt: 'Twitter',
    src: TwitterIcon,
    testId: 'twitter',
  },
  {
    alt: 'Instagram',
    src: InstagramIcon,
    testId: 'instagram',
  },
];

export default function Social() {
  return (
    <div className="social">
      {socialIcons.map((icon) => (
        <Link
          data-testid={`social-icon-${icon.testId}`}
          key={icon.testId}
          href={'/' + icon.url}
          color={'#454545'}
          rel="noopener noreferrer"
        >
          <SvgIcon component={icon.src} />
        </Link>
      ))}
    </div>
  );
}
