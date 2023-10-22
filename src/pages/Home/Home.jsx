import Banner from "./Banner/Banner";
import BrandCard from "./BrandCard";
import Featured from "./Featured/Featured";
import NewsLetter from "./Newsletter/NewsLetter";
const Home = () => {

  return (
    <div className="dark:bg-gradient-to-t from-[#141420a6] to-[#141420]">
      <Banner></Banner>
      <Featured></Featured>
      
      <div className="max-w-[1320px] mx-auto p-4">
          <BrandCard></BrandCard>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
