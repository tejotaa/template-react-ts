import './giftsCardStyles.scss';

export default function GiftsCard({ level }: { level: string }) {
  const card = `./assets/${level}-card.png`;
  const logo = './assets/icon.svg';
  return (
    <div>
      <img className={'cardStyle'} src={card} data-testid="gift-card-card" role="image" />
      <img className={'logoStyle'} src={logo} data-testid="gift-card-logo" role="logo" />
    </div>
  );
}
