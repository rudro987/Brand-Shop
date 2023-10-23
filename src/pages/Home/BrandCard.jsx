import { Link } from "react-router-dom";
import { useContext } from "react";
import { BrandsContext } from "../../Hooks/BrandsProvider";


/* eslint-disable react/prop-types */
const BrandCard = () => {
const {brands, isLoading} = useContext(BrandsContext);

if (isLoading) {
  return <div className="loading loading-infinity loading-lg"></div>;
}
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-20">
    {brands.map((brand, index) => (
      <div key={index} className="lg:w-[300px] rounded-md border-2 border-[#4D4C5A] bg-[#F5F5f5] dark:bg-formBg pt-5">
      <Link to={`/bikes/${brand.brandName}`}>
  <img
    src={brand.image}
    alt={brand.brandName}
    className="h-[200px] w-full rounded-t-md object-cover"
  />
  <div className="p-4">
    <h1 className="flex justify-center items-center text-2xl font-semibold">
      {brand.brandName}  {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </h1>

  </div>
  </Link>
</div>
    ))}
</div>

  )
};

export default BrandCard;
