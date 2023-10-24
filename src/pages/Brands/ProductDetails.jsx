import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userId } from "../../components/Header/NavBar/NavBar";

const ProductDetails = () => {
  const loggedinUserId = userId;
  const product = useLoaderData();
  const { productName, brandName, image, description, price, type, rating } =
    product;


  const cartItem = {...product, userId: loggedinUserId};
  delete cartItem._id;

  const handleAddToCart = () => {
    fetch("https://brand-shop-server-side-71jynkzgp-tanvir-hossains-projects.vercel.app/my-cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          toast.success(`${productName} added successfully to cart`);  
        }
      })
      .catch((err) => {err.message})
  };
  return (
    <div className="dark:bg-gradient-to-t from-[#141420a6] to-[#141420]">
    <div className="max-w-[1320px] mx-auto py-16 lg:py-28 lg:h-[85vh]">
      <div className="flex flex-col lg:flex-row w-full card">
      <div className=" w-full lg:w-1/2">
          <img
            src={image}
            alt={productName}
            className="bg-formBg rounded-xl border-2 border-[#4D4C5A]"
          />
      </div>
        
        <div className="card-body space-y-3 w-full lg:w-1/2">
          <h2 className="text-2xl font-extrabold">Model: {productName}</h2>
          <p className="text-base text-secondaryTextColor font-semibold">
            {description}
          </p>
          <div className="lg:flex gap-20 text-black dark:text-white rounded-xl border-2 border-[#4D4C5A] bg-[#F5F5F5] dark:bg-formBg p-10 w-auto">
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
                <p className="text-xl font-medium w-[70px] grow-0">Rating: </p>
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
            <button
              onClick={handleAddToCart}
              className="btn bg-btnColor hover:bg-black text-black hover:text-white border-none"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    </div>
  );
};

export default ProductDetails;
