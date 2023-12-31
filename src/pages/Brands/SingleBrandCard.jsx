/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBrandCard = ({ brand }) => {
  
  const { _id, productName, brandName, image, price, rating, type } = brand;
  return (
    
    <div className="card w-full bg-[#F5F5F5] dark:bg-formBg rounded-xl border-2 border-[#d3d3d6] dark:border-[#4D4C5A]">
      <figure className="px-10 pt-10">
        <img src={image} alt={productName} className="rounded-xl object-cover" />
      </figure>
      <div className="card-body space-y-2 lg:space-y-5">
        <h2 className="text-xl lg:text-3xl font-bold text-center">Model: {productName}</h2>
        <div className="lg:flex lg:gap-10 items-center mx-auto">
          <p className="text-sm lg:text-lg font-medium">Brand: {brandName}</p>
          <div className="flex gap-2">
            <p className="text-sm lg:text-lg font-medium">Rating: </p>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;

              return (
                <label key={index}>
                  <FaStar
                    size={20}
                    className="cursor-pointer relative top-[2px]"
                    value={rating}
                    color={currentRating <= rating ? "#36B37E" : "#A1A0AE"}
                  ></FaStar>
                </label>
              );
            })}
          </div>
        </div>
        <div className="lg:flex gap-10 items-center mx-auto">
          <p className="text-sm lg:text-lg font-medium">
            Price: <span className="text-btnColor font-semibold">${price}</span>
          </p>
          <p className="text-sm lg:text-lg font-medium">Product type: {type}</p>
        </div>
        <div className="card-actions justify-center border-t-2 border-[#4D4C5A] pt-5 space-x-10">
          <Link to={`/bikes/${brandName}/${_id}`}>
            <button className="btn rounded-md bg-btnColor text-black hover:bg-black hover:text-white border-none">
              View Details
            </button>
          </Link>
          <Link to={`/updateProducts/${_id}`}>
          <button className="btn rounded-md bg-black text-white hover:bg-btnColor hover:text-black border-none">
            Update
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBrandCard;
