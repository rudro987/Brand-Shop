/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BrandsContext } from "../../Hooks/BrandsProvider";

const Advertisements = ({ brandName }) => {
  const { brands, isLoading } = useContext(BrandsContext);

  if (isLoading) {
    return <div className="loading loading-infinity loading-lg"></div>;
  }

  return (
    <div className="carousel w-full">
      {brands?.map((item, index) => (
        <div key={index}>
          {brandName === item.brandName && (
            <>
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img src={item.slider1} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img src={item.slider2} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img src={item.slider3} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Advertisements;
