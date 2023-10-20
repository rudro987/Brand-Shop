import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { productName, brandName, image, description, price, type, rating } =
    product;

    const handleAddToCart = () => {
        console.log(product)
    }
  return (
    <div className="max-w-[1320px] mx-auto py-28 h-[40vh] lg:h-[85vh]">
      <div className="card lg:card-side gap-20">
        <figure>
          <img
            src={image}
            alt="Album"
            className="bg-formBg rounded-xl border-2 border-[#4D4C5A] object-cover "
          />
        </figure>
        <div className="card-body space-y-10">
          <h2 className="text-4xl font-extrabold">Model: {productName}</h2>
          <p className="text-xl text-secondaryTextColor font-semibold">
            {description}
          </p>
          <div className="flex gap-20 bg-formBg rounded-xl border-2 border-[#4D4C5A] p-10 w-7/12">
            <div className="space-y-5">
              <p className="text-xl font-semibold">Brand: {brandName}</p>
              <p className="text-xl font-semibold">
                Price:{" "}
                <span className="text-btnColor font-semibold">${price}</span>
              </p>
            </div>
            <div className="space-y-5">
              <p className="text-xl font-semibold">Type: {type}</p>
              <div className="flex gap-2 grow-0">
                <p className="text-lg font-medium w-[70px] grow-0">Rating: </p>
                <div className="flex gap-2 grow">
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;

                    return (
                      <label key={index}>
                        <FaStar
                          size={20}
                          className="cursor-pointer relative top-[2px]"
                          value={rating}
                          color={
                            currentRating <= rating ? "#36B37E" : "#A1A0AE"
                          }
                        ></FaStar>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button onClick={handleAddToCart} className="btn bg-btnColor hover:bg-black text-black hover:text-white border-none">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
