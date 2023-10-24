import { ToastContainer, toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";
import { BrandsContext } from "../../Hooks/BrandsProvider";

const UpdateProduct = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [brandName, setBrandName] = useState('');
  const [updatedData, setUpdatedData] = useState(null);
  const { brands, isLoading } = useContext(BrandsContext);

  const product = useLoaderData();
  const { _id, productName, image, description, price, type } = product;

  const handleProductUpdate = (e) => {
    e.preventDefault();
    if(!rating){
      toast.error("You must select a rating to update the product info");
      return;
    }
    const form = e.target;
    const productName = form.productName.value;
    const image = form.image.value;
    const type = form.type.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;

    const updatedProduct = {
      _id,
      productName,
      brandName,
      image,
      type,
      price,
      description,
      rating,
    };

    fetch(`https://brand-shop-server-side-71jynkzgp-tanvir-hossains-projects.vercel.app/updateProducts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
          toast.success(`${productName} updated successfully!`);
          setUpdatedData(updatedProduct);
        }
      })
      .catch((err) => toast.error('Update failed because of: ', err.message))
  };

  if (isLoading) {
    return <div className="loading loading-infinity loading-lg"></div>;
  }

  return (
    <div className="max-w-[1320px] mx-auto">
      <section className="rounded-md">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="p-14 w-2/5 bg-[#FFFAFA] dark:bg-formBg rounded-lg border-2 border-[#4D4C5A]">
            <h2 className="text-3xl font-bold leading-tight text-center">
              Update Product
            </h2>
            {
              updatedData == null ? (
                <form className="mt-8" onSubmit={handleProductUpdate}>
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium">
                    {" "}
                    Product Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="productName"
                      defaultValue={productName}
                      placeholder="Enter product name"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium">
                      {" "}
                      Brand Name{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      onChange={(e) => setBrandName(e.target.value)}
                      defaultValue={brandName}
                      required
                      className="flex h-10 w-full text-secondaryTextColor rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder: focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option disabled value="">Select a brand</option>
                      {brands?.map((brand) => (
                        <option
                          key={brand._id}
                          value={brand.brandName}
                        >
                          {brand.brandName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium"> Image </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="image"
                      defaultValue={image}
                      placeholder="Enter product image URL"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium"> Type </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="type"
                      defaultValue={type}
                      placeholder="Product type"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium"> Price </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="price"
                      defaultValue={price}
                      placeholder="Enter product price"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium">
                      {" "}
                      Short Description{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <textarea
                      className="flex h-20 resize-none w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      name="description"
                      defaultValue={description}
                      placeholder="Enter description here"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium">
                      {" "}
                      Rate the Product{" "}
                    </label>
                  </div>
                  <div className="mt-2 flex gap-5 mb-10">
                    {[...Array(5)].map((star, index) => {
                      const currentRating = index + 1;

                      return (
                        <label key={index}>
                          <input
                            type="radio"
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                            className="hidden"
                            required
                          />
                          <FaStar
                            size={30}
                            className="cursor-pointer"
                            color={
                              currentRating <= (hover || rating)
                                ? "#36B37E"
                                : "#A1A0AE"
                            }
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                          ></FaStar>

                        </label>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-btnColor px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-black/80 hover:text-white"
                  >
                    Add Product{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
              ) : (
                <form className="mt-8" onSubmit={handleProductUpdate}>
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium">
                    {" "}
                    Product Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="productName"
                      defaultValue={updatedData.productName}
                      placeholder="Enter product name"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium">
                      {" "}
                      Brand Name{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      onChange={(e) => setBrandName(e.target.value)}
                      defaultValue=""
                      className="flex h-10 w-full text-secondaryTextColor rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder: focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option disabled value="">Select a brand</option>
                      {brands?.map((brand) => (
                        <option
                          key={brand._id}
                          value={brand.brandName}
                        >
                          {brand.brandName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium"> Image </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="image"
                      defaultValue={updatedData.image}
                      placeholder="Enter product image URL"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium"> Type </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="type"
                      defaultValue={updatedData.type}
                      placeholder="Product type"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium"> Price </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="price"
                      defaultValue={updatedData.price}
                      placeholder="Enter product price"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium">
                      {" "}
                      Short Description{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <textarea
                      className="flex h-20 resize-none w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      name="description"
                      defaultValue={updatedData.description}
                      placeholder="Enter description here"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium">
                      {" "}
                      Rate the Product{" "}
                    </label>
                  </div>
                  <div className="mt-2 flex gap-5 mb-10">
                    {[...Array(5)].map((star, index) => {
                      const currentRating = index + 1;

                      return (
                        <label key={index}>
                          <input
                            type="radio"
                            value={updatedData.rating}
                            onClick={() => setRating(currentRating)}
                            className="hidden"
                          />
                          <FaStar
                            size={30}
                            className="cursor-pointer"
                            value={updatedData.rating}
                            color={
                              currentRating <= (hover || rating)
                                ? "#36B37E"
                                : "#A1A0AE"
                            }
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                          ></FaStar>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-btnColor px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-black/80 hover:text-white"
                  >
                    Update Product{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
              )
            }
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </section>
    </div>
  );
};

export default UpdateProduct;