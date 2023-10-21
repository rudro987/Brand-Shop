import { useLoaderData } from "react-router-dom";
import SingleBrandCard from "./SingleBrandCard";

const Brand = () => {
  const singleBrand = useLoaderData([]);
  const brandName = singleBrand[0] ? singleBrand[0].brandName : "";
  return (
    <div className="max-w-[1320px] mx-auto py-28">
    {
        singleBrand.length == 0 ? <p className='h-[40vh] lg:h-[70vh] flex justify-center items-center text-2xl lg:text-4xl'>No product uploaded in this brand yet!</p> 
        :
        <>
        <h1 className="text-3xl text-center font-bold mb-20">
        All Products of {brandName}
      </h1>
      <div className="grid md:grid-cols-2 gap-20">
        {singleBrand.map((brand) => (
          <SingleBrandCard key={brand._id} brand={brand} />
        ))}
      </div>
      
        </>
    }
        
    </div>
  );
};

export default Brand;
