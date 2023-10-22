const NewsLetter = () => {
    return (
        <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-10">
    <div className="mb-10 w-full md:w-2/3 lg:mb-0 lg:w-1/2">
      <img
        className="h-full w-full rounded-md object-cover"
        src="https://i.ibb.co/JFLrN7d/rolls-royce-phantom-top-10.webp"
        alt="Newsletter"
      />
    </div>
    <div className="w-full md:w-2/3 lg:w-1/2">
      <p className="text-sm font-bold text-black dark:text-white">
        Grow . Improve . Run faster
      </p>
      <h2 className="mt-4 text-3xl font-bold text-black dark:text-white">
        Sign up for our weekly newsletter
      </h2>
      <p className="mt-4 text-black dark:text-secondaryTextColor">
        Get the latest news and updates on upcoming brands and their products weekly.
      </p>
      <div className="mt-4">
        <p className="font-semibold text-black dark:text-secondaryTextColor">
          Trusted by over 100,000+ businesses and individuals
        </p>
      </div>
      <form className="mt-6">
        <div className="flex w-full max-w-md flex-col space-y-4">
          <input
            className="flex h-10 w-full rounded-md bg-secondaryTextColor px-3 py-2 text-sm placeholder:text-gray-600"
            type="email"
            placeholder="Email"
          />
          <button
            type="button"
            className="w-full rounded-md bg-black dark:bg-btnColor dark:hover:bg-black hover:bg-btnColor px-3 py-2 text-sm font-semibold text-white dark:text-black hover:text-black dark:hover:text-white shadow-sm"
          >
            Subscribe
          </button>
        </div>
      </form>
      <p className="mt-2">
        <span className="text-sm text-black dark:text-secondaryTextColor">
          By signing up, you agree to our terms of service and privacy policy.
        </span>
      </p>
    </div>
  </div>
</div>

    );
};

export default NewsLetter;