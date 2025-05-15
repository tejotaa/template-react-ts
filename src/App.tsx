import { changeTitle } from './utils/common';
import GiftsCard from './components/giftCard/giftsCard';
import Footer from './components/common/footer/footer';

function App() {
  changeTitle('Bakery');
  return (
    <>
      {/* <GiftsCard level="bronze" /> */}
      <Footer />
    </>
  );
}

export default App;
