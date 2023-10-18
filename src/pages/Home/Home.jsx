import Banner from "./Banner/Banner";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-[1320px] mx-auto p-4">
        <h1 className="text-5xl">This is Home</h1>
      </div>
    </div>
  );
};

export default Home;
