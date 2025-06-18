import './giftsCardStyles.scss';

export default function GiftsCard({ level }: { level: string }) {
  return (
    <div>
      <img
        className={'cardStyle'}
        src={`/src/components/giftCard/assets/${level}-card.png`}
        data-testid="gift-card-card"
        role="image"
      />
    </div>
  );
}
