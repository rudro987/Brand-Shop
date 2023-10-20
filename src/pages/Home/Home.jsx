import Banner from "./Banner/Banner";
import BrandCard from "./BrandCard";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-[1320px] mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-20">
          <BrandCard></BrandCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
