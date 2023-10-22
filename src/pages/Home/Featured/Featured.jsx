const Featured = () => {
    return (
        <div className="mx-auto max-w-[1320px] py-10 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-xl text-center">

    <h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
      Why choose us?
    </h2>
  </div>
  <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-gray-700"
        >
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      </div>
      <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">Secured Payments</h3>
      <p className="mt-4 text-sm text-black dark:text-secondaryTextColor">
      Shop with confidence! Our website ensures secure payments with encrypted transactions and trusted payment gateways, protecting your financial information.
      </p>
    </div>
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-gray-700"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      </div>
      <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">
        Fast &amp; Easy to Load
      </h3>
      <p className="mt-4 text-sm text-black dark:text-secondaryTextColor">
      Experience lightning-fast browsing. Our website loads swiftly, providing a seamless and user-friendly experience, so you get information at your fingertips.
      </p>
    </div>
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-gray-700"
        >
          <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </div>
      <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">
        Light &amp; Dark Version
      </h3>
      <p className="mt-4 text-sm text-black dark:text-secondaryTextColor">
      Customize your experience. Choose between light and dark themes for a personalized, eye-friendly interface, adapting to your visual preferences.
      </p>
    </div>
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-gray-700"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </div>
      <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">Filter Blocks</h3>
      <p className="mt-4 text-sm text-black dark:text-secondaryTextColor">
      Narrow your search effortlessly. Our site offers advanced filter blocks, making it easy to refine your choices and find exactly what you need.
      </p>
    </div>
  </div>
</div>
    );
};

export default Featured;