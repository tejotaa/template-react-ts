import { Divider } from '@mui/material';
import './headerStyles.scss';

export default function Header() {
  return (
    <div className="alternativeBackground">
      <div className="header">
        <div className="iconTitle">
          <img className={'iconStyle'} src={'/src/assets/icon.svg'} data-testid="icon" role="icon" />
          <h1 className="title">Bakery</h1>
        </div>
      </div>
      <Divider />
    </div>
  );
}
