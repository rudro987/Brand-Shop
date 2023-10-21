import Banner from "./Banner/Banner";
import BrandCard from "./BrandCard";
const Home = () => {

  return (
    <div className="dark:bg-gradient-to-t from-[#141420a6] to-[#141420]">
      <Banner></Banner>
      <div className="max-w-[1320px] mx-auto p-4">
          <BrandCard></BrandCard>
      </div>
    </div>
  );
};

export default Home;
