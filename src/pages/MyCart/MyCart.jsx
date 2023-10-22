import { useLoaderData } from "react-router-dom";
import { userId } from "../../components/Header/NavBar/NavBar";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
  const loggedInUser = userId;
  const cartItems = useLoaderData();
  const filteredCartItems = cartItems.filter(
    (item) => item.userId === loggedInUser
  );

  return (
    <div className="dark:bg-gradient-to-t from-[#141420a6] to-[#141420]">
      <div className="max-w-[1320px] mx-auto p-4 h-full">
        <MyCartCard
          key={filteredCartItems._id}
          filteredCartItems={filteredCartItems}
        ></MyCartCard>
      </div>
    </div>
  );
};

export default MyCart;
