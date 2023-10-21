import { Link } from "react-router-dom";
import useJsonLoader from "../../Hooks/useJsonLoader";

/* eslint-disable react/prop-types */
const BrandCard = () => {
  const { data, loading } = useJsonLoader("brands.json");
  if (loading)
    return <div className="loading loading-infinity loading-lg"></div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-20">
      {data.map((brand) => (
          <div
            key={brand._id}
            className="relative h-[400px] w-[300px] rounded-xl"
          >
            <Link to={`/bikes/${brand.brandName}`}>
              <img
                src={brand.image}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-secondaryTextColor text-center">
                  {brand.brandName}
                </h1>
              </div>
            </Link>
          </div>
      ))}
    </div>
  );
};

export default BrandCard;
