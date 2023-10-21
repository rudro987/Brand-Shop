import { useLoaderData } from "react-router-dom";
import { userId } from "../../components/Header/NavBar/NavBar";
import { useEffect, useState } from "react";


const MyCart = () => {
    const loggedInUser = userId;
    const [filteredCart, setFilteredCart] = useState([]);
    const cartItems = useLoaderData();
    const filteredCartItems = cartItems.filter((item) => item.userId === loggedInUser);
    
    useEffect(() => {
        setFilteredCart(filteredCartItems);
    },[filteredCartItems]);
    return (
        <div className="max-w-[1320px] mx-auto p-4">
            <h1>My Cart items: {filteredCart.length}</h1>
        </div>
    );
};

export default MyCart;