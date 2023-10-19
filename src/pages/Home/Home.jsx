import { Link } from "react-router-dom";
import useJsonLoader from "../../Hooks/useJsonLoader";
import Banner from "./Banner/Banner";
import BrandCard from "./BrandCard";
const Home = () => {
  const {data, loading} = useJsonLoader("brands.json");
  if(loading) return <div className="loading loading-infinity loading-lg"></div>
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-[1320px] mx-auto p-4">
      <Link to="/">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-20">
        {
          data.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
        }
        </div>
      </Link>
      
      </div>
    </div>
  );
};

export default Home;
