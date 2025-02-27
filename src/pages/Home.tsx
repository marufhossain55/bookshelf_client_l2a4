import { Helmet } from 'react-helmet';
import Banner from './Home/Banner';
import ExtraSectionBook from './Home/ExtraSectionBook';
import ExtraSectionBookBenefits from './Home/ExtraSectionBookBenefits';
import CardsHome from './Home/CardsHome';
import BookShelfMission from './Home/BookShelfMission';
import TestimonialSection from './Home/TestimonialSection';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BookShelf</title>
      </Helmet>
      <Banner />
      <ExtraSectionBook />
      <ExtraSectionBookBenefits />
      <div className="grid">
        <CardsHome />
      </div>
      <BookShelfMission />
      <TestimonialSection />
    </div>
  );
};
export default Home;
