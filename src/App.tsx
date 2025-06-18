import { changeTitle } from './utils/common';
import Header from './components/common/header/header';
import GiftsCard from './components/giftCard/giftsCard';
import Footer from './components/common/footer/footer';

function App() {
  changeTitle('Bakery');
  return (
    <>
      <Header />
      <GiftsCard level="bronze" />
      <Footer />
    </>
  );
}

export default App;
