/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const BrandsContext = createContext();

const BrandsProvider = ({ children }) => {
    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/addBrands', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setBrands(data);
            setIsLoading(false);
        })
        .catch(err => {
            setIsLoading(false);
            console.error(err);
        });
    }, []);

    return (
        <BrandsContext.Provider value={{brands, isLoading}}>
            <div>{children}</div>
        </BrandsContext.Provider>
    );
};

export default BrandsProvider;
