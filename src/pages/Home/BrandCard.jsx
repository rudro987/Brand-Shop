/* eslint-disable react/prop-types */
const BrandCard = ({brand}) => {
    const {brandName, image} = brand;
  return (
    <div className="relative h-[400px] w-[300px] rounded-xl">
      <img
        src={image}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-xl object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-secondaryTextColor text-center">{brandName}</h1>
      </div>
    </div>
  );
};

export default BrandCard;
