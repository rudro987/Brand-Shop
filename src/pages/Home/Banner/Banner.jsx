const Banner = () => {
    return (
        <div className="w-full lg:h-[700px] flex-col md:flex">
        <div className="lg:min-h-[700px] relative bg-banner bg-no-repeat bg-cover grid grid-cols-2">
        {/* <div className="w-full h-full bg-black opacity-90 absolute flex justify-center items-center">
        <div className="flex-col space-y-8">
        <h1 className="text-6xl text-center ">Welcome to Max Speed</h1>
        <p className="text-center text-2xl text-secondaryTextColor">Your one stop Atomotive solution</p>
        </div>
        </div>
            <img src="https://i.ibb.co/4tc4j8C/EVOTECH-TRI-SPEED-TRIPLE-1200-RR-WEB-BANNERS-2048x.webp" className="w-full h-full object-cover" /> */}
            <div className="w-full">
            <div className="px-8 py-8 lg:py-60 lg:px-32">
            <h1 className="text-xl lg:text-6xl font-bold text-secondaryTextColor">
                Welcome to Max Speed
            </h1>
            <p className="font-bold text-secondaryTextColor lg:pt-10 lg:text-center text-xs lg:text-xl">
                Your one stop Atomotive solution!
            </p>
            </div>
        </div>
        <div className="flex justify-end" >
            <img src="https://i.ibb.co/rMWKYGj/bg1.png" alt="bg-image" className="lg:w-full object-contain relative top-4 lg:top-10 " />
        </div>
        
        </div>
            
        </div>
    );
};

export default Banner;