import { useLoaderData } from "react-router-dom";
import SingleBrandCard from "./SingleBrandCard";
import Advertisements from "./Advertisements";

const Brand = () => {
  const singleBrand = useLoaderData([]);
  const brandName = singleBrand[0] ? singleBrand[0].brandName : "";

  if(singleBrand.length === 0) {
    return (
      <div>
          <p className="w-full h-[85vh] flex justify-center items-center text-2xl lg:text-4xl">
            No product uploaded in this brand yet!
          </p>
        </div>
    )
  }
  return (
    <div className="dark:bg-gradient-to-t from-[#141420a6] to-[#141420]">
    <div className="max-w-[1320px] mx-auto py-28">
        <>
          <h1 className="text-3xl text-center font-bold mb-20">
            All Products of {brandName}
          </h1>
          <Advertisements brandName={brandName}></Advertisements>
          <div className="grid md:grid-cols-2 gap-20 mt-20">
            {singleBrand.map((brand) => (
                <SingleBrandCard key={brand._id} brand={brand} />
            ))}
          </div>
        </>
    </div>
    </div>
  );
};

export default Brand;
